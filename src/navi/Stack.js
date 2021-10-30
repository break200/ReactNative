import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../screens/main/App';
import Sviewho from '../screens/items/scrollViewH/ScrollViewH';
import Sviewvo from '../screens/items/scrollViewV/ScrollViewV';
import Blur from '../screens/items/blur/Blur';
import CostomView from '../screens/items/customBtn/CostomView';
import HeadComponent from '../screens/items/topComponent/HeadComponent'
import AsyncStorageView from "../screens/items/asyncStorage/AsyncStorageView";
import AsyncStorageNext from "../screens/items/asyncStorage/AsyncStorageNext";
import ClassComponent from "../screens/items/classComponent/ClassComponent";
import HooksOne from "../screens/items/arrEdit/HooksOne";
import HooksTwo from "../screens/items/arrEdit/HooksTwo";
import EmitHome from "../screens/items/Emit/EmitHome";
import EmitNext from "../screens/items/Emit/EmitNext";
import StateView from "../screens/items/state/StateView";
import EffectView from "../screens/items/state/EffectView";
import FocusView from "../screens/items/focus/FocusView";
import FocusNext from "../screens/items/focus/FocusNext";
import FocusThree from "../screens/items/focus/FocusThree";
import Index from "../screens/items/Hook/Index"
import UseCallBackView from "../screens/items/Hook/CallBack/UseCallBackView"
import UseMemoView from "../screens/items/Hook/Memo/UseMemoView"

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
            <Stack.Screen
                name="AsyncStorageView"
                component={AsyncStorageView}
            />
            <Stack.Screen
                name="AsyncStorageNext"
                component={AsyncStorageNext}
            />
            <Stack.Screen
                name="ClassComponent"
                component={ClassComponent}
            />
                <Stack.Screen
                    name="HooksOne"
                    component={HooksOne}
                />
            <Stack.Screen
                name="HooksTwo"
                component={HooksTwo}
            />
            <Stack.Screen
                name="EmitHome"
                component={EmitHome}
            />
            <Stack.Screen
                name="EmitNext"
                component={EmitNext}
            />

            <Stack.Screen
                name="StateView"
                component={StateView}
            />

                <Stack.Screen
                    name="EffectView"
                    component={EffectView}
                />
            <Stack.Screen
                name="FocusView"
                component={FocusView}
            />
            <Stack.Screen
            name="FocusNext"
            component={FocusNext}
        />
            <Stack.Screen
                name="FocusThree"
                component={FocusThree}
            />
            <Stack.Screen
                name="Index"
                component={Index}
            />
            <Stack.Screen
                name="UseCallBackView"
                component={UseCallBackView}
            />
            <Stack.Screen
                name="UseMemoView"
                component={UseMemoView}
            />

        </Stack.Navigator>
    );
};

export default StackNavigation;
