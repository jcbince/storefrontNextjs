async function getProduct(uid) {
	const res = await fetch(
	  `https://shoeshine8k-default-rtdb.firebaseio.com/products/${uid}.json`
	);
	const data = await res.json();
	return data;
  }
  
  export { getProduct };