import React from "react"

class Product2 extends React.Component {
    render(){
        return (
            <div id="container">
        <img id="image" src="images/image-aqua.png" alt="logo1"></img>
        <div id="text-container">
          <div>
          <i class="bi bi-caret-up-fill "></i>
          <h1 class="d-inline">55</h1></div>
          <p>Haught or Naught</p>
          <p>High-minded or absent-minded?You decide.</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src="images/daniel.jpg" alt='profile'></img>
          </div>
        </div>
      </div>
        )
    }

}


export default Product2