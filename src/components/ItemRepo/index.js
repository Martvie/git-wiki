import React from 'react'
import {ItemContainer} from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Opa</h3>
        <p>Opinha</p>
        <a href='#'>Ver repositório</a>
        <br/>
        <a href='#' className='remove'>Remover</a>
        <hr/>
    </ItemContainer>
  )
}

export default ItemRepo