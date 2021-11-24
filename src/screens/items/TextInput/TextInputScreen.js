
import React, {useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Dimensions,
    View,
    TextInput,
} from 'react-native';
import styled from 'styled-components/native';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;
const CARD_HEIGHT = Dimensions.get('window').height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10;

const TextInputScreen = () => {

    const [text , setText] = useState('');
    const [textTwo , setTextTwo] = useState('');
    const [textThree , setTextThree] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:100}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        multiline={true}
                    />
                </View>
                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:100}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTextTwo}
                        value={textTwo}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                        multiline={false}
                    />
                </View>
                <View style={{width:'100%' ,marginTop:10,marginBottom:10 , height:100}}>
                    <InputField
                        style={{
                            letterSpacing: 0,
                        }}
                        textAlignVertical={'top'}

                        autoCapitalize={'none'}
                        placeholder="useless placeholder"
                        placeholderTextColor="#adb5bd"
                        autoCorrect={false}
                        editable={true}
                        multiline={true}
                        onChangeText={(text) => {
                            setText(text);
                        }}
                        value={text}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const InputField = styled.TextInput`
  flex: 1;
  margin-horizontal: 20px;
  margin-vertical: 19px;
  font-size: 15px;
  color: #2b2b2b;
  background-color: white;
  
`;
//font-family: ${styling.SPOQA_REGULAR};
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

export default TextInputScreen;
