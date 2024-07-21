import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const Button=({DeleteData ,ViewData})=>{

    return(
        <Row className='justify-content-center my-2'>
      <Col sm="8" className='d-flex justify-content-between'>
      <button onClick={DeleteData}  className='btn-style py-2'>Delete ALL</button>
      <button onClick={ViewData} className='btn-style py-2'>Display Data</button>
      
      </Col>
    </Row>
    )
    
}
export default Button