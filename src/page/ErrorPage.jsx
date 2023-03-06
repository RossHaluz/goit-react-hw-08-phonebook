import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h2>Page not found...</h2>
      Try againe <Link to="/">Login</Link>
    </>
  );
};

export default ErrorPage;
