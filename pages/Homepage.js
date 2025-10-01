import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../styles';

export default function Homepage({navigation}) {
    return(
        <View style={styles.container}>
            
            <Image source={require('../assets/buttercup.png')}
            style={styles.homepageImage}>
            </Image>
            <Text style={styles.pageTitle}>Homepage</Text>

             

            <View style={styles.buttonContainer}>
                <Button 
                    title="Register"
                    color="#204438ff" 
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    );
};