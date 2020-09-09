import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

import Dashboard from './../dashboard'
import Login from './../login'
import NotFound from './../notFound'

function Routes({user}) {
    const defaultPage = '/dashboard'
    return (
      <Switch>
        <Redirect
          exact
          from='/'
          to={defaultPage}
        />
        <PublicRoute
          isAuthenticated={user.isAuthenticated}
          to={defaultPage}
          path='/login'
          exact
          component={Login}
        />
        <PrivateRoute
          isAuthenticated={user.isAuthenticated}
          path='/dashboard'
          to='/login'
          exact
          component={Dashboard}
        />
        <Route
          component={NotFound}
          exact
          path='/not-found'
        />
        <Redirect to='/not-found' />
      </Switch>
    )
}

function mapStateToProps (state) {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps)(Routes)
