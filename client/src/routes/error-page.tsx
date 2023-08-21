import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-8">
        <h1 className="text-2xl font-black">Oops! Something went wrong.</h1>
        <h2>{error.status}</h2>
        <p className="italic text-slate-600">{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <h1>Oops! Something went wrong.</h1>;
  }
};

export default ErrorPage;
