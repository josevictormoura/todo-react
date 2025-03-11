import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormTask = ({listTasks, setListTasks, setShowModal, inputTask, setInputTask, inputCategory, setInputCategory,setEdit,edit}) => {

  function handleSubmit(e) {
    e.preventDefault()
    const valueTaskValid = inputTask.trim() === ""
    const valueCategoryValid = inputCategory.trim() === ""

    if (valueTaskValid || valueCategoryValid) return

    if (edit !== null) {
      const atualizarProduto = listTasks.map(task => task.id === edit ? {...task, nameTask: inputTask, category: inputCategory} : task)
      setListTasks(atualizarProduto)
    }else{
      setListTasks([...listTasks, {id: listTasks.length + 1, nameTask: inputTask, category: inputCategory, check: false}])
    }
    
    setInputTask('')
    setEdit(null)
    setShowModal(false)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tarefa</Form.Label>
        <Form.Control 
          type="text"
          value={inputTask}
          placeholder="Adicione nova tarefa..."
          onChange={({target}) => setInputTask(target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          value={inputCategory}
          onChange={({target}) => setInputCategory(target.value)}
        >
          <option value="">Selecione uma cartegoria</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        {edit !== null ? "Editar" : "Adicionar"}
      </Button>
    </Form>
  )
}

export default FormTask
