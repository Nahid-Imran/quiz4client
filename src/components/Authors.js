import React from 'react';
import axios from 'axios';
class Authors extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {

    axios
      .get('http://localhost:3000/api/videos/')
      .then(response => {
        this.setState({
          posts: response.data
        });
        console.log(response);
      })
      .catch(error => {
        console.log('error ', error);
      });
  }
  render() {
    return (
      <div className='App'>
        {this.state.posts.map(post => (
          <li key={post.title}>{post.title}</li>
        ))}
      </div>
    );
  }
}

export default Authors;
