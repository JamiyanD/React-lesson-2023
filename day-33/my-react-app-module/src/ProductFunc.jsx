
function ProductFunc (props){
    function handleUpVote(props){
      console.log('upvoted')
      console.log(props.votes)
    }
    return(
        <div id="container">
        <img id="image" src={props.productImageUrl} alt="logo1"></img>
        <div id="text-container">
          <div>
            <a onClick={() => {handleUpVote(props)}}>
          <i className="bi bi-caret-up-fill "></i>
          </a>
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