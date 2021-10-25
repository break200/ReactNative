import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button , DeviceEventEmitter} from 'react-native';

const EmitHome = ({navigation, route}) => {

    useEffect(() => {
        let subscription =  DeviceEventEmitter.addListener('emit', (events) => {
            alert(`${events.taobaoBind}`);
        })
        //구독 삭제
        // subscription.remove()
    }, []);


    const onPress = () => {
        navigation.navigate('EmitNext');
    };

    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <Button title={'다음 페이지'} onPress={onPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    sideContainer: {
        marginTop: 30,
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
    },
});

export default EmitHome;
