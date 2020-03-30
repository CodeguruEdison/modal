import { IModalState } from './../../features/modals/Entity/IModalState';

import { createStore, Store  } from "redux"

import {composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export interface IApplicationState {
   
    form:any,
    modals:IModalState 
   
}
export  function configureStore(): Store<IApplicationState> {
    const store = createStore(rootReducer,composeWithDevTools());
    return store;
  }
