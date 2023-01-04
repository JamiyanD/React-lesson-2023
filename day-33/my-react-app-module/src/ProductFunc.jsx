
function ProductFunc (props){

    return(
        <div id="container">
        <img id="image" src={props.productImageUrl} alt="logo1"></img>
        <div id="text-container">
          <div>
          <i className="bi bi-caret-up-fill "></i>
          <h1 className="d-inline">{props.votes}</h1></div>
          <p>{props.title}</p>
          <p>{props.description}</p>
          <div id='profile'>
            <p>Submitted by: </p>
            <img id="profile-img" src={props.submitterAvatarUrl} alt='profile'></img>
          </div>
        </div>
      </div>
    )
}
export default ProductFunc