import React  from 'react';
import {StyleSheet,View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// yarn add @react-native-async-storage/async-storage  설치
const AsyncStorageView = ({route, navigation}) => {
    const onPress = async () => {
        try {
            await AsyncStorage.setItem('@storage_Key', '데이터 저장')
        } catch (e) {
            // saving error
            console.log('error save');
        }
    }

    const onNext =  () => {
        navigation.navigate('AsyncStorageNext');
    }


    return (
        <View style={styles.container}>
            <View style={ styles.container }>
                <Button title = '저장' onPress={onPress}/>
            </View>
            <View style={ styles.container }>
            <Button title = '뒤로가기' onPress={onNext}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    absolute: {
        position: 'absolute',
        top: 100,
        left: 100,
        bottom: 100,
        right: 100,
    },
});

export default AsyncStorageView;
