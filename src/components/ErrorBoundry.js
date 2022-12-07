import React, { Component } from "react";


class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state

    return hasError ? <h1>Doooops. that is not good.</h1> : this.props.children
  }
}


export default ErrorBoundry