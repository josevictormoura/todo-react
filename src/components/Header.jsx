import React from 'react'
import stacks from '../assets/stacks.svg'

const Header = ({tarefas}) => {
  return (
   <header className='d-flex align-items-center justify-content-between'>
      <h1>Lista de Tarefas</h1>
      <h4><img src={stacks}/> {tarefas ? tarefas.length : 0}</h4>
   </header>
  )
}

export default Header
