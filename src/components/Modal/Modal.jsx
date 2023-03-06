import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalContact } from './Modal.styled';

const modalRoor = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const onCloseModal = e => {
      if (e.code === 'Escape') {
        onClose();
      }
      window.addEventListener('keydown', onCloseModal);

      return () => {
        window.addEventListener('keydown', onCloseModal);
      };
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContact>{children}</ModalContact>
    </Backdrop>,
    modalRoor
  );
};

export default Modal;
