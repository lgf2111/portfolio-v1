import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";

export default function Error() {
  const location = useLocation();
  const { error } = location.state || {};

  console.error(error);

  return (
    <Layout>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-300 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-sm text-gray-600">
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
    </Layout>
  );
}
