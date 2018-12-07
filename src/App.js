import React from 'react';
import Counter from './Counter'
import PassingProps from './PassingProps/PassingProps'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Navigation from './Navigation'
import MenuItem from 'material-ui/MenuItem'
import FetchingUsers from './FetchUsers'
import SyncUsers from './SyncUsers'

const style = {
  textDecoration: 'none'
}

class App extends React.Component {
  render() {
    return (



      <Router>
        <div>
          <div>
            <Navigation
              label={"JFDDL6"}>
              <Link
                style={style}
                to="/">
                <MenuItem>
                  home
                </MenuItem>
              </Link>
              <Link
                style={style}
                to="/Counter">
                <MenuItem>
                  counter
                </MenuItem>
              </Link>
              <Link
                style={style}
                to="/passing-props">
                <MenuItem>
                  passing props
              </MenuItem>
              </Link>
              <Link
                style={style}
                to="/counter-with-start-value">
                <MenuItem>
                  start value 15
                </MenuItem>
              </Link>
              <Link
                style={style}
                to="/FetchinUsers">
                <MenuItem>
                  FetchUsers
                </MenuItem>
              </Link>
              <Link
                style={style}
                to="/SyncUsers">
                <MenuItem>
                  SyncUsers
                </MenuItem>
              </Link>
            </Navigation>

          </div>
          <div>
            <Route exact path="/" component={Counter}></Route>
            <Route path="/Counter" component={Counter}></Route>
            <Route path="/passing-props" component={() => <PassingProps
              passingValue={5}
              passingFun={() => alert('bu!')} />}
            />
            <Route path="/counter-with-start-value" component={() => <Counter startValue={15} />}></Route>
            <Route path="/FetchinUsers" component={FetchingUsers}></Route>
            <Route path="/SyncUsers" component={SyncUsers} />

          </div>
        </div>
      </Router>

    );
  }
}
export default App;
