import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { WriteWrapper, Header, Button, Input } from "./style";
import { Link } from "react-router-dom";

class Write extends PureComponent {
  render() {
    const { loginstatus } = this.props;
    if (loginstatus) {
      return (
        <WriteWrapper>
          <Header>Share your story with us!</Header>
          <Input type="text" placeholder="Tell us.."></Input>
          <Link to="./">
            <Button>Submit</Button>
          </Link>
          <Link to="./">
            <Button>Cancel</Button>
          </Link>
        </WriteWrapper>
      );
    } else {
      return <Redirect to="/login/" />;
    }
  }
}
const mapState = state => ({
  loginstatus: state.getIn(["login", "login"])
});
export default connect(mapState, null)(Write);
