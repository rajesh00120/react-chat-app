import React, { useState } from "react"
import { Link } from 'react-router-dom'

const Join = ()=> {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return (

        <div>
            <h1>Join Chat Room</h1>

            <div>
                <input placeholder="Name" type="text" onChange={(evt) => setName(evt.target.value)} />
                <input placeholder="Room" type="text" onChange={(evt) => setRoom(evt.target.value)} />

                <Link onClick={e => (!name || !room) ? e.preventDefault : null} to={`/chat?name=${name}&room=${room}`} >
                    <button className={'button mt-10'} type="submit">Login</button>
                </Link>

            </div>
        </div>
    )
}

export default Join
