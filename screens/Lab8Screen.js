import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Lab8Screen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (!name || !email) {
      setError('Заповни всі поля');
      return;
    }
    setError('');
    console.log(name, email);
  };

  return (
    <View style={{ padding:20 }}>
      <TextInput placeholder="Ім'я" onChangeText={setName} style={{ borderWidth:1, marginBottom:10 }} />
      <TextInput placeholder="Email" onChangeText={setEmail} style={{ borderWidth:1, marginBottom:10 }} />

      {error ? <Text style={{ color:'red' }}>{error}</Text> : null}

      <Button title="Надіслати" onPress={submit} />
    </View>
  );
}