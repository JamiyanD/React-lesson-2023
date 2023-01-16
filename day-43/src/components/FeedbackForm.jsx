import {useState} from 'react'
export default function FeedbackForm() {
    const [text, setText] = useState('')
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)
    async function setMessage(){
      setIsSending(true)
      return(
        new Promise(resolve => {
       
          setTimeout(resolve,2000)
        })
      )
    }
    async function handleSubmit(e){
      e.preventDefault();
      setIsSending(true);
      await setMessage()
      setIsSending(false)
      setIsSent(true)
    }
    if(isSent){
      return <h1>Thanks for feedback</h1>
    }
    return (
      <div className="App">
        <h1>Day 43</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Та текстээ оруулна уу?</h1>
        <textarea value={text}
        onChange={e => setText(e.target.value)}
        disabled={isSending}
        ></textarea>
        <br></br>
        <button onClick={() => {
    
        }}>Send</button>
        {isSending ?<p>sending...</p> : ''}
        
        </form>
      </div>
    );
  }