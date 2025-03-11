import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Filter = ({setFilter}) => {
  return (
    <div>
      <h4>Filtrar</h4>
      <ButtonGroup>
        <Button className='me-2' variant="primary" 
          onClick={() => setFilter('all')}
        >Todas
        </Button>
        <Button className='me-2'  variant="success"
        onClick={() => setFilter('completed')}
        >Compeltas
        </Button>
        <Button variant="danger"
        onClick={() => setFilter('incomplete')}
        >Incompletas
        </Button>
     </ButtonGroup>
    </div>
  )
}

export default Filter
