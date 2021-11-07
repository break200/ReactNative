import React  from 'react';
import {Button, StyleSheet, Text,View , NativeModules } from 'react-native';

const IosView = ({route, navigation}) => {

    const onPress = () => {
        const share = NativeModules.SomeModule;
        share?.someMethod('someParameter');
    };

    return (
        <View style={styles.StyleSheet}>
            <Text>브릿지 연결</Text>
            <Button title={'IOS 데이터 전송'} onPress={onPress}/>
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
