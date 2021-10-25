import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageNext = ({route, navigation}) => {
    const [text , setText] = useState('');
    const onPress = async () => {
        try {
            const value = await AsyncStorage.getItem('@storage_Key')
            if(value !== null) {
                // value previously stored
                setText(value);
            }
        } catch(e) {
            // error reading value
            console.log('error getStorage');
        }
    }
    return (
        <View style={styles.container}>
            <View style={ styles.container }>
                <Button style={{width:100 , height:50}} title={'데이터 가져오기'} onPress = {onPress}/>
            </View>
            <View style={ styles.container }>
                <Text>{text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    absolute: {
        position: 'absolute',
        top: 100,
        left: 100,
        bottom: 100,
        right: 100,
    },
});

export default AsyncStorageNext;
