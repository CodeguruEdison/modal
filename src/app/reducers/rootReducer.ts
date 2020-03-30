
import { combineReducers } from "redux";
import { IApplicationState } from '../store/configureStore';
import {reducer as formReducer} from 'redux-form';
import  modalReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers<IApplicationState>({
   
    form:formReducer,
    modals:modalReducer
});

export default rootReducer;
