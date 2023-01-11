import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome/index'
import ProductFunc from './ProductFunc';
import products from './Seed';
import { useState } from 'react';

function App() {
  const [productList, setProductList] = useState(products) // useState deere products avj baiga uchir ProductList n adilhan array bolj baiga

  function handleProductUpVote(productId){
    console.log('upvoted',productId)
  
        const newProducts = productList.map(product => {
          if(product.id == productId){
            return Object.assign({}, product, {
              votes: product.votes + 1
            })
          } else {
            return product
          }
        })
  
        console.log(newProducts)
     
        setProductList(newProducts)
       
  }
  const productComponents = productList.map((product) => 
    
   <ProductFunc 
   id={product.id}
    title={product.title} 
    description={product.description}
    votes={product.votes}
    submitterAvatarUrl={product.submitterAvatarUrl}
    productImageUrl={product.productImageUrl}
    stars={product.stars}
    onVote={handleProductUpVote}
     />
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="w-100">Popular products</h1>
      </header>
      <hr></hr>
    
      {productComponents}
   
    </div>
  );
}

export default App;
