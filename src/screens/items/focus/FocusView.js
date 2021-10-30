import React, { useEffect ,useCallback} from 'react';
import { useIsFocused ,useFocusEffect} from '@react-navigation/native';
import {StyleSheet, View, Button } from 'react-native';

const FocusView = ({navigation, route}) => {

    useFocusEffect(
        useCallback(() => {
            console.log('useFocusEffect');
        }, [])
    );

// useEffect + focus 이벤트
    useEffect(() => {
        return navigation.addListener('focus', () => {
            console.log('focus');
        });
    }, [navigation]);

// useIsFocused
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
            console.log('isFocused');
        }
    }, [isFocused]);



    const onPress = () => {
        navigation.navigate('FocusNext');
    };

    return (
        <View style={styles.container}>
            <View style={styles.sideContainer}>
                <Button title={'다음 페이지'} onPress={onPress}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    sideContainer: {
        marginTop: 30,
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
    },
});

export default FocusView;
