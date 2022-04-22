import Head from "next/head";
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";


 
 
export default function Home(props) {

   
//https://jsonplaceholder.typicode.com/users https://auth-dash-dev-d53c8-default-rtdb.firebaseio.com/products.json - RLTB
  
  const products = props.products;

  return (
    <>
        <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
         <meta name="description" content="storefront online running shoes with free shipping"/>
         <meta name="keywords" content="Shoes, Runing, Running Shoes, Nike Shoes, New Balance Shoes"/>
           <title>Storefront</title>
        </Head>
         <PageTitle tagline="product specials" title="Storefront"/>
         <main>
             {  products.map(product=> <ProductCard  key={product.uid} product={product}/>)}
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

 