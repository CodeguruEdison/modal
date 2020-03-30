import { ModalAction, ModalActionTypes } from "./modalConstant";
import { IModalState } from "./Entity/IModalState";
import { IModal } from "./Entity/modal";
import { Reducer } from "redux";

const initialModal: IModal = {
  modalType: "",
  modalProps: {
    open: false
  }
};
const initialModalState: IModalState = {
  modal: initialModal
};

export const modalReducer: Reducer<IModalState, ModalAction> = (
  state = initialModalState,
  action: ModalAction
):IModalState => {
  switch (action.type) {
    case ModalActionTypes.MODAL_OPEN: {
      return {
        modal:{
          modalType: action.payload.modalType,
          modalProps: action.payload.modalProps
        }
      };
    }
    case ModalActionTypes.MODAL_CLOSE: {
      return initialModalState;
    }
    default:
      return state;
  }
};

export default modalReducer;