import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { loadProfile, saveProfile } from '../services/profile/profile-service';
import { UserProfile } from "../types/profile.types";

export default function ProfileScreen() {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    const [form, setForm] = useState<UserProfile>({
        name: '',
        country: '',
        city: ''
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        setLoading(true);
        const res = await loadProfile();
        if (res.isSuccess == true) {
            setProfile(res.value);
            setForm(res.value);
            setIsEditing(false);
        } else if (res.message === 'Profile not found') {
            setIsEditing(true); // профіль ще не заповнено
        } else {
            setError(res.message);
        }
        setLoading(false);
    };

    const handleSave = async () => {
        setLoading(true);
        const res = await saveProfile(form);
        if (res.isSuccess == true) {
            setProfile(res.value);
            setIsEditing(false);
        } else {
            setError(res.message);
        }
        setLoading(false);
    };

    if (loading) return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {isEditing ? (
                <>
                    <Text style={styles.heading}>Complete your profile</Text>
                    <TextInput placeholder="Name" value={form.name} onChangeText={text => setForm({ ...form, name: text })} style={styles.input} />
                    <TextInput placeholder="Country" value={form.country} onChangeText={text => setForm({ ...form, country: text })} style={styles.input} />
                    <TextInput placeholder="City" value={form.city} onChangeText={text => setForm({ ...form, city: text })} style={styles.input} />
                    <Button title="Save" onPress={handleSave} />
                    {error ? <Text style={styles.error}>{error}</Text> : null}
                </>
            ) : (
                <>
                    <Text style={styles.profileText}>Name: {profile?.name}</Text>
                    <Text style={styles.profileText}>Country: {profile?.country}</Text>
                    <Text style={styles.profileText}>City: {profile?.city}</Text>
                    <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5 },
    profileText: { fontSize: 16, marginVertical: 3 },
    heading: { fontSize: 18, marginBottom: 10, fontWeight: 'bold' },
    error: { color: 'red', marginTop: 5 }
});