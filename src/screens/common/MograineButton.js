import React from 'react';
import {TouchableOpacity , Text , View } from 'react-native';
import Blur from "../items/blur/Blur";

const MograineButton = ({ title, onPress}) => {
    return (
        <TouchableOpacity onPress={ onPress }>
            <View style={{
                backgroundColor:'red',
                padding:10,
                margin:100,
            }}>
                <Text style={{
                    fontSize:20 ,
                    color:'white',
                }}> {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
export default MograineButton;
