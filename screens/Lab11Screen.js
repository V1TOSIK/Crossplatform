import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image, Alert, ScrollView, ActivityIndicator, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Accelerometer } from 'expo-sensors';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Lab11Screen() {
  // -------------------- Картинка --------------------
  const [image, setImage] = useState(null);

  const pickFromGallery = async () => {
    if (Platform.OS === 'web') {
      Alert.alert('Веб', 'Галерея не доступна на вебі');
      return;
    }
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Помилка', 'Потрібен доступ до галереї!');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const takePhoto = async () => {
    if (Platform.OS === 'web') {
      Alert.alert('Веб', 'Камера не доступна на вебі');
      return;
    }
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Помилка', 'Потрібен доступ до камери!');
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  // -------------------- Акселерометр --------------------
  const [accelData, setAccelData] = useState({ x: 0, y: 0, z: 0 });
  useEffect(() => {
    const sub = Accelerometer.addListener(setAccelData);
    Accelerometer.setUpdateInterval(100); // 10 разів на секунду
    return () => sub.remove();
  }, []);
  const totalAccel = Math.sqrt(accelData.x ** 2 + accelData.y ** 2 + accelData.z ** 2);

  // -------------------- Карта --------------------
  const [location, setLocation] = useState(null);
  useEffect(() => {
    if (Platform.OS === 'web') return; // на вебі не робимо запит локації
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Помилка', 'Потрібен доступ до локації!');
        return;
      }
      let currentLoc = await Location.getCurrentPositionAsync({});
      setLocation(currentLoc.coords);
    })();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* --- Камера та Галерея --- */}
      {Platform.OS !== 'web' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Фото</Text>
          <Button title="Зробити фото" onPress={takePhoto} />
          <Button title="Обрати фото з галереї" onPress={pickFromGallery} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
      )}

      {/* --- Акселерометр --- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Акселерометр</Text>
        <Text>X: {accelData.x.toFixed(2)}</Text>
        <Text>Y: {accelData.y.toFixed(2)}</Text>
        <Text>Z: {accelData.z.toFixed(2)}</Text>
        <Text style={{ color: totalAccel > 1.5 ? 'red' : 'green' }}>
          Total: {totalAccel.toFixed(2)}
        </Text>
      </View>

      {/* --- Карта --- */}
      {Platform.OS !== 'web' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Локація</Text>
          {!location ? (
            <ActivityIndicator size="large" />
          ) : (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={{ latitude: location.latitude, longitude: location.longitude }}
                title="Ви тут"
              />
            </MapView>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  section: { marginBottom: 20, padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 5 },
  image: { width: 300, height: 300, marginTop: 10, borderRadius: 10 },
  map: { width: '100%', height: 300, marginTop: 10 },
});