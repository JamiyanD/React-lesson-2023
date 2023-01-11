
export default function SignUp() {
    return(
        <form onSubmit={(par) => {
            par.preventDefault()
            alert("Submitting!")}}>
            <input />
            <button>Send</button>
        </form>
    );
}