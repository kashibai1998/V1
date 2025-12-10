import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Exp App" },
    { name: "description", content: "Welcome to Expenss Page!" },
  ];
};

export default function Expeness() {
    return (
        <div className="text-center p-10 bg-yellow-300">
            This Exp Component
        </div>
    )
}