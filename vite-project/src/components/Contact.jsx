import Header from './Header'
import {useState} from 'react'

export default function Contact () {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [message, setMessage]=useState('');

    const handleChange = (event)=>{
        const name=event.target.name;
        const email=event.target.email;
        const message=event.target.message;
    }


    const handleSubmit = (event)=> {
        event.preventDefault();
        //something should happen here!

    }
    return (

        <header>
        <Header/>
        </header>>

        <main>
            <h1>Contact</h1>
         
         <form onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={handleChange}
                type="text"
                name='name'
                
                
                />
            

            <input

                value={email}
                onChange={handleChange}
                type="text"
                name='email'

                


                />
            

            <input 
                value={message}
                onChange={handleChange}
                type="text"
                name='message'
                
                />


                <button type="Submit">

                    Submit 
                </button>
           






         </form>

        </main>
    )
}

//TO DO : LOTS! Need logic for blank inputs 
    //don't think this is set up right yet--