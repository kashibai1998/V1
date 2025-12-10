import { MetaFunction, useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Event App" },
    { name: "description", content: "Welcome to Expenss Page!" },
  ];
};

export default function Name() {
  const { state } = useParams();
    return (
        <div className="text-center p-10 bg-yellow-300">
        This State Component : { state }
        </div>
    )
}