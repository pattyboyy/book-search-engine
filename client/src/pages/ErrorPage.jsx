import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ErrorPage = () => {
  const error = useRouteError();
  console.error('Detailed error:', error);

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6} className="mx-auto text-center">
          <h1 className="display-4">Oops!</h1>
          <p className="lead">Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          {error.stack && (
            <pre style={{ textAlign: 'left', marginTop: '20px', padding: '10px', background: '#f0f0f0' }}>
              {error.stack}
            </pre>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;