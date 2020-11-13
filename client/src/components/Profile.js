import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// MUI stuff
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
// Icons

const styles = (theme) => ({
  ...theme.spreadThis,
});

class Profile extends Component {
  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
      },
    } = this.props;
    
    let profileMarkup = !loading ? (authenticated ? (
      <Paper
    ):()) : (<p>loading...</p>);

    return profileMarkup
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));
