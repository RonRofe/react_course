import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import axios from 'axios';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

import './Blog.css';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink activeClassName="not-wroking-active" activeStyle={{ color: '#FA923F', textDecoration: 'underline' }} to="/" exact>Home</NavLink></li>
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
                <Route path="/" exact component={Posts} ></Route>
                <Route path="/new-post" component={NewPost} ></Route>
                <Route path="/:id" exact component={FullPost} ></Route>
            </div>
        );
    }
}

export default Blog;