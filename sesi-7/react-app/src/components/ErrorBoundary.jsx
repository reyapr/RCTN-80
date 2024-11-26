/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  componentDidCatch(error) {
    console.log("error", error);
  }

  render() {
    if (!this.state.isError) {
      return this.props.children;
    }

    return <h1>Something went wrong, please contact our CS</h1>;
  }
}

export default ErrorBoundary;

/**
 * <ErrorBoundary>
 *   <App>
 * </ErrorBoundary>
 */
