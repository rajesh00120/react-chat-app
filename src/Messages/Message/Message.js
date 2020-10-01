import React from "react"


const Message = ({ message: { text, user }, name}) => {

    let tName = name.trim().toLowerCase();
    
    let isSentByCurrentUser = false;
    if (user === tName) {

        isSentByCurrentUser = true;
    }

    return (

        isSentByCurrentUser ? (<div><p>{tName}</p>
            <div className="messageText colorwhite">
                {text}
            </div>
        </div>) : (
                <div><p>{text}</p>
                    <div className="messageText colorwhite">
                        {user}
                    </div>
                </div>
            )
    )


}

export default Message