import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import { ErrorBoundary } from "react-error-boundary"

 export default function Root() {
  return (
    <>
    <ErrorBoundary fallback={<h3> Error Component</h3>}>
      <h1>Welcome</h1>
      <p>
        Below is my <Link to="/counter">Counter App</Link>
      </p>
      <ErrorTest />

      <Link to="dint">Error 404Page</Link>
      </ErrorBoundary>     
    </>
  );
};