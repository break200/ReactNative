import React from 'react';
import {StyleSheet,View} from 'react-native';
import MograineButton from "../../common/MograineButton";
import IconBtn from "../../common/IconBtn";
const CostomView = ({route, navigation}) => {

    function onPress() {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <View style={ styles.container }>
                <MograineButton title = 'mograinButton1' onPress={() => navigation.goBack()}/>
            </View>
            <View style={ styles.container }>
                <IconBtn
                    iconName={'loginBtnApple'}
                    iconStyle={{ width: 28, height: 28 }}
                    noPadding
                    style={{
                        width: 50,
                        height: 50,
                        position: 'absolute',
                        right: 16,
                        paddingVertical: 8,
                        hitSlop: { left: 'commonBtnCellArrow' ? 5 : 18, top: 8, right: 15, bottom: 8 },
                    }}
                    onPress={onPress}
                />
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

export default CostomView;
