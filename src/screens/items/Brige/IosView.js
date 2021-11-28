import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View, NativeModules, NativeEventEmitter, DeviceEventEmitter} from 'react-native';

const IosView = ({route, navigation}) => {

    const { SomeModule } = NativeModules;
    const { RNEventEmitter } = NativeModules
    const eventEmitter = new NativeEventEmitter(RNEventEmitter);

    useEffect(() => {
        let subscription =  eventEmitter.addListener("UnReadMsgCountEvent", (data) => {
            // console.log("ios 확인해주라:", data && data.unReadMsgCount)
            if (data?.unReadMsgCount == 10){
                alert('100% 다운로드 완료');
            }
        });
    }, []);


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
                    const key = tasks.key
                    const date = tasks.date
                    console.log(key);
                    alert(date);
                }
            },
        );
    }

    const onPressKeyCall = () => {
        RNEventEmitter?.someMethod('someParameter');
    }


    return (
        <View style={styles.StyleSheet}>
            <Text>브릿지 연결</Text>
            <Button title={'IOS 데이터 전송'} onPress={onPress}/>
            <Button title={'react => ios => react callBack keyvalue'} onPress={onPressKeyValue}/>
            <Button title={'react => ios => react callBack onPressKeyCall'} onPress={onPressKeyCall}/>
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
