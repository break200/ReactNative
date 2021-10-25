import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, DeviceEventEmitter, View} from 'react-native';

const EmitNext = ({route, navigation}) => {

    // useEffect(() => {
    //     //특정 화면에서 뒤로 갈경우 호출원할경우 특히 api 호출을 원할때
    //     return () => {
    //         DeviceEventEmitter.emit('emit');
    //     }
    // }, []);


    const onPress = () => {
        DeviceEventEmitter.emit('emit', {taobaoBind:false});
        navigation.goBack();
    };

    return (
        <View style={styles.StyleSheet}>
            <Button title={'특정 배열 값 변경'} onPress={onPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: 0.5,
        backgroundColor: 'blue',
    },
    background: {
        position: 'absolute',
        marginTop: 20,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.5,
    },
});

export default EmitNext;
