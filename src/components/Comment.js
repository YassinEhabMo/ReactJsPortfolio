import React from 'react';
import commentBox from 'commentbox.io';

class PageWithComments extends React.Component {
  componentDidMount() {
    this.removeCommentBox = commentBox('5639279652896768-proj', { containerId: 'CommentSection' });
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return <div className='container mx-auto'>
      <div id="CommentSection" />
    </div>
  }
}

export default PageWithComments;
