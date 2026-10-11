
import { Link } from "react-router";

function NotFound() {
  return (
    <main className="not-found-page">
      <p className="section-eyebrow">PAGE NOT FOUND</p>

      <h1>404</h1>

      <h2>Looks like you're lost.</h2>

      <p>
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link to="/" className="primary-button">
        Return to Home
      </Link>
    </main>
  );
}

export default NotFound;
