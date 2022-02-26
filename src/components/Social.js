import React from "react";
import SocialItem from "./SocialItem";

function Social() {
  return (
    <ul className="list-group">
      <SocialItem media="Facebook" id="facebook" />
      <SocialItem media="Youtube" id="youtube" />
      <SocialItem media="Instgram" id="instgram" />
    </ul>
  );
}

export default Social;
