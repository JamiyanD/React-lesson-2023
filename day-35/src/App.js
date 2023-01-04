import logo from'./logo.svg'
import './App.css';
import products from './Seed'
function Profile(props){
  const { name, age, profession} = props;
  const img = props.img
  return (
    <div className="profile">
      <img src={img} alt="people" />
      <p>name: {name} </p>
      <p>age: {age}</p>
      <p>gender: {props.gender}</p>
      <p>email :{props.email}</p>
      <p>profession: {profession}</p>
    </div>
  )
}

function App() {
  const user = {
    img: "img/molly.png",
    name: "John Smith",
    profession: "Developer",
    age: 20
  }
  return (
    <div className="App">
      <Profile
      {...user}
      // img="img/molly.png"
      // name="John Smith"
      // age={20}
      // gender="male"
      // email="black.duurenjargal.jamyan@gmail.com"
      // profession="Frontend Developer"
      />
      <Profile
      img={logo}
      name="Jaya"
      age={20}
      gender="male"
      email="black.duurenjargal.jamyan@gmail.com"
      profession="Frontend Developer"
      />
      {products.map((product) => {
        console.log(product)
      })}
    </div>
  );
}

export default App;
