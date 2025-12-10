import { Outlet, useLoaderData } from "@remix-run/react";

export const loader = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const res1 = await res.json();
    return {res1, appName:'Comments Post'};
}
    
export default function User() {
  const loaderData = useLoaderData<typeof loader>();
  console.log('load', loaderData);
  return (
    <div className="m-10 p-100 align-middle">
      <header>This is a Header Componentttttt</header>
      <Outlet />
      <footer>This is a Footer Componentttttt</footer>
    </div>
  );
}
