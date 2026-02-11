import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  Pressable
} from 'react-native';

export default function ModalExample() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: 20 }}>

      <Button
        title="Показати модальне вікно"
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Це модальне вікно!
            </Text>

            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>
                Закрити
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  modalView: {
    width: 300,
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5
  },

  modalText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center'
  },

  closeButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8
  },

  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
