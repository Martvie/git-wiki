import gitlogo from '../assets/github.png';
import  {Container}  from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';

function App() {
  return (
    <Container className="App">
     <img src={gitlogo} width={72} height={72} alt="Github logo"/>
     <Input/>
     <ItemRepo/>
    </Container>
  );
}

export default App;
