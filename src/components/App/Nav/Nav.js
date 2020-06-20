import React from "react";
import Logo from "../../Core/Logo/Logo";
import { throttle } from "lodash";

const t = {
  cta: "Request a demo",
  signin: "Sign In"
};

class Nav extends React.Component {
  // componentDidMount() {
  //   window.addEventListener("scroll", throttle(this.onScroll.bind(this), 200));
  // }

  // onScroll(event) {
  //   const elem = document.getElementById("cta-button");
  //   if (elem && window.scrollY > elem.offsetTop + elem.offsetHeight) {
  //     this.button.classList.remove("btn-ghost");
  //   } else {
  //     this.button.classList.add("btn-ghost");
  //   }
  // }

  render() {
    return <nav role="banner" className="fixed bg-blue top-0 left-0 right-0 bg-white z-1 w-100 ph3 ph4-ns pv2">
        <div className="mw9 center flex flex-wrap justify-end items-center">
          <Logo width="50px" className="mra" />
          <a href="/signin" className="link mr4 white">
            {t.signin}
          </a>
         &nbsp;
           <a href="/createuser" className="link mr4 white">
            Sign Up
          </a>
         
        </div>
      </nav>;
  }
}

export default Nav;
