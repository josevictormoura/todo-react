import React from 'react';
import Button from 'react-bootstrap/Button';

const Todo = ({ id, IsComplete, category, desc, completarTarefa, excluirTarefa }) => {
  return (
    <div className={`list-group-item d-flex align-items-center justify-content-between ${IsComplete ? 'list-group-item-success' : ''}`}>
      <div>
        <p className={`mb-0 ${IsComplete ? 'text-decoration-line-through' : ''}`}>{desc}</p>
        <p className='mb-0'>({category})</p>
      </div>
      <div className='d-flex gap-2'>
        <Button
          variant={IsComplete ? 'secondary' : 'success'}
          size='sm'
          onClick={() => completarTarefa(id)}
          aria-label={IsComplete ? 'Desfazer tarefa' : 'Completar tarefa'}
          aria-checked={IsComplete}
        >
          {IsComplete ? 'Desfazer' : 'Completar'}
        </Button>
        <Button
          variant='danger'
          size='sm'
          onClick={() => excluirTarefa(id)}
          aria-label="Excluir tarefa"
        >
          X
        </Button>
      </div>
    </div>
  );
};

export default Todo;