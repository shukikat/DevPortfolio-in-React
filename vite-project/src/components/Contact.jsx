import Header from './Header'
import { useState } from 'react'
//import {MouseEvent} from 'react'

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        }

        else if (name === 'email') {
            setEmail(value);
        }

        else if (name === "message") {
            setMessage(value);
        }

    }


    const handleSubmit = (event) => {
        event.preventDefault();

        //something should happen here!
        if (!name || !email || !message) {
            alert("Must have input")
            return;
        }





    }
    return (

        <div>


            <main>
                <h1>Contact</h1>

                <form onSubmit={handleSubmit}>
                    <label>Name </label>
                    <input
                        value={name}
                        onChange={handleChange}
                        type="text"
                        name='name'


                    />


                    <label>Email </label>
                    <input

                        value={email}
                        onChange={handleChange}
                        type="email"
                        name='email'




                    />

                    <label> Message </label>
                    <textarea
                        value={message}
                        onChange={handleChange}
                        name='message'

                    />


                    <button type="Submit">

                        Submit

                    </button>







                </form>

            </main>
        </div>


    )
}

//TO DO : LOTS! Need logic for blank inputs
//don't think this is set up right yet--