import React, { useState } from 'react';
import gitlogo from '../assets/github.png';
import { Container } from './styles';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');

  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);
    if(data.id){

      const exist = repos.find(repo => repo.id === data.id);

      if(!exist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório já consta na lista!')

  }

  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <Container className="App">
      <img src={gitlogo} width={72} height={72} alt="Github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
