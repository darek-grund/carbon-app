import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pod from 'carbon-react/lib/components/pod';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Pod title='Error Boundary Demo' style={ { marginTop: '40px', marginBottom: '40px' } }>
          <details style={ { whiteSpace: 'pre-wrap' } }>
            {this.state.error && this.state.error.toString()}
            {this.state.errorInfo.componentStack}
          </details>
        </Pod>
      );
    }

    return this.props.children;
  }
}
