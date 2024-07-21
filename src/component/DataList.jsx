import React from "react"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
const DataList=({person})=>{
    return(
        
        <Row className='justify-content-center'>
        <Col sm="8">
       <div  className='table mt-2 '>
       { person.length ? (person.map((item )=>{
        return(
          <div key={item.id} className=' d-flex border-bottom  pt-2 mx-3'>
          <img className='table-img' alt='mohemed' src={item.img}/>
          <div className='px-3'>
            <p >{item.name}</p>
            <p>{item.date}</p>
          </div>
          </div>
        )
        
       })):<h2 className='text-center fw-bolder p-5'>Dont Have any Appointement</h2>}
        
        
        
      
  
       </div>
        </Col>
      </Row>
    )
    
}
export default DataList