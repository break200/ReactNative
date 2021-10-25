import React , { Component } from 'react';
import {StyleSheet, View,} from 'react-native';
import AsyncChild from "./AsyncChild";


class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backView: false, // 비동기처리
        };
    }

    render () {
        //하위에서 받아오기
        //변경 될경우
        const changeTag = (check) => {
            // console.log('현재데이터값');
            // console.log(check);

            this.setState({ backView: check })
        }

        //변경 안될경우 비동기 처리
        // const showResult = async () => {
        //     // let resultMsg = await this.updateState('webisfree');
        //     let resultMsg = await this.updateState(false);
        //     alert(resultMsg);
        // };

        //변경 안될경우 비동기 처리
        const updateState = (payload) => {
            console.log(payload);
            return new Promise((resolve, reject) => {
                this.setState({
                    backView: payload
                }, () => {
                    console.log('완료');
                    console.log(this.state.backView);
                    resolve('Updated')
                });
            });
        };


        return (
            <View style={styles.container}>
                {/*변경 가능할경우*/}
                {/*<AsyncChild change={changeTag}/>*/}

                {/*변경 불가능할경우*/}
                <AsyncChild change={updateState}/>
                <View style={[this.state.backView ? styles.selectedButtonStyle : styles.normalButtonStyle]}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'blue',
        justifyContent:"center",
        alignItems:'center',
    },
    selectedButtonStyle:{
        marginTop:20,
        width:'100%',
        height: 50,
        backgroundColor:'black',
    },
    normalButtonStyle:{
        marginTop:20,
        width:'100%',
        height: 50,
        backgroundColor:'red',
    }

});

export default ClassComponent;
