import React from 'react';
import { PostsList, FriendsList } from './';

class Home extends React.Component {
  render() {
    // console.log('this is post and prop', this.props);
    const { posts, friends, isLoggedin } = this.props;
    return (
      <div className="home">
        <PostsList posts={posts} />
        {isLoggedin && <FriendsList friends={friends} />}
      </div>
    );
  }
}

export default Home;
