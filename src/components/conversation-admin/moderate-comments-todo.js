import React from "react";
import { connect } from "react-redux";
import {
  changeCommentStatusToAccepted,
  changeCommentStatusToRejected
} from '../../actions'
import Radium from "radium";
import _ from "lodash";
import Comment from "./comment";

@connect(state => state.mod_comments_unmoderated )
@Radium
class ModerateCommentsTodo extends React.Component {

  onCommentAccepted(comment) {
    this.props.dispatch(changeCommentStatusToAccepted(comment))
  }
  onCommentRejected(comment) {
    this.props.dispatch(changeCommentStatusToRejected(comment))
  }
  createCommentMarkup() {
    const comments = this.props.unmoderated_comments.map((comment, i)=>{
      return (
        <Comment
          key={i}
          acceptButton
          rejectButton
          acceptClickHandler={this.onCommentAccepted.bind(this)}
          rejectClickHandler={this.onCommentRejected.bind(this)}
          comment={comment}/>
      )
    })
    return comments;
  }
  render() {
    return (
      <div>
        <h1>ModerateCommentsTodo</h1>
        <div>
          {
            this.props.unmoderated_comments !== null ?
            this.createCommentMarkup() :
            "spinnrrrr"
          }
        </div>
      </div>
    );
  }
}

export default ModerateCommentsTodo;