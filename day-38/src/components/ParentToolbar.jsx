
export default function ParentToolbar(){
    return(
        <div 
        className="Toolbar"
        onClick={() => {
            alert("You clicked on the toolbar!")
        }}>
            <button onClick={(e) => {
               
                alert("Playing!")}}>Play Movie</button>
            <button onClick={(element) => {
                element.stopPropagation()
                alert("Uploading!")}}>Upload Image</button>
        </div>
    )
}