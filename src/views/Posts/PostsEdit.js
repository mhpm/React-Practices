import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import axios from 'axios'
import Loading from '../../components/Loading'
import { connect } from 'react-redux'

class PostEdit extends Component {
  state = {
    post: null,
    error: false
  }

  // getPost = id => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       this.setState({ post: res.data })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       this.setState({ error: true })
  //     })
  // }

  // componentDidMount = async () => {
  //   let post_id = this.props.match.params.post_id
  //   await this.getPost(post_id)
  // }

  handleDelete = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/posts')
  }

  render() {
    const post = this.props.post ? (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.post.title}</h5>
          <p className="card-text">{this.props.post.body}</p>
          <Link href="#" to="/posts" className="btn btn-info btn-raised">
            Back
          </Link>
          <a href="#!" onClick={this.handleDelete} className="btn btn-danger">
            Delete
          </a>
        </div>
      </div>
    ) : this.state.error ? (
      <div>No post finded</div>
    ) : (
      <Loading />
    )

    return <div>{post}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find(post => post.id === id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch({ type: 'DELETE_POST', id: id })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit)
