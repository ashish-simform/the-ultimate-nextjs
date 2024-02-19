import { NextResponse } from "next/server";
// type MiddlewareFactory = (middleware: import("next/server").NextMiddleware) => import("next/server").NextMiddleware

export function chain(functions, index = 0) {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
}
