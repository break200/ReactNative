import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../screens/main/App';
import Sviewho from '../screens/items/scrollViewH/ScrollViewH';
import Sviewvo from '../screens/items/scrollViewV/ScrollViewV';
import Blur from '../screens/items/blur/Blur';
import CostomView from '../screens/items/customBtn/CostomView';
import HeadComponent from '../screens/items/topComponent/HeadComponent'
const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            {/*<헤더 히든 처리 headerShown*/}
            <Stack.Screen name="App" component={App} options={{ headerShown: false}} />
            <Stack.Screen
                name="Sviewho"
                component={Sviewho}
            />
            <Stack.Screen
                name="Sviewvo"
                component={Sviewvo}
            />
            <Stack.Screen
                name="Blur"
                component={Blur}
                options={{presentation: 'transparentModal'}}
            />
            <Stack.Screen
                name="CostomView"
                component={CostomView}
            />
            <Stack.Screen
                name="HeadComponent"
                component={HeadComponent}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
