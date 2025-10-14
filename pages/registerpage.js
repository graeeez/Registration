import * as React from 'react';
import { View, Text, Button } from 'react-native';
import styles, { BUTTON_COLOR } from '../styles';
import {useState} from 'react';
import { TextInput } from 'react-native';

export default function RegisterPage({ navigation }) {
const [formData, setformData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    gender: '',
});

const handleChange = (field, value) => {
    setformData({...formData, [field]: value});
}; 

    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>User Registration</Text>

               <TextInput style={styles.input}   
                placeholder="First Name"
                value={formData.first_name}
                onChangeText={(text) => handleChange('first_name', text)}
               />

                <TextInput  style={styles.input}
                placeholder="Last Name"
                value={formData.last_name}
                onChangeText={(text) => handleChange('last_name', text)}
               />

                <TextInput style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => handleChange('email', text)}
               />
                <TextInput style={styles.input}
                placeholder="Password"
                value={formData.password}
                onChangeText={(text) => handleChange('password', text)}
                secureTextEntry
                />

               <TextInput style={styles.input}
                placeholder="Gender"
                value={formData.gender}
                onChangeText={(text) => handleChange('gender', text)}
               />

               <Button title="Register" 
               onPress={() =>  navigation.navigate("Review",{formData})}
                color={BUTTON_COLOR}/>
            
        </View>
    );
}