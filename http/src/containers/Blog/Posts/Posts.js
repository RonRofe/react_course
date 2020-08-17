import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(({ data }) => {
                const posts = data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: 'Max',
                    };
                });

                this.setState({ posts: updatedPosts });
            })
            .catch((error) => {
                console.log(error);
                // this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        this.props.history.push({ pathname: '/' + id });
        // this.props.history.push('/' + id );
    };

    render() {
        let $posts = (
            <p style={{ textAlign: 'center' }}>Something went wrong!</p>
        );

        if (!this.state.error) {
            $posts = this.state.posts.map((post => {
                return (
                    // <Link  key={post.id} to={'/' + post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        click={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            }));
        }

        return (
            <div>
                <section className="Posts">
                    {$posts}
                </section>
                <Route path={this.props.match.url + ':id'} exact component={FullPost} ></Route>
            </div>
        );
    }
}

export default Posts;