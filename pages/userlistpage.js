import { View, Text, FlatList } from 'react-native';
import styles from '../styles';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function UserListPage({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

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
                        </View>
                    </View>
                )}
            />
        </View>
    );
}