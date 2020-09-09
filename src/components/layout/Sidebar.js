import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { userLogout } from '../../redux/actions'

import './layout.scss'

const availablePages = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        roles: ['user', 'admin']
    }, {
        name: 'Missions',
        path: 'missions',
        roles: ['user', 'admin']
    }, {
        name: 'Settings',
        path: 'settings',
        roles: ['admin']
    }, 
]

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.currentPage = props.location && props.location.pathname ? props.location.pathname.replace('/', '') : ''
    }

    onClickLogout = () => {
        this.props.dispatch(userLogout())
    }

    onSelectPage = page => {
        this.props.history.push(`/${page}`)
    }

    render() {
        const { user } = this.props
        const allowedPages = availablePages.filter(page => page.roles.indexOf(user.role) > -1)
        return (
            <div className='side-bar' >
                {allowedPages.map(page => (
                    <div key={page.path} className={`side-bar-tab ${this.currentPage === page.path ? 'active': ''}`} onClick={() => this.onSelectPage(page.path)} >
                        <p className='page-title' >{page.name}</p>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {  ...state.auth  }
}
  
export default connect(mapStateToProps)(withRouter(Sidebar))
