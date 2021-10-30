import React, {useCallback, useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput ,View} from 'react-native';
import CallBackChild from "./CallBackChild";

const UseCallBackView = ({route, navigation}) => {
    const [number, setNumber] = useState(1);

    const getItems = useCallback(() => {
          return [number , number + 1 , number + 2]
    },[number])

    function textToInt (text){
        console.log(text);
        let myInt = parseInt(text); //10
        setNumber(myInt);
    }

    return (
        <View style = {{backgroundColor:(number % 2) ? 'red' : 'blue' , justifyContent:'center'}}>
            <TextInput
                style={styles.textInput}
                value = {number}
                onChangeText={ text => textToInt(text)}
                placeholder="숫자만 입력하세요."
            />
            <CallBackChild getItem={getItems}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
});

export default UseCallBackView;
