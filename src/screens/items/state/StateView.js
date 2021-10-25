import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


const StateView = ({route, navigation}) => {

    const [number , setNumber] = useState(0);


    const onPressplus = () => {
        setNumber(number + 1);

    };

    const onPressminus = () => {
        setNumber(number - 1);
    };

    const onPressplusDouble = () => {
        setNumber(number => number + 1);
        setNumber(number => number + 1);

    };

    const onPressminusDouble = () => {
        setNumber(number => number - 1);
        setNumber(number => number - 1);
    };

    return (
        <View style={styles.container}>
            <Text>{number}</Text>
            <Button style ={{width: 80 , height:80}} onPress = {onPressplus} title={'플러스'}/>
            <Button style ={{width: 80 , height:80}} onPress = {onPressminus} title={'마이너스'}/>

            <Button style ={{width: 80 , height:80}} onPress = {onPressplusDouble} title={'플러스더블 비동기 처리'}/>
            <Button style ={{width: 80 , height:80}} onPress = {onPressminusDouble} title={'마이너스더블 비동기 처리'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default StateView;
