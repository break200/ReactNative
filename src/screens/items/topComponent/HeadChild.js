import React from 'react';
import {StyleSheet, View, Text,} from 'react-native';

const HeadChild = ({number}) => {
    return (
        <View style={styles.sectionContainer} >
            <Text style={styles.TextCard}>{number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        width:'100%',
        height: 150 ,
        backgroundColor:'red',
        justifyContent:"center",
        alignItems:"center",
    },
    TextCard: {
        fontSize:20,
    },
});

export default HeadChild;
