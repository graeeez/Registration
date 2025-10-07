import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles, { BUTTON_COLOR } from '../styles';

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
                    onPress={() => navigation.navigate('Register')}
                    color={BUTTON_COLOR}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button 
                    title="View Users"
                    onPress={() => navigation.navigate('UserList')}
                    color={BUTTON_COLOR}
                />
            </View>
        </View>
    );
};