import React, { useState, useEffect } from 'react';
import './DogBreed.css';
import {
    Card,
    CardBody,
    CardTitle,
  } from 'reactstrap';

function DogBreed() {
  let [data,setData] = useState([])
  useEffect(()=>{
    let fetchData = async()=>{
      const URL = "https://api.thedogapi.com/v1/breeds?x-api-key=cd0c8063-1634-4339-aba5-8731a6ee3d2f"
      let response = await fetch(URL)
      let finalData = await response.json()
      // console.log(finalData)
      setData(finalData)
    }
    fetchData()
  },[])
  
  return data.map((el) => {
    return (
      <Card className='col-md-4 ms-3 mt-3 border-dark' color='dark' style={{width:'32%'}}>
        <img alt='' className="card-img-top" src={el.image.url}></img>
        <CardBody>
          <CardTitle tag="h5" className='fw-bold text-white border border-light rounded'>
                {el.name}
          </CardTitle>
          <p className='text-white align-left'>
            Purpose : {el.bred_for}<br/>
            Breed Group : {el.breed_group}<br/>
            Life span : {el.life_span}<br/>
            Temperament : {el.temperament}<br/>
            Origin : {el.origin}<br/>
            
          </p>
        </CardBody>
      </Card>
    )
    });
}

export default DogBreed;