// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";
import Radium from "radium";
import _ from "lodash";
import Flex from "./flex";

@Radium
class PolisLogo extends React.Component {
  styles() {
    return {
      link: {
        textDecoration: "none",
        cursor: "pointer",
        padding: "8px 0px 4px 10px"
      }
    }
  };
  render() {
    return (
        <a style={this.styles().link} href="https://care.or.th">
       CARE
        </a>
    );
  }
}

export default PolisLogo;
