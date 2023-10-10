import { useState } from 'react';
import './Newsletter.css'


const Newsletter = () => {

    const [email, setEmail] = useState('')
    const [show, setShow] = useState('hidden')

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isValid = regex.test(email)

    const handleSubmit = (e) => {
        if(!isValid) {
            e.preventDefault()
            setShow('visible')
        }else {
            setShow('hidden')
        }
    }

    return (
        <section className='newsletter'>
            <div className="newsletter-contents">
                <h1>Newsletter</h1>
                <form method='get' action='/'>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='your@email.com'/>
                    <button onClick={e => handleSubmit(e)} type='submit'>Subscribe</button>
                </form>
                <p style={{visibility: show}} className='email-error'>Enter valid email!</p>
            </div>
        </section>
    );
}

export default Newsletter;