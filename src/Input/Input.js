import React from "react"

const Input = ({ message,setMessage, sendMessage  }) => (

    <form>
        <input type="text" placeholder="Type ......" value={message} onChange={(event) => setMessage(event.target.value)}

            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}

        />

        <button onClick={e => sendMessage(e)}>Send</button>

    </form>

)

export default Input



 