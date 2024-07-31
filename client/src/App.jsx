import React from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Navbar from './components/Navbar';
import client from './apolloClient';
import ErrorPage from './pages/ErrorPage';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default App;