import React from "react"

class Product1 extends React.Component {
    render(){
        return (
            <div id="container">
        <img id="image" src={this.props.productImageUrl} alt="logo1"></img>
        <div id="text-container">
          <div>
          <i className="bi bi-caret-up-fill "></i>
          <h1 className="d-inline">{this.props.votes}</h1></div>
          <p>{this.props.title}</p>
          <p>{this.props.description}</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src= {this.props.submitterAvatarUrl} alt='profile'></img>
          </div>
        </div>
      </div>
        )
    }

}


export default Product1

