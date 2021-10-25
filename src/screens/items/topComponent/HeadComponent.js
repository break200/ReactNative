import React, {useState} from 'react';
import {Button, StyleSheet, Text, View,} from 'react-native';
import HeadChild from './HeadChild';
import BodyChild from './BodyChild';
import BottomChild from './BottomChild';

const HeadComponent = () => {

    const [number , setNumber] = useState(0);
    const [bodyNumber , setBodyNumber] = useState(0);

    const onpress = () => {
        setNumber(number + 1);
    }
    const getDataTwo = (number) => {
        setBodyNumber(number);
    }
    const getBottom = (number) => {
        setNumber(number);
    }

    return (
        <View style={styles.Container}>
            <View style={styles.Container}>
                <Button style={styles.buttonPostion} title={'상단 하단 전달'} onPress = {onpress}/>
                <HeadChild number = {number}/>
            </View>
            <View style={styles.Container}>
                <BodyChild number={bodyNumber} getBody={getDataTwo}/>
                <Text style={{fontsize:20}}>{bodyNumber}</Text>
            </View>
            <View style={styles.Container}>
                <BottomChild number={number} sendData={getBottom}/>
                <Text>{number}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    buttonPostion:{
        width:30,
        height:20,
    },
});

export default HeadComponent;
