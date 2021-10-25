import React, {useState} from 'react';
import {Button, StyleSheet, View,} from 'react-native';

const BodyChild = ({  getBody }) => {
    const [number , setNumber] = useState(0);
    const onClick = () => {
        setNumber(number + 1);
        getBody(number);
    }

    return (
        <View style={styles.sectionContainer} >
            <Button title={'body 값 상단 componet 전달'} onPress={onClick} />
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
});
export default BodyChild;
