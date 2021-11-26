import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Animated,
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
                <Text>My name is {props.data.name}.</Text>
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
        justifyContent: 'center',
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
