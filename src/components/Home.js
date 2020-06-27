import React from 'react';
import { PostsList } from './';

class Home extends React.Component {
  render() {
    // console.log('this is post and prop', this.props);
    const { posts } = this.props;
    return (
      <div>
        <PostsList posts={posts} />
      </div>
    );
  }
}

export default Home;
