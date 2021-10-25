import React, {useState,useRef , useEffect} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const HooksTwo = ({route, navigation}) => {
    const [item, setItem] = useState({id: 0, username: ''});
    const [input, setInput] = useState('');
    const nextId = useRef(3);
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
        },
        {
            id: 2,
            username: 'tester',
        },
        {
            id: 3,
            username: 'liz',
        },
    ]);

    useEffect(() => {
        console.log(users);
    },[users]);
    useEffect(() => {
        // console.log(input);
    },[input]);


    const onPress = () => {

        if (input === '' || input === undefined)return;
        console.log(input);
        setItem({id:nextId.current += 1 , username:input});
        setUsers([...users,item]);
        setInput('');
    };

    const renderItem = ({ item }) => (
        <Text style={{width:'100%',height:30}}>{item.username}</Text>
    );

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row' , alignItems:'center' , justifyContent:'flex-start'}}>
                <Text style={{width:'100%' , height:50}}>{input}</Text>
            </View>
            <View style={{width:'100%' , height:50 , flexDirection:'row' , alignItems:'center' , justifyContent:'flex-start'}}>
                <TextInput style={styles.textInput}
                           placeholder = "Email"
                           placeholderTextColor = "#9a73ef"
                           onChangeText={text => setInput(text)} value={input} />
                <Button title={'입력값'} onPress={onPress}/>
            </View>

            <FlatList data={users} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textInput: {
        margin: 15,
        width: 300,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
});

export default HooksTwo;
