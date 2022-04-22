import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";


 
 
export default function Home(props) {

   
//https://jsonplaceholder.typicode.com/users https://auth-dash-dev-d53c8-default-rtdb.firebaseio.com/products.json - RLTB
  
  const products = props.products;

  return (
    <>
      <PageTitle title="StoreFront Title" tagline="Featured Products"/>
      
      <main>
      {
        products.map(product=> <ProductCard  key={product.uid} product={product}/>)
      }
      </main>
    </>
  )

    }



 

export async function getStaticProps(){
  
    const res = await fetch('https://shoeshine8k-default-rtdb.firebaseio.com/products.json')
    const productData = await res.json();
    const products = Object.values(productData)
    return {
          props:{
              products
          },
          revalidate: 60,
    }
}

 