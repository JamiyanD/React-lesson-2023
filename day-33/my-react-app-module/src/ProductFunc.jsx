import { useState } from 'react';
import products from './Seed';
import {Rating} from 'react-simple-star-rating'
export default function ProductFunc ( {onVote, product}){

// const[votes, setVotes] = useState(product.votes)

const[stars, setStars] = useState(product.stars)
 

    function handleDownVote(){
      setStars(stars - 1)

    }
    

     

      
// 
    
    return(
        <div className="container" >
        <img id="image" src={product.productImageUrl} alt="logo1"></img>
        <div id="text-container">
          <div>
            <a onClick={() => {
            onVote(product.id);
            }}>
          <i className="bi bi-caret-up-fill "></i>
          </a>
          <a onClick={() => {handleDownVote(product)}}>
          <i className="bi bi-caret-down-fill "></i>
          </a>
          <h1 className="d-inline">{product.votes}</h1></div>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src={product.submitterAvatarUrl} alt='profile'></img>
          </div>
          <Rating
          initialValue={stars}
          color="red"
          />
        </div>
      </div>
    )
}
