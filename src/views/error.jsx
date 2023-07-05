import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-full pt-16 pb-12 flex flex-col bg-white"
    >
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              SORRY!
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              An error has occured!
            </h1>
            <p className="mt-2 text-base text-gray-500">
                Looks like something has gone wrong within the app. Details below:
            </p>
            <p className="mt-2 text-base text-red-300">
              {error}
              :: <i>{error?.statusText || error?.message}</i> ::
            </p>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <span className="text-sm font-medium text-gray-500 hover:text-gray-600">
            <a href="/"> &larr; Back to home</a>
          </span>
        </nav>
      </footer>
    </div>
  );
}
