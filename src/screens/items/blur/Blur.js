import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
// yarn add @react-native-community/blur  ==> pod install 해줘야 함
const Blur = ({route, navigation}) => {
    const onPress = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <BlurView
                style={styles.absolute}
                blurType="white"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
            />
            <Text>투명도 화면 구현</Text>
            <TouchableOpacity
                //매겨변수 전달
                onPress={onPress}>
                <Text style={{color: 'white', fontSize: 24}}>Press</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    absolute: {
        position: 'absolute',
        top: 100,
        left: 100,
        bottom: 100,
        right: 100,
    },
});

export default Blur;
