
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text, Button} from 'react-native';
import ItemBox from '../FlatList/ItemBox';
const data = [
    {id: '1', update: '2021-10-20 08:20' ,name:'a'},
    {id: '2', update: '2023-10-20 08:20',name:'a'},
    {id: '3', update: '2022-10-20 08:20',name:'a'},
    {id: '4', update: '2015-10-20 08:20',name:'a'},
    {id: '5', update: '2010-10-20 08:20',name:'a'},
    {id: '6', update: '2018-10-20 08:20',name:'a'},
    {id: '7', update: '2032-10-20 08:20',name:'a'},
    {id: '8', update: '2025-10-20 08:20',name:'a'},
    {id: '9', update: '2005-10-20 08:20',name:'a'},
    {id: '10', update: '1978-10-20 08:20',name:'a'},

];

const SortView = () => {


    const [lists, setLists] = useState(data);

    useEffect(() => {
        console.log(lists);
    },[lists]);

    const sortByIncome = React.useCallback(e => {
        console.log(lists);
        // Using `companies` will always result in the current value
    }, [lists]);

    const deleteItem = (index) => {
        const arr = [...lists];
        arr.splice(index, 1);
        setLists(arr);
    };

    const buttonItem = (index) => {
        alert(index);
    };

    //내림차순
    function down() {
        const dataArray = [ ...lists]
        setLists(dataArray.sort((a, b) => new Date(a.update) - new Date(b.update)));
    }

    //오름차순
    const top = () => {
        const dataArray = [ ...lists]
        setLists(dataArray.sort((a, b) => new Date(b.update) - new Date(a.update)));
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{width:'100%',height: 80}}>
                    <Button style={{width: 50 ,height: 50}} title={'내림차순'} onPress={down}/>
                    <Button style={{width: 50 ,height: 50}} title={'오름차순'} onPress={top}/>
                </View>
                <FlatList
                    data={lists}
                    renderItem={({item, index}) => {
                        return <ItemBox data={item} handleDelete={() => deleteItem(index)}  buttonIndex={() => buttonItem(index) }  />;
                    }}
                    // ItemSeparatorComponent={() => {
                    //     return <View style={styles.seperatorLine}/>;
                    // }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        backgroundColor: 'black',
    },
});

export default SortView;
