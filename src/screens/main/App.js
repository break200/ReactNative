import React from 'react';
import {StyleSheet, Text, View,FlatList ,TouchableWithoutFeedback} from 'react-native';

const App = ({navigation, route}) => {

    const flats = [
        {
            id: 1,
            title: 'UI 관련',
        },
        {
            id: 2,
            title: 'react 기능 관',
        },
        {
            id: 3,
            title: '스케치 UI',
        },
        {
            id: 4,
            title: '데이터 가공',
        },
    ];

    //눌렀을경우 버튼 이벤트
    function onPress(item) {
        if (item.id === 1){
            navigation.navigate('UIView');
        }else if (item.id === 2){
            navigation.navigate('SkillView');
        }else if (item.id === 3){
            navigation.navigate('SketchView');
        }else if (item.id === 4){
            navigation.navigate('DataView');
        }
    }
    const renderItem = ({item , index}) => (
        <View style={{width:'100%' , height:45}}>
            <TouchableWithoutFeedback onPress={() => onPress(item)}>
                <View>
                    <Text style={{width:'100%',height:30 , fontSize:20}}>{item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{width:'100%',height:80}}/>
            <FlatList data={flats} renderItem={renderItem} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor:'white',
    },
    sideContainer: {
        marginTop: 30,
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
    },
});

export default App;
