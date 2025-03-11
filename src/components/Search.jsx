import React from 'react'
import Form from 'react-bootstrap/Form';

const Search = ({search,setSearch}) => {

  return (
    <div>
      <h4>Buscar</h4>
      <Form.Control
        type="text"
        placeholder="Buscar por tarefa..."
        value={search}
        onChange={({target}) => setSearch(target.value)}
        id="tarefa"
      />
    </div>
  )
}

export default Search
