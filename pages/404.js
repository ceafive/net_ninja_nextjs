import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => {};
  }, []);

  return (
    <div>
      <div className="not-found">
        <h1>Ooooooops....</h1>
        <h2>Cannot be found</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
