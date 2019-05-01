import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BackGround from '../../assets/bg2.png'
import Logo from '../../assets/logo.svg'

import { connect } from 'react-redux'

import './Posts.css'

class Posts extends Component {
  // state = {
  //   posts: []
  // }

  // componentDidMount = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       this.setState({ posts: res.data.slice(0, 10) })
  //     })
  //     .catch(err => console.log(err))
  // }
  render() {
    const { posts } = this.props
    const postsList = posts.length ? (
      posts.map(post => {
        return (
          <div className="col-md-4" key={post.id}>
            <div className="card mb-3">
              <img src={BackGround} className="card-img-top" alt="" />
              <div className="card-body">
                <img className="logo" src={Logo} alt="" />
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <Link
                  href="#"
                  to={'/posts/' + post.id}
                  className="btn btn-info btn-raised"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className="text-center col-md">
        <i className="material-icons md-48">sentiment_very_dissatisfied</i>
        <br />
        No post yet
      </div>
    )
    return (
      <div>
        <h2 className="mt-3 text-center mb-3">Posts</h2>
        <div className="row">{postsList}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts)
