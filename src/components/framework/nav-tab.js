import { Link } from "react-router";

import React from 'react';
import Radium from 'radium';
// import _ from 'lodash';
// import Flex from './framework/flex';
// import { connect } from 'react-redux';
// import { FOO } from '../actions';

// const style = {
// };

// @connect(state => {
//   return state.FOO;
// })
@Radium
class NavTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  static propTypes = {
    /* react */
    // dispatch: React.PropTypes.func,
    params: React.PropTypes.object,
    routes: React.PropTypes.array,
    /* component api */
    style: React.PropTypes.object,
    // foo: React.PropTypes.string
  }
  static defaultProps = {
    // foo: "bar"
  }
  getStyles() {
    return {
      navTabs: {
        cursor: "pointer",
        padding: 14,
        fontWeight: 700,
        textDecoration: "none",
        color: "rgb(200,200,200)",
        borderBottom: "3px solid transparent", /* avoids height glitch */
      },
      active: {
        borderBottom: "3px solid rgb(100,100,100)",
        color: "rgb(100,100,100)",
      },
      tabText: {
        display: "inline-block",
      },
      number: {
        padding: "3px 6px",
        backgroundColor: "white",
        borderRadius: 3,
        fontWeight: 300,
        display: "inline-block",
        fontSize: 14,
        marginLeft: 7,

      },
    };
  }
  render() {
    const styles = this.getStyles();
    return (
        <Link
          onlyActiveOnIndex
          activeStyle={styles.active}
          style={styles.navTabs}
          to={this.props.url}>
            <span style={styles.tabText}> {this.props.text} </span>
            {
              this.props.number ?
                <span style={styles.number}> {this.props.number} </span> :
                ""
            }
        </Link>
    );
  }
}

export default NavTab;

/*

propTypes: {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // Anything that can be rendered: numbers, strings, elements or an array
    // (or fragment) containing these types.
    optionalNode: React.PropTypes.node,

    // A React element.
    optionalElement: React.PropTypes.element,

    // You can also declare that a prop is an instance of a class. This uses
    // JS's instanceof operator.
    optionalMessage: React.PropTypes.instanceOf(Message),

    // You can ensure that your prop is limited to specific values by treating
    // it as an enum.
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // An object that could be one of many types
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),

    // An array of a certain type
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // An object with property values of a certain type
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // An object taking on a particular shape
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),

    // You can chain any of the above with `isRequired` to make sure a warning
    // is shown if the prop isn't provided.
    requiredFunc: React.PropTypes.func.isRequired,

    // A value of any data type
    requiredAny: React.PropTypes.any.isRequired,

*/