import './App.css';
import styled from 'styled-components';
import HomeComponent from './home/Index';
import Overview from './home/Overview';
import Transacttion from './home/Transacttion';

const Container=styled.div`
display:flex;
flex-direction:column;
font-family:Montserrat;
align-items: center;
margin: 30px 0 10px;
`
const Headers=styled.div`
font-size:25px;
font-weight:bold;
`
function App() {
  return (
    <Container>
      <Headers>Expense Tracker</Headers>
      <HomeComponent/>
      <Overview/>
      <Transacttion/>
    </Container>
  );
}

export default App;
