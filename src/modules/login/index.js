import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'

import { userLogin } from '../../redux/actions'
import { validateUser } from '../../services/utility'

import './index.scss'
import { STATUS } from '../../redux/constants';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillReceiveProps = nextProps => {
    if(nextProps.login.status !== this.props.login.status && nextProps.login.status === STATUS.ERROR) {
      toast.error('User does not exists. Please check the credentials!')
    }
  }
  
  onChangeValue = ( type, value ) => {
    this.setState({ [type]: value })
  }

  onClickLogin = (e) => {
    e.preventDefault()
    const { username, password } = this.state
    const { isValid, key } = validateUser(username, password)  //user verification is implemented locally, it has to be in the client side
    if(isValid) {
      this.props.dispatch(userLogin(key))
    } else {
      toast.error('User does not exists. Please check the credentials!')
    }
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="login">
        <div className='container' >
          <h4>LOGIN</h4>
          <form className='login-form'> 
            <Input type='text' title='Username' value={username} placeholder='Enter username' onChange={(value) => this.onChangeValue('username', value)} />
            <Input type='password' title='Password' value={password} placeholder='Enter password' onChange={(value) => this.onChangeValue('password', value)} />
            <Button text='Login' onClick={this.onClickLogin} disabled={!username || !password} />
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    login: state.auth.login,
  }
}


export default connect(mapStateToProps)(Login);
