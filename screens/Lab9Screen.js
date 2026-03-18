import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Lab9Screen() {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('name').then(val => {
      if (val) setSaved(val);
    });
  }, []);

  const save = async () => {
    await AsyncStorage.setItem('name', name);
    setSaved(name);
    setName('');
  };

  const clear = async () => {
    await AsyncStorage.removeItem('name');
    setSaved('');
  };

  return (
    <View style={{ padding:20 }}>
      <Text>Збережено: {saved}</Text>

      <TextInput
        placeholder="Ім'я"
        value={name}
        onChangeText={setName}
        style={{ borderWidth:1, marginBottom:10 }}
      />

      <Button title="Зберегти" onPress={save} />
      <Button title="Очистити" onPress={clear} />
    </View>
  );
}