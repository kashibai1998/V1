import { ActionFunctionArgs } from '@remix-run/node';
import { MetaFunction, useFetcher } from '@remix-run/react';
import Component from '~/components/component';

export const meta: MetaFunction = () => {
  return [
    { title: 'User Form' },
    { name: 'description', content: 'User form information' },
  ];
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = await request.formData();
  const details = Object.fromEntries(data.entries());
  console.log(details.username, details.email);
  return { name:details.username, email:details.email, address:details.address};
};

export default function Form() {
  const fetcher = useFetcher<typeof action>({key:'my-form'});
  console.log(fetcher, 'fetch===>');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          User Information
        </h1>
        <fetcher.Form method="post" className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              rows={3}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your address"
            ></textarea>
          </div>

          {/* Submit Button */}
                  <button
                      disabled={fetcher.state!=='idle'}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
          >
            Submit
          </button>
        </fetcher.Form>
          </div>
          <Component />
    </div>
  );
}
