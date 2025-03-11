import React, { useMemo } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Filter from './components/Filter'
import Button from 'react-bootstrap/esm/Button';
import iconAdd from './assets/add.svg'
import Alert from 'react-bootstrap/Alert';
import Tasks from './components/Tasks';
import Task from './components/Task';
import ModalTask from './components/ModalTask';
import FormTask from './components/FormTask';

const App = () => {

  const [show, setShowModal] = React.useState(false)
  const [inputTask, setInputTask] = React.useState('')
  const [inputCategory, setInputCategory] = React.useState('')
  const [edit, setEdit] = React.useState(null)
  const [search, setSearch] = React.useState('')
  const [filter,setFilter] = React.useState('all')
  const [listTasks, setListTasks] = React.useState([])
  
  React.useEffect(()=>{
    const tasksLocalStorage = JSON.parse(localStorage.getItem('listTasks')) ?? []
    if (tasksLocalStorage.length > 0) {
      setListTasks(tasksLocalStorage)
    }
  },[])
  
  React.useEffect(()=>{
    localStorage.setItem('listTasks', JSON.stringify(listTasks))
  },[listTasks])

  const filterTask = useMemo(()=>{
    return listTasks
    .filter(task => 
      filter === 'all'
      ? true
      : filter === 'completed'
      ? task.check
      : !task.check
    ).filter(task => task.nameTask.toLowerCase().includes(search.toLowerCase()))
  },[listTasks,search,filter])

  return (
    <div className='app container d-grid gap-4 mt-3 mt-lg-5 p-3 p-lg-5 rounded-3'>
      <Header tarefas={listTasks}/>
      {listTasks.length !== 0 ?
        <div className='d-grid gap-4'>
          <Search search={search} setSearch={setSearch}/>
          <Filter setFilter={setFilter}/>
        </div>
        :
        ""
      }
      <Tasks>
        {listTasks.length === 0 ? 
          <Alert variant="secondary">
           Nenhuma tarefa adicionada!
          </Alert>
          :
          filterTask.map(task => 
          <Task key={task.id} {...task} 
            listTasks={listTasks} 
            setListTasks={setListTasks}
            setShowModal={setShowModal}
            setInputTask={setInputTask}
            setInputCategory={setInputCategory}
            inputTask={inputTask}
            setEdit={setEdit}
          />)
        }
      </Tasks>
      <ModalTask
        setInputTask={setInputTask} 
        show={show} 
        setShowModal={setShowModal}
        setEdit={setEdit}
      >
        <FormTask 
          listTasks={listTasks}
          setListTasks={setListTasks}
          setShowModal={setShowModal}
          inputTask={inputTask}
          setInputTask={setInputTask}
          inputCategory={inputCategory}
          setInputCategory={setInputCategory}
          edit={edit}
          setEdit={setEdit}
        />
      </ModalTask>
      <Button className='d-flex align-items-center  justify-content-center' variant='primary' style={{width: 'max-content'}}
      onClick={() => setShowModal(true)}
      >
        Adicionar
        <img src={iconAdd}/>
      </Button>
    </div>
  )
}

export default App