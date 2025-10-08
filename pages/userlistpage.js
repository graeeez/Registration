import { View, Text, FlatList, Button, Alert } from 'react-native';
import styles, { BUTTON_COLOR } from '../styles';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function UserListPage({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.20.208:8000/registration/api/users/")
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    const handleEdit = (user) => {
        navigation.navigate('EditUser', { user });
    }

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",               
            (
                { text: "Cancel", style: "cancel" },
                { text: "Delete", style: "destructive", 
                    onPress: () => {

                    axios.delete(`http://192.168.20.208:8000/registration/api/users/${id}/`)
                        .then(() => {
                            setUsers(users.filter(user => user.id !== id));
                            Alert.alert("User deleted successfully");
                        })
                        .catch(err => {
                            console.error(err);
                            Alert.alert("Error", "Failed to delete user");
                            console.error(err);
                        });
                    },  
                }
            )
        );
    }
            


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

                            
                            <View style={styles.buttonContainer}>
                                <Button title="Edit" onPress={() =>handleEdit(item)} color={BUTTON_COLOR} />
                            </View>

                            <View style={styles.buttonContainer}>
                            <Button title="Delete" color="red"/>
                            </View>

                        </View>
                    </View>
                )}
            />
        </View>
    );
}