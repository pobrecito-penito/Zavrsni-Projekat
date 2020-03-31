import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isLogin } from '../services/auth.service'

const PrivateRoute = ({component: Component, path}) => {
    return(
        <Route path={path}>
            {isLogin() ?  <Component /> : <Redirect to exact="/" />}
        </Route>
    )
}

export default PrivateRoute