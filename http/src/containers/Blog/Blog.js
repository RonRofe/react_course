import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
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
                    <Route path="/new-post" component={NewPost} ></Route>
                    <Route path="/posts" component={Posts} ></Route>
                    <Redirect from ="/" to="/posts"></Redirect>
                </Switch>
            </div>
        );
    }
}

export default Blog;