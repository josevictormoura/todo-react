import React from 'react'
import Button from 'react-bootstrap/Button'
import iconDelete from '../assets/delete.svg'
import iconCheck from '../assets/check.svg'
import iconEdit from '../assets/edit.svg'
import iconRefresh from '../assets/refresh.svg'


const Task = ({id, nameTask, check, category, listTasks, setListTasks, setShowModal,setInputTask, setInputCategory,setEdit}) => {
  
  function handleDelete(id) {
    setListTasks(listTasks.filter(task => task.id !== id))
  }

  function handleComplete(id) {
    setListTasks(listTasks.map(task => task.id === id ? {...task, check: !task.check} : task))
  }

  function handleEdit(id) {
    const taskEdit = listTasks.find(task => task.id === id)
    if (taskEdit) {
      setInputTask(taskEdit.nameTask)
      setInputCategory(taskEdit.category)
      setEdit(id)
      setShowModal(true)
    }
  }

  return (
    <div className={`d-flex gap-2 align-items-center justify-content-between list-group-item ${check ? 'list-group-item-success' : ''}`}>
      <div>
        <p className={`text-break mb-0 ${check ? 'text-decoration-line-through' : ''}`}>{nameTask}</p>
        <p>({category})</p>
      </div>
      <div className='d-flex align-items-center gap-2'>
        <Button 
          className='d-flex align-items-center justify-content-center'  variant="success" 
          size='sm'
          onClick={() => handleComplete(id)}
        >
          <img src={check ? iconRefresh : iconCheck}/>
        </Button>
        <Button 
          className='d-flex align-items-center justify-content-center' 
          variant="secondary" 
          size='sm'
          onClick={() => handleEdit(id)}
        >
          <img src={iconEdit}/>
        </Button>
        <Button 
          className='d-flex align-items-center justify-content-center' 
          variant="danger" 
          size='sm'
          onClick={() => handleDelete(id)}
        >
          <img src={iconDelete}/>
        </Button>
      </div>
    </div>
  )
}

export default Task
