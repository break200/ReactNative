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
// import UseMemoView from "../screens/items/Hook/Memo/UseMemoView"
import ReactBrigeView from "../screens/items/Brige/ReactBrigeView";
import IosView from "../screens/items/Brige/IosView";
import AosView from "../screens/items/Brige/AosView";
import UIView from "../screens/main/UIView";
import SkillView from "../screens/main/SkillView";
import SketchView from "../screens/main/SketchView";
import UnBoardingView from "../screens/items/Sketch/UnBoarding/UnBoardingView";
import TextInputScreen from "../screens/items/TextInput/TextInputScreen"
import FlatListView from "../screens/items/FlatList/FlatListView"
import SortView from "../screens/items/Sort/SortView";
import DataView from "../screens/main/DataView";
import VariableView from "../screens/items/variable/VariableView";

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
            {/*<Stack.Screen*/}
            {/*    name="UseMemoView"*/}
            {/*    component={UseMemoView}*/}
            {/*/>*/}

            <Stack.Screen
                name="ReactBrigeView"
                component={ReactBrigeView}
            />
            <Stack.Screen
                name="IosView"
                component={IosView}
            />
            <Stack.Screen
                name="AosView"
                component={AosView}
            />
            <Stack.Screen
                name="UIView"
                component={UIView}
            />
            <Stack.Screen
                name="SkillView"
                component={SkillView}
            />
            <Stack.Screen
                name="SketchView"
                component={SketchView}
            />
            <Stack.Screen
                name="UnBoardingView"
                component={UnBoardingView}
            />
            <Stack.Screen
                name="TextInputScreen"
                component={TextInputScreen}
            />
            <Stack.Screen
                name="FlatListView"
                component={FlatListView}
            />
            <Stack.Screen
                name="DataView"
                component={DataView}
            />
            <Stack.Screen
                name="SortView"
                component={SortView}
            />
            <Stack.Screen
                name="VariableView"
                component={VariableView}
            />
        </Stack.Navigator>
    );
};

export default StackNavigation;
