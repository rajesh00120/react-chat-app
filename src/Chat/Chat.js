import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from "socket.io-client"

import Messages from "../Messages/Messages"
import InfoBar from "../InfoBar/InfoBar"
import Input from "../Input/Input"



let socket;

const Chat = (location) => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const ENDPOINT = "http://3.114.230.224:8080";
  
    useEffect(() => {

        const { name, room } = queryString.parse(window.location.search)
        socket = io(ENDPOINT)

        setRoom(room)
        setName(name)
       
        socket.emit('join', { name, room }, (error) => {

            if (error) {

                alert(error);

            }

        })

        return ()=>{
        socket.emit('disconnected!');
        socket.off();}
        
    }, [ENDPOINT, location.search])


    useEffect(() => {

        socket.on('message', message => {

            setMessages(messages => [...messages, message])
        });

      
    },[messages])

   
    const sendMessage = (event) => {

        event.preventDefault()
    
        if (message) {
    
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    
    }

    return (
        <div>
             <InfoBar room={room} />
             <Messages messages={messages} name={name} />
             <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
    )
    
    
}




export default Chat
