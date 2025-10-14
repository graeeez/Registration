import { View, Text, FlatList, Button, Alert } from 'react-native';
import styles, { BUTTON_COLOR } from '../styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_BASE = 'http://192.168.30.212:8000/registration/api';

export default function UserListPage({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE}/users/`)
            .then(res => setUsers(res.data))
            .catch(err => {
                console.error(err);
                Alert.alert('Error', 'Failed to load users');
            });
    }, []);

    const handleEdit = (user) => {
        navigation.navigate('EditUser', { user });
    };

    const handleDelete = (id) => {
        Alert.alert(
            'Confirm Delete',
            'Are you sure you want to delete this user?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await axios.delete(`${API_BASE}/users/${id}/`);
                            setUsers(prev => prev.filter(user => user.id !== id));
                            Alert.alert('Success', 'User deleted successfully');
                        } catch (err) {
                            console.error(err);
                            Alert.alert('Error', 'Failed to delete user');
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Registered Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.reviewContainer}>
                        <View style={styles.userItem}>
                            <Text style={styles.userName}>Firstname: {item.first_name}</Text>
                            <Text style={styles.userName}>Lastname: {item.last_name}</Text>
                            <Text style={styles.userEmail}>Email: {item.email}</Text>
                            <Text style={styles.userGender}>Gender: {item.gender}</Text>

                            <View style={{ flexDirection: 'row', marginTop: 12 }}>
                                <View style={{ flex: 1, marginRight: 6 }}>
                                    <Button title="Edit" color='#143f34ff' onPress={() => handleEdit(item)} />
                                </View>
                                <View style={{ flex: 1, marginLeft: 6 }}>
                                    <Button title="Delete" color="red" onPress={() => handleDelete(item.id)} />
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}