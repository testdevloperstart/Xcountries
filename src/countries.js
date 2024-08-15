import React, { useEffect, useState } from 'react'

const CountryCard = ({name, flag, alttext}) => {

  return(
    <div style={{
      border:"1px solid black",
      borderRadius:"10px",
      padding:"10px",
      height:"200px",
      width:"200px"
    }}>
      <img src={flag} alt={alttext} style={{height:"100px",
      width:"100px"}}/>
      <h3>{name}</h3>
    </div>
  )
}

const API_URL =" https://xcountries-backend.azurewebsites.net/all"

function Countries() {
  const temparray = [1,2,3,4,5,6,7,8,9,10,11,12];
  const[country, setCountry]=useState([])

  useEffect(()=>{
    fetch(API_URL)
    .then(res =>res.json())
    .then(data=>setCountry(data))
    .catch((error)=> console.log("Error fetching data",error))
    
  },[])
  return (
    <div style={{
      display: "flex",
      justifyContent:"center",
      flexWrap:"wrap",
      gap:"10px",
      padding:"10px",
      alignItems:"center",

    }}>

     
{country.map((country) => (
        <CountryCard key={country.abbr}
         name={country.name} 
         flag={country.flag} 
         alttext={country.abbr}/>
      ))}
      
    </div>
  )
}

export default Countries ;
