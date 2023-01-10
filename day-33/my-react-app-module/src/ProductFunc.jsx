import { useState } from 'react';
import products from './Seed';
import {Rating} from 'react-simple-star-rating'
function ProductFunc (props){

const[votes, setVotes] = useState(props.votes)

const[stars, setStars] = useState(props.stars)

    function handleDownVote(){
      setStars(stars - 1)

    }
    function handleUpVote(props){
      setVotes(votes + 1)
      if(stars > 5){
        setStars(0)
      }else{
        setStars(stars + 1)
      }
     
      console.log(props.id)
      let newProducts = []
      const foundProduct = products.map(product => {
        if(product.id == props.id){
          product.votes = product.votes + 1;
          console.log("hha")
        }
        return product
      })
      console.log(foundProduct[0])
     

      

    }
    return(
        <div className="container" id={props.id}>
        <img id="image" src={props.productImageUrl} alt="logo1"></img>
        <div id="text-container">
          <div>
            <a onClick={() => {handleUpVote(props)}}>
          <i className="bi bi-caret-up-fill "></i>
          </a>
          <a onClick={() => {handleDownVote(props)}}>
          <i className="bi bi-caret-down-fill "></i>
          </a>
          <h1 className="d-inline">{votes}</h1></div>
          <p>{props.title}</p>
          <p>{props.description}</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src={props.submitterAvatarUrl} alt='profile'></img>
          </div>
          <Rating
          initialValue={stars}
          />
        </div>
      </div>
    )
}
export default ProductFunc