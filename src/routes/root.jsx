import { Link } from "react-router-dom";
import ErrorTest from "../ErrorTest";
import ErrorBoundary from "../ErrorBoundary";

export default function Root() {
  return (
    <>
      <h1>Welcome</h1>
      <p>
        Below is my <Link to="/counter">Counter App</Link>
      </p>

      <Link to="/"><ErrorBoundary>
        <ErrorTest />Error Page
      </ErrorBoundary> </Link>
      
    </>
  );
}
