
import { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles, { BUTTON_COLOR } from '../styles';
import axios from 'axios';

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setSuccess(false);

        try {
            await axios.post("https://peitel-backend.onrender.com/registration/api/register/", formData);

            setSuccess(true);
            // show success and then go back when user confirms
            Alert.alert("Success", "User registered successfully", [
                { text: "OK", onPress: () => navigation.goBack() }
            ]);
        } catch (error) {
            const message = error.response?.data
                ? JSON.stringify(error.response.data)
                : error.message || "Something went wrong";
            Alert.alert("Error", message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Review Information</Text>

            <View style={styles.reviewContainer}>
                <View style={styles.reviewItem}>
                    <Text style={styles.label}>Firstname:</Text>
                    <Text style={styles.value}>{formData.first_name}</Text>
                </View>
                <View style={styles.reviewItem}>
                    <Text style={styles.label}>Lastname:</Text>
                    <Text style={styles.value}>{formData.last_name}</Text>
                </View>
                <View style={styles.reviewItem}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{formData.email}</Text>
                </View>
                <View style={styles.reviewItem}>
                    <Text style={styles.label}>Password:</Text>
                    <Text style={styles.value}>{formData.password}</Text>
                </View>
                <View style={styles.reviewItem}>
                    <Text style={styles.label}>Gender:</Text>
                    <Text style={styles.value}>{formData.gender}</Text>
                </View>
            </View>


            <View style={{ height: 20 }} />
            <Button
                title="Go back to edit"
                onPress={() => navigation.goBack()}
                color={BUTTON_COLOR}
            />

            <View style={{ height: 20 }} />
            <Button
                title="Submit"
                onPress={handleSubmit}
                color={BUTTON_COLOR}
            />

        </View>
    );
}