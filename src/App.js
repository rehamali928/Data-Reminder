import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { person } from './data';
import DataCount from './component/DataCount';
import DataList from './component/DataList';
import './App.css';
import Button from './component/Button';
import { useEffect, useState } from 'react';


function App() {
  const [PersonData,SetPersonData]=useState(person)
  const OnDelete=()=>{
    SetPersonData([])
  } 
  const OnViewData=()=>{
    SetPersonData(person)
  } 
 useEffect(()=>{
 
    SetPersonData([])
  
 },[])
  return (
<div  className='color-body'>
  <Container className='py-3'>
    <DataCount person={PersonData}/>
    <DataList person={PersonData}/>
    <Button DeleteData={OnDelete} ViewData={OnViewData} />
  </Container>

</div>


  );
}

export default App;
