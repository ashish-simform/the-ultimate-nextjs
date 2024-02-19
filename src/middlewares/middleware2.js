export function withMiddleware2(middleware) {
  return async (request, event) => {
    const url = request.url;
    console.log("middleware2", { url });
    return middleware(request, event);
  };
}
