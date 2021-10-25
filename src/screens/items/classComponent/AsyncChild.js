import React, {useState} from 'react';
import {StyleSheet, Button, View,} from 'react-native';

const AsyncChild = ({change}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(preState => !preState);
        change(isEnabled);
    }

    return (
        <View style={styles.container}>
            <Button title={'setState 변경 비동기'} onPress={toggleSwitch}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 200,
        backgroundColor: 'red',
    },
});

export default AsyncChild;
