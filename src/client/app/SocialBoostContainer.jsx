import React from 'react';

import PublishButton from './PublishButton';
import SocialBoostItem from './SocialBoostItem';

class SocialBoostContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
      <h1>Social Boost</h1>
      <br />
      <p> Social Boost auto-generates content for your social media channels.</p>
      <br />
      <p>Select the types of content you would like us to generate and publish for you</p>
      <br />
      <SocialBoostItem>
      <PublishButton>
      </div>
    );
  }

}

export default SocialBoostContainer;