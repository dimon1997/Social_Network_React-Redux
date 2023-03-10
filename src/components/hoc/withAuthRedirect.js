import React from "react";
import { connect } from "react-redux";
import { redirect } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {


  class RedirectComponet extends React.Component {
    render() {

      if (!this.props.isAuth) return redirect("/login")

      return <Component {...this.props} />
    }
  }

  let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponet);
  return connectedAuthRedirectComponent;
};
