import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1>Oops!</h1>
        <p className="text-gray-600">Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <a href="/" className="mt-4 inline-block rounded bg-m_black px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </a>
      </div>
    </div>
  );
}