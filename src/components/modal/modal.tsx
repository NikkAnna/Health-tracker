import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  header: string;
  onClose: () => void;
}

const modalRoot = document.getElementById("react-modals");

export const Modal = (props: ModalProps): ReactElement => {
  const { children, header, onClose } = props;

  return ReactDOM.createPortal(
    (
      <>
        <div className="modal">
          <h3 onClick={onClose}>{header}</h3>
          {children}
        </div>
        <div className="modalOverlay" onClick={onClose} />
      </>
    ), 
    modalRoot!
  );
}