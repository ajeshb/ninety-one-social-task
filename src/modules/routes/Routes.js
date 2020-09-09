import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Dashboard from './../dashboard'
import Missions from './../mission'
import Settings from './../settings'

import Login from './../login'
import NotFound from './../notFound'

const privatePages =[
  '/dashboard',
  '/missions',
  '/settings'
]

class Routes extends Component {
  constructor (props) {
    super(props)
    const loadedRoute = window.location.pathname
    const index = privatePages.indexOf(loadedRoute)
    this.state = {
      defaultPage: index > -1 ? `${loadedRoute}${window.location.search}` : '/dashboard'
    }
  }

  render () {
    const {user, isAuthenticated} = this.props
    const { defaultPage } = this.state

    return (
      <Switch>
        <Redirect
          exact
          from='/'
          to={defaultPage}
        />
        <PublicRoute
          isAuthenticated={isAuthenticated}
          to={defaultPage}
          path='/login'
          exact
          component={Login}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path='/dashboard'
          to='/login'
          exact
          component={Dashboard}
        />
        <PrivateRoute
          isAuthenticated={isAuthenticated}
          path='/missions'
          to='/login'
          exact
          component={Missions}
        />
        {user.role === 'admin' ? <PrivateRoute
            isAuthenticated={isAuthenticated}
            path='/settings'
            to='/login'
            exact
            component={Settings}
          /> 
        : null}
        <Route
          component={NotFound}
          exact
          path='/not-found'
        />
        <Redirect to='/not-found' />
      </Switch>
    )
  }
}

function mapStateToProps (state) {
  return {
    ...state.auth
  }
}

export default connect(mapStateToProps)(Routes)
