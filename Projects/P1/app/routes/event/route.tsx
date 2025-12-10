import { MetaFunction, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Add App" },
    { name: "description", content: "Welcome to Expenss Page!" },
  ];
};

export default function Name() {
    return (
      <div className="text-center p-10 bg-yellow-300">
        <header>
          This is header content.
        </header>
        <Outlet />
        <footer>
           This is footer content.
        </footer>
        </div>
    )
}