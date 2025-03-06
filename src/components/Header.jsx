import React from 'react'

const Header = ({dados}) => {
  return (
    <div className='d-flex align-items-center justify-content-between'>
      <h1 className='text-center mb-4'>Lista de Tarefas</h1>
      <h4>Tarefas ({dados.length})</h4>
    </div>
  )
}

export default Header
