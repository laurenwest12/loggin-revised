import React, {Component} from 'react'
import {connect} from 'react-redux'
import {logoutThunk} from './store'

class UserPage extends Component {

  render () {
  return (
    <div className='h100 w100 flex column align-items-center justify-center'>
      <div className='flex'>
        <img className='rounded mr1' />
        <h1>Welcome back, {this.props.user.email}!</h1>
      </div>
      <div>
        <button className='btn bg-red white p1 rounded' onClick = {this.props.logout}>Logout</button>
      </div>
    </div>
  )

  }
}

const mapStateToProps = ({ user }) => {
  return {
    user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutThunk())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
