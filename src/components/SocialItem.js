import React from "react";

function SocialItem(prop) {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={prop.id} />
        <label className="form-check-label" for={prop.id}>
          {prop.media}
        </label>
      </div>
    </li>
  );
}

export default SocialItem;
