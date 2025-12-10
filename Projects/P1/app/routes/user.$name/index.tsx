import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Add App" },
    { name: "description", content: "Welcome to Expenss Page!" },
  ];
};

export default function Name() {
    return (
        <div className="text-center p-10 bg-yellow-300">
            This Name Component
        </div>
    )
}