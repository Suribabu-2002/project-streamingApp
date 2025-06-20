import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log("Error:", error);
    console.log("Error Info:", errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <div className="error-container">Something went wrong.</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
