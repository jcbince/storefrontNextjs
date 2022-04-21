import React, {useEffect, useState} from 'react';


import Button from "../components/Button/Button";
import PageTitle from "../components/PageTitle/PageTitle";
import { User } from "../components/User"


// https://auth-dash-dev-d53c8-default-rtdb.firebaseio.com/products.json - RLTB



export default function Home(...props) {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState([])

  console.log("Home Function rendered")


  useEffect(()=>{
    console.log("Data Loader")
    async function loadExternalDataTheCRAWay(){
       const results = await fetch('https://jsonplaceholder.typicode.com/users');
       
       const data = await results.json(); 
       console.log(data)
       setUserData(data)
    }
    loadExternalDataTheCRAWay()

  },[])

  return (
    <>
      <PageTitle title="StoreFront Title" tagline="Featured Users"/>
      <div style={{textAlign:"center"}}>
          <Button onClick={()=>setIsLoading(!isLoading)}style={{background:"red"}}>Get Some Data</Button><Button onClick={()=>setIsLoading(!isLoading)} style={{background:"blue"}}>Click Test Button</Button>
          {
            isLoading&& <p style={{padding:"1rem"}}>This is my output</p>
          }
        
          
      </div>
      <main>
        {
          userData.map(user=>null)
        }
      </main>
    </>
  )

}
  // const products = props.products;
  // console.log(products)
// // getStaticProps =======> server Node.js

// export async function getStaticProps() {
//   const results = await fetch('https://jsonplaceholder.typicode.com/users');
  
//   const productData = await results.json(); 
//   console.log(productData)
//   const products = Object.values(productData);


//   return {
//     props:{
//       products
//     }
//   }
// }