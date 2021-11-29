
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text, Button} from 'react-native';
import ItemBox from '../FlatList/ItemBox';


const VariableView = () => {


    const variable = { one:'' , two:false , three:0 };

    //변수 변경
    function down() {
        for (let i = 0; i < 100; i++) {
            console.log('var  ' + '=== %d' + ' for  ' +'%s' , '%s' , i , variable.one , variable.two , variable.three );
            console.log(`data: ${JSON.stringify(variable.one)}`);
            variable.one = `for === 인덱스값: ${i}`;
        }
    }

    //로그찍기
    const top = () => {
        variable.two = !variable.two;
        variable.three = variable.three + 1;
    }

    //시간차 지연
    const delay = () => {
       const data = [1,2,3,4,5];
       for (let i = 0 ; i < data.length; i++ ){
           setTimeout( () => {console.log(i)},  i * 2000);
       }
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{width:'100%',height: 80}}>
                    <Button style={{width: 50 ,height: 50}} title={'for문 로그 찍기'} onPress={down}/>
                    <Button style={{width: 50 ,height: 50}} title={'변수 변경'} onPress={top}/>
                    <Button style={{width: 50 ,height: 50}} title={'딜레이 호출'} onPress={delay}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        backgroundColor: 'black',
    },
});

export default VariableView;
