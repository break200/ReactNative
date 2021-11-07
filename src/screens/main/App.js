import React from 'react';
import {StyleSheet, Text, View,FlatList ,TouchableWithoutFeedback} from 'react-native';
import HooksTwo from "../items/arrEdit/HooksTwo";

const App = ({navigation, route}) => {

    const flats = [
        {
            id: 1,
            title: 'scrollView horizontal',
        },
        {
            id: 2,
            title: 'scrollView Vertical',
        },
        {
            id: 3,
            title: 'blurView',
        },
        {
            id: 4,
            title: 'customButton , 이미지 버튼',
        },
        {
            id: 5,
            title: '하단 컴포던트 데이터 전달 다시 받아오기 ',
        },
        {
            id: 6,
            title: '스토리지 저장',
        },
        {
            id: 7,
            title: 'setState 비동기 처리 데이터 전달',
        },
        {
            id: 8,
            title: 'useState 배열 수정 및 추가',
        }, {
            id: 9,
            title: 'Emit 노티 저장 ',
        },
         {
            id: 10,
            title: 'useState 비동기',
        },      {
            id: 11,
            title: 'useEffect 효과 처리',
        },      {
            id: 12,
            title: 'Focused 콜백 처리',
        },      {
            id: 13,
            title: 'Hook 정리',
        },      {
            id: 14,
            title: '네이티브 브릿지',
        },
    ];

    //눌렀을경우 버튼 이벤트
    function onPress(item) {
        if (item.id === 1){
            navigation.navigate('Sviewho');
        }else if (item.id === 2){
            navigation.navigate('Sviewvo');
        }else if (item.id === 3){
            navigation.navigate('Blur');
        }else if (item.id === 4){
            navigation.navigate('CostomView');
        }else if (item.id === 5){
            navigation.navigate('HeadComponent');
        }else if (item.id === 6){
            navigation.navigate('AsyncStorageView');
        }else if (item.id === 7){
            navigation.navigate('ClassComponent');
        }else if (item.id === 8){
            navigation.navigate('HooksOne');
        }else if (item.id === 9){
            navigation.navigate('EmitHome');
        }else if (item.id === 10){
            navigation.navigate('StateView');
        }else if (item.id === 11){
            navigation.navigate('EffectView');
        }else if (item.id === 12){
            navigation.navigate('FocusView');
        }else if (item.id === 13){
            navigation.navigate('Index');
        }else if (item.id === 14){
            navigation.navigate('ReactBrigeView');
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
