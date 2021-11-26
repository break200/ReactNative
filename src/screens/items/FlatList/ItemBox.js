import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
    Button,
    TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import 'react-native-gesture-handler';
// yarn add react-native-gesture-handler

const SCREEN_WIDTH = Dimensions.get('window').width;

const ItemBox = (props) => {
    const rightSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                    <Text style={{   justifyContent: 'center', alignItems: 'center',}}>테스트 </Text>
                    {/*<Animated.Text style={{transform: [{scale: scale}]}}>*/}
                    {/*    Delete*/}
                    {/*</Animated.Text>*/}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable renderRightActions={rightSwipe}>
            <View style={styles.container}>

                <Text style={{width:180}}>My name is {props.data.name}.</Text>
                <Text style={{width:180}}>id === {props.data.id}.</Text>
                <Button style={styles.buttoncontainer} title={'dddd'} onPress={props.buttonIndex}/>
            </View>
        </Swipeable>
    );
};

export default ItemBox;

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems:'center',
        padding: 16,
        flexDirection:'row'
    },
    buttoncontainer: {
        height: 80,
        width: 80,
        backgroundColor: 'blue',
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        padding: 16,
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 80,
    },
});
