import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.destination = null;
  }

  static propTypes = {
    target: PropTypes.string.isRequired,
    children: PropTypes.element
  }

  static defaultProps = {
    children: ''
  }

  componentDidMount() {
    this.destination = document.querySelector(this.props.target);
    this.destination.appendChild(this.el);
  }

  componentWillUnmount() {
    this.destination.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}
