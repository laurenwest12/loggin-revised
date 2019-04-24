import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loginThunk} from './store'

class Login extends Component {
  constructor() {
    super()
    this.state = {
        email: '',
        password: ''
    }
  }

  onChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    this.props.login(this.state)
  }

  render () {
  
  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <h1>Let's Loggin'!</h1>
      <div className='flex w50'>
        <img src='/loggin.png' />
        <form className='grow1' onSubmit = {this.onSubmit}>
          <div className='flex column'>
            <div className='flex column m1'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className='input' onChange = {this.onChange}/>
            </div>
            <div className='flex column m1'>
              <label htmlFor='email'>Password</label>
              <input type='password' name='password' className='input' onChange = {this.onChange}/>
            </div>
            <div className='m1'>
              <button type='submit' className='btn bg-blue white p1 rounded'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )}
}

const mapDispatchToProps = (dispatch) => {
    return {
    login: (user) => dispatch(loginThunk(user))
  };
}

export default connect(null, mapDispatchToProps)(Login)
