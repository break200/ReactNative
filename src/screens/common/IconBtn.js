import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import ImageList from '../common/ImageList';
import withPreventDoubleClick from '../common/withPreventDoubleClick';


const IconBtn = ({ iconName, style, onPress, iconStyle, onLongPress, noPadding }) => {
    const imageSource = {
        loginBtnApple: ImageList.auth.loginBtnApple,
        loginBtnFacebook: ImageList.auth.loginBtnFacebook,
    };
    return (
        <Container style={style} disable={onPress == null} onPress={onPress} onLongPress={onLongPress} activeOpacity={0.8}>
            <Icon noPadding={noPadding} style={iconStyle} source={imageSource[iconName]} />
        </Container>
    );
};

const TouchableOpacityEx = withPreventDoubleClick(TouchableOpacity);

const Container = styled(TouchableOpacityEx)`
  padding: ${(props) => (props.noPadding ? 0 : 8)}px;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.Image`
  resize-mode: contain;
`;

export default IconBtn;
