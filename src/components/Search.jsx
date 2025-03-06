import React from 'react';
import Form from 'react-bootstrap/Form';

function Search({ search, setSearch }) {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        placeholder="Buscar tarefas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Buscar tarefas"
      />
    </Form.Group>
  );
}

export default Search;