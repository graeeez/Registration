import { View, Text, Button, Alert } from 'react-native';
import styles, { BUTTON_COLOR } from '../styles';
import axios from 'axios';

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/registration/api/register/", formData);
            Alert.alert("Success", "User registered successfully"); 
                navigation.getBack();
            
        } catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || " Something went wrong"));
            
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

            <Button
                title="Go back to edit"
                onPress={() => navigation.goBack()}
                color={BUTTON_COLOR}
            />

            <Button
                title="Submit"
                onPress={handleSubmit}
                color={BUTTON_COLOR}
            />

        </View>
    );
}