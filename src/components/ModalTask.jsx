import Modal from 'react-bootstrap/Modal';

const ModalTarefa = ({children, show, setShowModal, setInputTask,setEdit}) => {

  return (
    <Modal show={show} onHide={() =>{
      setInputTask('')
      setShowModal(false)
      setEdit(null)
      setEdit(null)
    }}>
      <Modal.Header closeButton>
        <Modal.Title>Nova Tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default ModalTarefa
