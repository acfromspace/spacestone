import React from "react";

// Image will come from here
import profilePic from "./profile-pic.jpg";

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img src={profilePic} alt={`Kyle Mathews`} />
        Blog run by <strong>AC De Leon</strong>.{" "}
        <a href="acfromspace.github.io">ALL LINKS SHOULD GO HERE BITCH</a>
      </p>
    );
  }
}

export default Bio;
