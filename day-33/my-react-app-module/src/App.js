// import logo1 from './img/image-yellow.png';
// import logo2 from './img/image-aqua.png';
// import logo3 from './img/image-steel.png';
// import logo4 from './img/image-rose.png';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontawesome/index'
import Product1 from './Product1';
// import Product2 from './Product2';
// import Product3 from './Product3';
// import Product4 from './Product4';
import ProductFunc from './ProductFunc';
// import ProductFunc2 from './ProductFunc2';
// import ProductFunc3 from './ProductFunc3';
// import ProductFunc4 from './ProductFunc4';
import products from './Seed';


function App() {
  // const productList = products.map((product) => {
    
  //   return <ProductFunc 
  //   id={product.id}
  //   title={product.title} 
  //   description={product.description}
  //   url={product.url}
  //   votes={product.votes}
  //   submitterAvatarUrl={product.submitterAvatarUrl}
  //   productImageUrl={product.productImageUrl}
  //    />
  // })
  // const productList2 = products.map((product) =>{
  //   return <Product1 
  //   id={product.id}
  //   title={product.title} 
  //   description={product.description}
  //   url={product.url}
  //   votes={product.votes}
  //   submitterAvatarUrl={product.submitterAvatarUrl}
  //   productImageUrl={product.productImageUrl}
  //    />
  // })
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="w-100">Popular products</h1>
      </header>
      <hr></hr>
      <Product1 />
      {/* <Product2 />
      <Product3 />
      <Product4 />
      <ProductFunc />
      <ProductFunc2 />
      <ProductFunc3 />
      <ProductFunc4/> */}
      {/* {productList} */}
      {/* {productList2} */}
    </div>
  );
}

export default App;
