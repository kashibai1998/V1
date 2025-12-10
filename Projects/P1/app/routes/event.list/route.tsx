import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Event App" },
    { name: "description", content: "Welcome to Expenss Page!" },
  ];
};

export default function EventList() {
    return (
        <div className="text-center p-10 bg-yellow-300">
        This Event List: events
        </div>
    )
}