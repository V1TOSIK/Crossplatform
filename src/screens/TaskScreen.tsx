import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { TaskDto } from '../types/task.types';
import { db } from '../config/firebase';
import {
  collection,
  addDoc,
  getDocs,
  Timestamp
} from 'firebase/firestore';

export default function HomeScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState<TaskDto[]>([]);

  const tasksCollection = collection(db, 'tasks');

  const addTask = async () => {
    if (!title) return;

    await addDoc(tasksCollection, {
      title,
      description,
      createdAt: Timestamp.now()
    });

    setTitle('');
    setDescription('');
    loadTasks();
  };

  const loadTasks = async () => {
    const data = await getDocs(tasksCollection);

    const tasksList: TaskDto[] = data.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<TaskDto, 'id'>)
    }));

    setTasks(tasksList);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />

      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginTop: 10 }}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}