import * as types from '../actions/actionTypes';
import initialState from './initialState';


function actionTypeEndsinSuccess(type){
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action){
  if(action.types == types.BEGIN_AJAX_CALL){
    return state + 1;
  }else if(actionTypeEndsinSuccess(action.type)){
    return state -1;
  }

  return state;
}