import React  from 'react';
import {Button, StyleSheet, Text,View , NativeModules } from 'react-native';

const IosView = ({route, navigation}) => {

    const { SomeModule } = NativeModules;

    const onPress = () => {
        SomeModule?.someMethod('someParameter');
    };

    const onPressKeyValue = () => {

        SomeModule?.getAllTasks(
            {
                name: 'idid',
                email: 'token',
            },
            (error, tasks) => {
                if (!error) {
                    // setTimeout(() => {
                    //     setDeviceToken(tasks[0].token);
                    // }, 1500);
                    // const key = tasks[0].key
                    // const date = tasks[0].date
                    // console.log(key);
                    // alert(date);
                }
            },
        );
    }

    const onPressString = () => {
        SomeModule?.getAllTasksString('sendString',
            (error, tasks) => {
                if (!error) {
                    // setTimeout(() => {
                    //     setDeviceToken(tasks[0].token);
                    // }, 1500);
                    // const key = tasks[0].key
                    // const date = tasks[0].date
                    // console.log(key);
                    // alert(date);
                }
            },
        );
    }

    return (
        <View style={styles.StyleSheet}>
            <Text>브릿지 연결</Text>
            <Button title={'IOS 데이터 전송'} onPress={onPress}/>
            <Button title={'react => ios => react callBack keyvalue'} onPress={onPressKeyValue}/>
            <Button title={'react => ios => react callBack string'} onPress={onPressString}/>
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

export default IosView;
