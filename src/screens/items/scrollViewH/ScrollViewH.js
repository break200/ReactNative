
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Platform,
    Dimensions,
    Text,
} from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

const ScrollViewH = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                horizontal // 가로 스크롤
                pagingEnabled // 페이지 처리
                decelerationRate={0} // 감속 비활성화
                snapToInterval={CARD_WIDTH + 10} // Calculate the size for a card including marginLeft and marginRight
                snapToAlignment="center" // Snap to the center
                contentInset={{
                    // iOS ONLY
                    top: 0,
                    left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
                }}
                contentContainerStyle={{
                    // contentInset alternative for Android
                    paddingHorizontal:
                        Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
                }}
                onScrollEndDrag={() => console.log('scroll end')}>
                <View style={styles.cardStyleone} />
                <View style={styles.cardStyletwo} />
                <View style={styles.cardStylethree} />
                <View style={styles.cardStylefour} />
                <View style={styles.cardStylefive} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardStyleone: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 5,
        borderRadius: 15,
    },
    cardStyletwo: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        margin: 5,
        borderRadius: 15,
    },
    cardStylethree: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 5,
        borderRadius: 15,
    },
    cardStylefour: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        margin: 5,
        borderRadius: 15,
    },
    cardStylefive: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 5,
        borderRadius: 15,
    },
});

export default ScrollViewH;
