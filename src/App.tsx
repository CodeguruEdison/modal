import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'semantic-ui-react';
import {openModalAction } from './features/modals/modalActions'
import { connect } from 'react-redux';
import { IModal } from './features/modals/Entity/modal';
import { ModalManager } from './features/modals/modalManager';
export interface IAppProps {
  openModal:(modal:IModal)=>void,
}
const  App:FC<IAppProps>=(props)=> {
 const{openModal}=props;
  const handleOpenModal =()=>{
    openModal({
      modalType:'TestModal',
      modalProps:{
        open:true
      }
    })
  }
  return (
    <div className="App">
    <ModalManager></ModalManager>
    <Button onClick={handleOpenModal}>
    Open modal
  </Button>
    </div>
  );
}
const mapDispatchToProps = {
 
  openModal:openModalAction
};
export default connect(null, mapDispatchToProps)(App);
