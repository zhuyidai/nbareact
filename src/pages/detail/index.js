import React, { PureComponent } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actioncreators } from "./store";
import { withRouter } from "react-router-dom";

class detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></Content>
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getdetail(this.props.match.params.id);
  }
}

const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});
const mapDispatch = dispatch => ({
  getdetail(id) {
    dispatch(actioncreators.getdetail(id));
  }
});
export default connect(mapState, mapDispatch)(withRouter(detail));
