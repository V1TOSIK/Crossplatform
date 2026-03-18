import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs, Timestamp } from 'firebase/firestore';
import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

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

    const tasksList = data.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setTasks(tasksList);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    maxWidth: '40%',
  },
  taskItem: {
    marginTop: 10,
  },
  taskTitle: {
    fontWeight: '600',
  },
  taskDescription: {
    color: '#555',
  },
});