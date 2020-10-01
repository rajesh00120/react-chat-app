import React from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom'
import Message from './Message/Message'


const Messages = ({ messages, name }) => (
    <ScrolltoBottom className="message">
       
        {messages.map((message, index) => 

            <div key={index}>
                <Message message={message} name={name} />
                </div>
        )}
    </ScrolltoBottom>


)

export default Messages