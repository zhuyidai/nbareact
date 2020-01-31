import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, Loginbox, Input, Button, LogTitle } from "./style";
import { actioncreators } from "./store";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class login extends PureComponent {
  render() {
    const { loginstatus } = this.props;
    if (!loginstatus) {
      return (
        <LoginWrapper>
          <Loginbox>
            <LogTitle>Join us today!</LogTitle>
            <Input
              placeholder="Username"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="Password"
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => this.props.login(this.account, this.password)}
            >
              Log in
            </Button>
            <Link to="/">
              <Button>Cancel</Button>
            </Link>
          </Loginbox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapState = state => ({
  loginstatus: state.getIn(["login", "login"])
});
const mapDispatch = dispatch => ({
  login(accountelem, passwordelem) {
    dispatch(actioncreators.login(accountelem.value, passwordelem.value));
  }
});

export default connect(mapState, mapDispatch)(login);
