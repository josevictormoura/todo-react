import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCard({ children, show, close, title = "Adicionar Tarefa" }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="modal-title"
      onHide={close}
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-title">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  );
}

export default ModalCard;