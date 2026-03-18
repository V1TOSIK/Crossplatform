import { View, Image, ScrollView } from 'react-native';

export default function Lab10Screen() {
  return (
    <ScrollView contentContainerStyle={{ alignItems:'center', padding:20 }}>
      
      <Image
        source={require('../assets/logo.png')}
        style={{ width:150, height:150, marginBottom:20 }}
        resizeMode="contain"
      />

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width:150, height:150 }}
      />

    </ScrollView>
  );
}