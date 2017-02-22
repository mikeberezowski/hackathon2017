import React from 'react';

class SocialBoostItem extends React.Component {

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
      <div style={{border-style:'solid'}}>
        <b>OTL Events</b>
        <p>Publish th goods!</p>
      </div>
    );
  }

}

export default SocialBoostContainer;