import { View, Text, FlatList, Button, Alert } from 'react-native';
import styles, { BUTTON_COLOR } from '../styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserListPage({navigation}) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://peitel-backend-86lh.onrender.com/registration/api/users/")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((err) => {
                console.error(err);
                Alert.alert('Error', 'Failed to load users.');
            });
    }, []
    );

    const handleEdit = (user) => {
        navigation.navigate('EditUser', {user});
    }

    const handleDelete = (id) => {
        window.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            (
                { text: "Cancel", style: "cancel" },
                { 
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios.delete(`https://peitel-backend-86lh.onrender.com/registration/api/users/${id}/`)
                        .then(() => {
                            window.alert("Success", "User deleted successfully");
                        })
                        .catch((err) => {
                            console.error(err);
                            window.alert("Error", "Failed to delete user");
                        });

                    },
                }
            )
        );

        axios.delete(`https://peitel-backend-86lh.onrender.com/registration/api/users/${id}/`)
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
                                <View style={{  marginRight: 6 }}>
                                    <Button title="Edit" color='#143f34ff' onPress={() => handleEdit(item)} />
                                </View>
                                <View style={{ flex: 2, marginLeft: 6 }}>
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