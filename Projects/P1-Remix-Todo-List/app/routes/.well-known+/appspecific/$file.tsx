import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return new Response(null, { status: 204 });
};

export default function DevtoolsJsonCatcher() {
  return null;
}