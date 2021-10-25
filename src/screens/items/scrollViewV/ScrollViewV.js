
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Dimensions,
    View,
} from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

const ScrollViewV = () => {

    function onPressButton() {
        alert('You clicked the button!')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:40}}>
                    <Text style={{fontSize:14}}>Scroll me plz</Text>
                    <Button title={'Button 1'} onPress={onPressButton} />
                </View>

                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:40}}>
                    <Text style={{fontSize:20}}>React Native Example of ScrollView</Text>
                    <Button title={'Button 2'} onPress={onPressButton}/>
                </View>

                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:40}}>
                    <Text style={{fontSize:20}}>React Native ScrollView Example</Text>
                    <Button title={'Button 3'} onPress={onPressButton}/>
                </View>
                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:40}}>
                    <Text style={{fontSize:20}}>If you like</Text>
                    <Button title={'Button 4'} onPress={onPressButton}/>
                </View>
                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:40}}>
                    <Text style={{fontSize:20}}>Scrolling down</Text>
                    <Button title={'Button 5'} onPress={onPressButton}/>
                </View>

                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:40}}>
                    <Text style={{fontSize:20}}>Scrolling down</Text>
                    <Button title={'Button 6'} onPress={onPressButton}/>
                </View>
                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:40}}>
                    <Text style={{fontSize:20}}>Whats the best</Text>
                    <Button title={'Button 7'} onPress={onPressButton}/>
                </View>
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

export default ScrollViewV;
