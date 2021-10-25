import React, {useEffect,useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

const EffectView = ({route, navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //최초 실행
    useEffect(() => {
      console.log('호출');
      //삭제 처리
      return () => console.log('\n===== Component Unmount =====\n');
    },[]);

    useEffect(() => {
        console.log(email);
    },[email]);



    return (
        <View style={{flex:1 ,justifyContent:'flex-start',alignItems:'flex-start', width:'100%'}}>
            <StyledText>Name: {name}</StyledText>
            <StyledText>Email: {email}</StyledText>
            <StyledTextInput
                value={name}
                onChangeText={text => setName(text)}
                placeholder="name"
                returnKeyType="next"
                // onSubmitEditing={() => refEmail.current.focus()}
            />
            <StyledTextInput
                value={email}
                onChangeText={text => setEmail(text)}
                placeholder="email"
                returnKeyType="done"
            />
        </View>
    );
};


const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none',
    autoCorrect: false,
    width:300,
})`
  border: 1px solid #757575;
  padding: 10px;
  margin: 10px 0;
  width: 200px;
  font-size: 20px;
`;
const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

export default EffectView;
