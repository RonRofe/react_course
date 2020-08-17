import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true,
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    activeClassName="not-wroking-active"
                                    activeStyle={{ color: '#FA923F', textDecoration: 'underline' }}
                                    to="/posts"
                                    exact>Posts</NavLink></li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                                    }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {
                        this.state.auth ? (
                            <Route path="/new-post" component={AsyncNewPost} ></Route>
                        ) : null
                    }
                    <Route path="/posts" component={Posts} ></Route>
                    <Route render={() => ( <h1>NOT FOUND!</h1> )}></Route>
                    {/* <Redirect from="/" to="/posts"></Redirect> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;