import React, { Component, Suspense, Fragment } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {
  state = { showPosts: false };

  modeHandler = () => {
    this.setState((prevSate) => {
      return { showPosts: !prevSate.show };
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={this.modeHandler}>Toggle mode</button>
        {
          this.state.showPosts ? (
            <Suspense fallback={(<div>Loading...</div>)}>
              <Posts></Posts>
            </Suspense>
          ) : (
              <User></User>
            )
        }
      </Fragment>
      // <BrowserRouter>
      //   <React.Fragment>
      //     <nav>
      //       <NavLink to="/user">User Page</NavLink> |&nbsp;
      //       <NavLink to="/posts">Posts Page</NavLink>
      //     </nav>
      //     <Route path="/" component={Welcome} exact />
      //     <Route path="/user" component={User} />
      //     <Route
      //       path="/posts"
      //       render={
      //         () => (
      //           <Suspense fallback={(<div>Loading...</div>)}>
      //             <Posts></Posts>
      //           </Suspense>
      //         )
      //       } />
      //   </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default App;
