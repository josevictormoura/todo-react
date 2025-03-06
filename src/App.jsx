import React, { useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Alert from 'react-bootstrap/Alert';
import Todo from './components/Todo';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css'

const App = () => {
  const [valueInputDesc, setValueInputDesc] = React.useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [errorForm, setErrorForm] = React.useState({ descError: false, categoryError: false });
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('all');
  const [dados, setDados] = React.useState([
    {
      id: 1,
      desc: 'Criar funcionalidade x projeto no sistema',
      category: 'Trabalho',
      IsComplete: false,
    },
    {
      id: 2,
      desc: 'Ir para a academia',
      category: 'Pessoal',
      IsComplete: false,
    },
    {
      id: 3,
      desc: 'Estudar React',
      category: 'Estudos',
      IsComplete: false,
    },
  ]);

  const filteredTodos = useMemo(() => {
    return dados
      .filter(dado =>
        filter === 'all'
          ? true
          : filter === 'completed'
          ? dado.IsComplete
          : !dado.IsComplete
      )
      .filter(dado => dado.desc.toLowerCase().includes(search.toLowerCase()));
  }, [dados, filter, search]);

  function handleSubmit(e) {
    e.preventDefault();
    const descError = valueInputDesc.trim() === "";
    const categoryError = categoriaSelecionada.trim() === "";
    setErrorForm({ descError, categoryError });

    if (descError || categoryError) return;

    addTodo(valueInputDesc, categoriaSelecionada);
    setValueInputDesc('');
    setCategoriaSelecionada('');
    setShowModal(false);
  }

  function addTodo(desc, category) {
    const novoId = dados.length > 0 ? Math.max(...dados.map((dado) => dado.id)) + 1 : 1;
    const newTodo = [...dados, { id: novoId, desc, category, IsComplete: false }];
    setDados(newTodo);
  }

  function onChange({ target }) {
    if (target.value.length !== 0) {
      setErrorForm((prev) => ({ ...prev, descError: false }));
    }
    setValueInputDesc(target.value);
  }

  function handleChangeCategoria({ target }) {
    if (target.value.length !== 0) {
      setErrorForm((prev) => ({ ...prev, categoryError: false }));
    }
    setCategoriaSelecionada(target.value);
  }

  function completarTarefa(id) {
    setDados(dados.map(dado => dado.id === id ? { ...dado, IsComplete: !dado.IsComplete } : dado));
  }

  function excluirTarefa(id) {
    setDados(dados.filter(dado => dado.id !== id));
  }

  return (
    <div className='app container mt-5 p-5 rounded-3'>
      <Header dados={dados} search={search} setSearch={setSearch} />
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className="list-group">
        {filteredTodos.length === 0 ? (
          <Alert variant='dark'>Nenhuma Tarefa adicionada!</Alert>
        ) : (
          filteredTodos.map(dado => (
            <Todo
              key={dado.id}
              {...dado}
              completarTarefa={completarTarefa}
              excluirTarefa={excluirTarefa}
            />
          ))
        )}
      </div>
      <Formulario
        handleSubmit={handleSubmit}
        valueInputDesc={valueInputDesc}
        onChange={onChange}
        categoriaSelecionada={categoriaSelecionada}
        handleChangeCategoria={handleChangeCategoria}
        showModal={showModal}
        close={() => setShowModal(false)}
        errorForm={errorForm}
      />
      <Button className='fw-bolder mt-3' size='sm' onClick={() => setShowModal(true)} aria-label="Adicionar nova tarefa">
       Adicionar <span className='fs-6 d-inline-block'>+</span>
      </Button>
    </div>
  );
};

export default App;