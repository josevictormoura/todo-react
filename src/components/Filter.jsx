import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Filter({ filter, setFilter }) {
  return (
    <div className="mb-3 d-flex flex-column gap-2">
      <h4>Filtrar</h4>
      <ButtonGroup className='d-block' aria-label="Basic example">
        <Button
          size='sm'
          className='me-2'
          variant={filter === 'all' ? 'primary' : 'outline-primary'}
          onClick={() => setFilter('all')}
          aria-label="Mostrar todas as tarefas"
        >
          Todas
        </Button>
        <Button
          className='me-2'
          size='sm'
          variant={filter === 'completed' ? 'success' : 'outline-success'}
          onClick={() => setFilter('completed')}
          aria-label="Mostrar tarefas completas"
        >
          Completas
        </Button>
        <Button
          size='sm'
          variant={filter === 'incomplete' ? 'warning' : 'outline-warning'}
          onClick={() => setFilter('incomplete')}
          aria-label="Mostrar tarefas incompletas"
        >
          Incompletas
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Filter;