import { useRouteError } from "react-router-dom";
import pageNotFound from "../assets/no-results.png";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className=" text-xl">Error, an unepexted event is occured.</p>
      <img src={pageNotFound} alt="Page not Found" />
      <p className="mt-10 text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
