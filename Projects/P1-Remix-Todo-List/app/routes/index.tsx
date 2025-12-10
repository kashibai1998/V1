import { json, redirect, type LoaderFunction, type ActionFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getTodos, createTodo } from "../models/todo.server";

export const loader: LoaderFunction = async () => {
  const todos = await getTodos();
  return json({ todos });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const text = formData.get("text") as string;
  if (text.trim()) {
    await createTodo(text);
  }
  return redirect("/");
};

export default function Index() {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Todo List</h1>

      <Form method="post" className="flex gap-2 mb-4">
        <input
          name="text"
          className="flex-grow border px-3 py-2 rounded shadow"
          placeholder="Enter a new todo"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </Form>

      <ul className="list-disc pl-6 space-y-1">
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </main>
  );
}