import { createAction } from 'redux-actions';
import { EXTRA } from './ActionTypes';
import ApiList from './ReduxView';
import api, { urlEncodeApi } from './Api';

const getLyricsRequest = createAction(EXTRA.LIST_REQUEST, (data) => ({ data }));
const getLyricsSuccess = createAction(EXTRA.LIST_SUCCESS, (data) => ({ data }));
const getLyricsError = createAction(EXTRA.LIST_ERROR, (data) => ({ data }));

const getCom = (id, limit, offset) => async (dispatch) => {
    try {
        const requestData = { id, limit, offset };
        dispatch(getLyricsRequest(requestData));
        return await api
            .get(ApiList.ARTICLE_TREND_GET, { params: { id, limit, offset } })
            .then((response) => {
                // success
                dispatch(getLyricsSuccess(response.data));
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.data.message) {
                        dispatch(getLyricsError(error.response.data.message));

                    }
                    if (error.response.data.messages) {
                        dispatch(getLyricsError(error.response.data.messages[0]));
                    }
                }
            });
    } catch (error) {
        // AppUtils.showDangerMessage(JSON.stringify(error));
        return null;
    }
};

export { getCom };
