import { MetaFunction, Outlet, useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Add App" },
    { name: "description", content: "Welcome to Expenss Page!" },
  ];
};

export default function Index() {
  const {name} =  useParams();
    return (
      <div className="text-center p-10 bg-yellow-300">
        {
          name  ? <Outlet/> : <h1>This User Component</h1>
        }
      </div>
    )
}