import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import store, { sessionLoginThunk } from './store'
import Login from './login'
import UserPage from './user-page'



class _Main extends Component {
  componentDidMount() {
    this.props.sessionLogin()

  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <Switch>
        {
          isLoggedIn && (<Route path='/home' component={UserPage} />)
        }
        {
          !isLoggedIn && (
            <Route component={Login} />
          )
        }
        <Redirect to='/home' />
      </Switch>
    )
  }
};

const mapStateToProps = ({ user }) => {
  return {
    isLoggedIn: !!user.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sessionLogin: () => dispatch(sessionLoginThunk())
  };
}

const Main = connect(mapStateToProps, mapDispatchToProps)(_Main);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>,
  document.getElementById('app')
)
