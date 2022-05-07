import React, { Component } from 'react'
import '../styles/PhoneBill.css';

class Billing extends Component {

    constructor(props) {
        super(props)
          
        this.state = {
           mobile : null,
           amount: null,
           pin: null,
        }
    }

    handleMobileNo = (event) => {
        this.setState({
            mobile: event.target.value
        })
    }

    handlePin = (event) => {
        this.setState({
            pin: event.target.value
        })
    }

    handleAmount = (event) => {
        this.setState({
            amount: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.mobile} ${this.state.pin} ${this.state.amount}`)
        event.preventDefault()
    }

    render() {    
        return (
            <div>
                <form  className='billCard' onSubmit={this.handleSubmit}>
                    <h2 className='formTitle'>Mobile Pay</h2>
                    <div>
                        <label className='label'>Enter Mobile Number</label>
                        <input type='tel' id='mobile' value={this.state.mobile} name='mobile' required placeholder='enter number' onChange={this.handleMobileNo} size='30' minLength='10' maxLength='10' />
                    </div>
                    <div>
                        <label>Charging Amount</label>
                        <input type='text' id='amount' name='amount' value={this.state.amount} required placeholder='enter amount' onChange={this.handleAmount} size='30' />
                    </div>
                    <div>
                        <label>Pin Number</label>
                        <input type='text' id='pin' name='pin' value={this.state.pin} required placeholder='enter pin number' size='30' onChange={this.handlePin} minLength='6' maxLength='6' />
                    </div>
                    <div>
                        <label />
                        <button className='billbutton' type='submit'>Pay Bill</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Billing
