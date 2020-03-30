
export interface IModal {
    modalType: string;
    modalProps:IModalProps
}

export interface IModalProps {
    open:boolean;
}

export interface IModalManagerProps {
    currentModal?:IModal;
    closeModal?:()=>void;
}

export interface ILoginModalProps {
    closeModal:()=>void;
}

export interface IRegisterModalProps {
    closeModal:()=>void;
}