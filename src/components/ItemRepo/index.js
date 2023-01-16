import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer >
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.html_url} target='_blank' rel='noreferrer'>Ver repositório</a>
      <br />
      <a href='#' className='remove' rel='noreferrer' onClick={handleRemove}>Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo