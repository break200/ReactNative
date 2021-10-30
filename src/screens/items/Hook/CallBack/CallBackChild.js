import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

const CallBackChild = ({getItem}) => {
    const [items , setItems] = useState([]);
    useEffect(() => {
        setItems(getItem())
    },[getItem])
    return (
        <View style={styles.container}>
            <Text>{items[0]}</Text>
            <Text>{items[1]}</Text>
            <Text>{items[2]}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 50,
    },
});


export default CallBackChild;
