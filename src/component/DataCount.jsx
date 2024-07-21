import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { person } from './../data';
const DataCount=({person})=>{
    return(
        
            <Row className='justify-content-center'>
      <Col sm="8">
        You Have {person.length} Appointments Available
      </Col>
    </Row>
        
    )
    
}
export default DataCount