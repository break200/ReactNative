import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import {getCom} from "./Action";

const ACTIONS_WIDTH = 56;

const ReduxView = ({navigation , route , getLyrics , lyricsList }) => {

    const [lyricsListData, setLyricsListData] = useState([]);
    const [lyricsData, setLyricsData] = useState(null);

    const [isEnd, setIsEnd] = useState(false);
    const [offset, setOffset] = useState(0);
    const limit = 20;
    const [checkId, setCheckId] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        // getLyrics(3, limit, offset);
    }, []);

    useEffect(() => {
        // 가사 정보 업데이트
        if (lyricsList?.length < limit) {
            setIsEnd(true);
        }

        if (lyricsList?.length > 0) {
            if (offset < 1) {
                // 앞 리스트 리셋
                setLyricsListData(lyricsList);
            } else {
                lyricsList?.filter((item) => !lyricsListData.find((data) => data.id === item.id)).map((item) => setLyricsListData((data) => [...data, item]));
            }
        } else {
            setIsEnd(true);
        }
        if (lyricsList?.length !== undefined) {
            if (refresh === true) {
                for (let index = 0; index < lyricsListData.length; index++) {
                    if (checkId === lyricsListData[index].id) {
                        // 수정 진행 해야 한다
                        setLyricsData(lyricsList[index]);
                    }
                }
                setRefresh(false);
            }
        }

        // 체크 id , 체크 값 저장 객체
    }, [lyricsList]);

    return (
        <View>
            <Text>테스트</Text>
        </View>
    );
};

const IconContainer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
  height: 50px;
  flex-direction: row;
`;

//받아오는 respone 데이터 전달
const mapStateToProps = (state) => ({
    lyricsList: state.extra.lyricsList,
    getLyricsLoading: state.extra.getLyricsLoading,
});

//연결 통신
const mapDispatchToProps = (dispatch) => ({
    // getCom: (id, limit, offset) => dispatch(getCom(id, limit, offset)),
});

export default ReduxView;
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxView);
