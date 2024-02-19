export function withMiddleware1(middleware) {
  return async (request, event) => {
    const url = request.url;
    console.log("middleware1", { url });
    return middleware(request, event);
  };
}
