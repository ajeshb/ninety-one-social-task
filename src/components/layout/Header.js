import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { userLogout } from '../../redux/actions'

import './layout.scss'
import SettingsIcon from '../icons/SettingsIcon'
import HeaderButton from '../buttons/HeaderButton'

class Header extends Component {

    onClickLogout = () => {
        this.props.dispatch(userLogout())
    }

    onClickSettings = () => {
        this.props.history.push('/settings')
    }

    render() {
        const { isAuthenticated, user } = this.props
        return (
            <header className='header' >
                <div className='left-menu' >
                    <img src={'/logo.png'} alt='product-logo' />
                </div>
                <div className='menu' >
                    { isAuthenticated ? (
                        <Fragment>
                            <p className='username'>{user.name}</p>
                            { user && user.role === 'admin' ? <HeaderButton icon={<SettingsIcon />} onClick={this.onClickSettings} /> : null }
                            <HeaderButton text={'Logout'} onClick={this.onClickLogout} />
                        </Fragment> 
                    ) : null}
                </div>
            </header>
        )
    }
}

function mapStateToProps (state) {
    return {  ...state.auth  }
}
  
export default connect(mapStateToProps)(Header)
