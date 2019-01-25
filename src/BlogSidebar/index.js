import React from "react";
import "./style.css";
import LoginStatus from "./LoginStatus";
import { NavLink } from "react-router-dom";

export default class BlogSidebar extends React.PureComponent {
  render() {
    return (
      <div id="blog-sidebar" className="block">
        <LoginStatus {...this.props} />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>Add Post</li>
        </ul>
      </div>
    );
  }
}
