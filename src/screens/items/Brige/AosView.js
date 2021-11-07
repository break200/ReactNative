import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text,View} from 'react-native';

const AosView = ({route, navigation}) => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ]);

    useEffect(() => {
        console.log(users);
    },[users]);

    const onPress = () => {
        setUsers(
            users.map(user =>
                user.id === 2 ? { ...user, username: "son sang hee" , email:'break200@naver.com' } : { ...user }
            )
        );
    };

    const onPressKey = () => {
        setUsers(
            users.map(user =>
                user.id === 1 ? { ...user, active: !user.active} : { ...user, active: false }
            )
        );
    };

    const onPressNext = () => {
        navigation.navigate('HooksTwo');
    };

    return (
        <View style={styles.StyleSheet}>
            <Text>배열값 추가</Text>
            <Button title={'특정 배열 값 변경'} onPress={onPress}/>
            <Button title={'배열 특성 추가'} onPress={onPressKey}/>
            <Button title={'배열에 textInput'} onPress={onPressNext}/>
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

export default AosView;
