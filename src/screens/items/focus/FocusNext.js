import React, {useEffect, useState} from 'react';
import {Button, StyleSheet , View} from 'react-native';

const FocusNext = ({route, navigation}) => {

    const onPress = () => {
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

export default FocusNext;
