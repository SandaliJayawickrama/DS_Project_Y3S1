import React, { Component } from 'react'
import '../../styles/PhoneBill.css';

class Otp extends Component {

    constructor(props) {
        super(props)
          
        this.state = {
           pin: null,
        }
    }

    handlePin = (event) => {
        this.setState({
            pin: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Your Pin :  ${this.state.pin}`)
        event.preventDefault()
    }

    render() {    
        return (
            <div>
                <form  className='billCard mpay-col-1' onSubmit={this.handleSubmit}>
                    <h2 className='formTitle'>Enter OTP</h2>
                    <div>
                        <label>Pin Number</label>
                        <input type='text' id='pin' name='pin' value={this.state.pin} required placeholder='enter pin number' size='30' onChange={this.handlePin} minLength='6' maxLength='6' />
                    </div>
                    <div>
                        <label />
                        <button className='billbutton otp' type='submit'>Pay Bill</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Otp;
