import { MetaFunction, useParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Exp List App" },
    { name: "description", content: "Welcome to Expenss Page!" },
  ];
};

export default function Expeness() {
    const {eventName} = useParams();
    return (
        <div className="text-center p-10 bg-slate-400">
            This Event Name : { eventName }
        </div>
    )
}