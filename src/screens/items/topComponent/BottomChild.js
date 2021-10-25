import React, {useState,useEffect} from 'react';
import {Button, StyleSheet, View,} from 'react-native';

const BottomChild = ({number , sendData}) => {
    const onClick = () => {
        console.log(number);
        sendData(number + 1);
    }
    return (
        <View style={styles.sectionContainer} >
            <Button title={'상단 하단 상단 전달'} onPress={onClick} />
        </View>
    );
};


const styles = StyleSheet.create({
    sectionContainer: {
        width:'100%',
        height: 150 ,
        backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center",
    },
    TextCard: {
        fontSize:20,
    },
});

export default BottomChild;
