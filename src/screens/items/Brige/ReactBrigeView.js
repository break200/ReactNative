import React from 'react';
import {StyleSheet, Text, View,FlatList ,TouchableWithoutFeedback} from 'react-native';

const ReactBrigeView = ({navigation, route}) => {

    const flats = [
        {
            id: 1,
            title: 'swift 브릿지',
        },
        {
            id: 2,
            title: '안드로이드 브릿지',
        },
    ];

    //눌렀을경우 버튼 이벤트
    function onPress(item) {
        if (item.id === 1){
            navigation.navigate('IosView');
        }else if (item.id === 2){
            navigation.navigate('AosView');
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

export default ReactBrigeView;
