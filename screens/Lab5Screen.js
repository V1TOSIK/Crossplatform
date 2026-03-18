import { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';

export default function Lab5Screen() {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Button title="Open" onPress={() => setVisible(true)} />
      <Modal visible={visible} transparent={true}>
        <View>
          <Text>Modal</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}