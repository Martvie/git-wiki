import { ItemContainer } from './styles';

function ItemRepo({ repo }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>Ver repositório</a>
      <br />
      <a href='#' className='remove' rel='noreferrer'>Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo