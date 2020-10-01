import React , {Component ,useEffect} from "react";
import { useState } from "react";


const  Test = ()=>{

    const [message,setMessage] = useState("")

      useEffect(() => {

          setMessage(message)
       
    }, [])

   
 

        return (<div>


            <body>

            <div class="container">
                <h2>Vertical (basic) form</h2>
                <form>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
                    </div>

                    <button onClick={()=>console.log(setMessage(message+1))} type="button" class="btn btn-info">Submit</button>
                </form>
            </div>

            </body>


        </div>);
    


}




export default Test;