import Header from './Header'
import { useState } from 'react'
import '../styles/Contact.css'

//set initial state to blank for name, email, and message fields, error message

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessages] = useState ({
        name:'',
        email:'',
        message:'',
    });

    //function to handle input when values are added to inputs + error messages or blank inputs
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

        if (errorMessage) {
            setErrorMessages((prevState) => ({
                ...prevState,
                [name]:'',
            }));
        };

    };

//if submit button is clicked with no inputs user sees an error message + confirmation when form submitted
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !message) {
            alert("All fields are required");
            return;
        }

        alert("Form submitted successfully");
        setName('');
        setEmail('');
        setMessage('');


    };

    //needed to handle this to account for error message with mouseout of input field
    const handleBlur =(event) => {
        const { name, value } = event.target;
        if (value.trim() === '') {
            setErrorMessages((prevState) => ({
                ...prevState,
                [name]:`${name.charAt(0).toUpperCase() + name.slice(1)} is required`
            }));
        }

        else {
            setErrorMessages ((prevState) => ({
                ...prevState,
                [name]:''

            }));
        }
                

        };
        


    return (

        <div>


            <main className='main-contact'>
                <div className="mainheader">
                    <h1>Contact</h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <label>Name </label>
                    <input
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        name='name'


                    />
                    {errorMessage.name && <span style={{ color: 'red' }}>{errorMessage.name}</span>}

                    <label>Email </label>
                    <input

                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        name='email'




                    />

                    {errorMessage.email && <span style={{ color: 'red' }}>{errorMessage.email}</span>}

                    <label> Message </label>
                    <textarea
                        value={message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='message'

                    />

                    {errorMessage.message && <span style={{ color: 'red' }}>{errorMessage.message}</span>}
                    
                    <button type="submit">

                        Submit

                    </button>







                </form>

            </main>
        </div>


    );

}

//TO DO : LOTS! Need logic for blank inputs
//don't think this is set up right yet--