import { ToastContainer, toast } from 'react-toastify';
export default function ToasterPage(){

const notify = () => toast("Amjilltai hadgalagdlaa.!")
    return(
        <div>
            <button onClick={notify}>Hadgalah</button>
            <ToastContainer />
        </div>
    )
}