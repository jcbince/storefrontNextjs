import Button from "../components/Button/Button";
import PageTitle from "../components/PageTitle/PageTitle";



/*

Look at creating components

Styles css modules csss....

Look at props

Data Integration Techniques....

*/

// https://auth-dash-dev-d53c8-default-rtdb.firebaseio.com/products.json - RLTB
function Product (){

  
  return <li>Products</li>
  

}


export default function Home(...props) {
 
  const products = props.products;
  console.log(products)



  return (
    <>
      <PageTitle title="StoreFront Title" tagline="Featured Users"/>
      <main>
        <div style={{textAlign:"center"}}>
          <Button style={{background:"red"}}>Get Some Data</Button><Button style={{background:"blue"}}>Other Test Button</Button>
          {/* { products.map(products=> <p>product</p>) } */}
          
        </div>
      </main>
    </>
  )

}

// getStaticProps =======> server Node.js

export async function getStaticProps() {
  const results = await fetch('https://jsonplaceholder.typicode.com/users');
  
  const productData = await results.json(); 
  console.log(productData)
  const products = Object.values(productData);


  return {
    props:{
      products
    }
  }
}