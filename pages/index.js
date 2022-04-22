import React, {useEffect, useState} from 'react';


import Button from "../components/Button/Button";
import PageTitle from "../components/PageTitle/PageTitle";
import { User } from "../components/User"


// https://auth-dash-dev-d53c8-default-rtdb.firebaseio.com/products.json - RLTB



export default function Home(...props) {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([])

  console.log("Home Function rendered")
  const userProps = props.data;
  console.log(userProps)

  useEffect(()=>{
    console.log("Data Loader")
    async function loadExternalDataTheCRAWay(){
       const results = await fetch('https://jsonplaceholder.typicode.com/users');
       
       const data = await results.json(); 
    
       setUserData(data)
       console.log('data loaded')
    }
    loadExternalDataTheCRAWay()

  },[])

  return (
    <>
      <PageTitle title="StoreFront Title" tagline="Featured Users"/>
      <div style={{textAlign:"center"}}>
          <Button onClick={()=>setIsLoading(!isLoading)}style={{background:"red"}}>Get Some Data</Button><Button onClick={()=>setIsLoading(!isLoading)} style={{background:"blue"}}>Click Ouput Button</Button>
          {
            isLoading&& <p style={{padding:"1rem"}}>This is my output and here is the data {
              userData.map(({id, name, email, username})=> <User key={id} name={name} email={email} username={username}/>)
            }</p> 
          }
 
       
          
      </div>
      <main>
      {
        userData.map(({id, name, email, username})=> <User key={id} name={name} email={email} username={username}/>)
      }
      </main>
    </>
  )

}


// creates terminal list data

// export async function getStaticProps() {
//   const results = await fetch('https://jsonplaceholder.typicode.com/users');
  
//   const userData = await results.json(); 
//   console.log(userData)
//   const user = Object.values(userData);


//   return {
//     props:{
//       user
//     }
//   }
// }