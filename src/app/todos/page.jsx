import React from "react";

//to make the whole segment as dynamic we can export the force-dynamic

// export const dynamic = "force-dynamic";

async function getTodos() {
  //here with the cache: "no-store" we are saying that fetch the data every time the request comes

  //next: {revalidate: 20} we can pass the next key to the fetch and revalidate

  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    // cache: "no-store",
    // next: { revalidate: 20 },
  });
  if (!res.ok) throw new Error("Failed to fetch todos");

  return res.json();
}

const Todos = async () => {
  const todos = await getTodos();
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">Todos</h1>
        <ul className="flex flex-col gap-3 mt-6">
          {todos.slice(0, 10).map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Todos;
