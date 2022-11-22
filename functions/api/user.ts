interface Env {
  KV: KVNamespace;
}

export const onRequest: PagesFunction<Env> = async ({
  request,
  params,
  env,
}) => {
  return new Response(
    JSON.stringify({ name: "Bob", email: "bob@burgers.com" }),
    {
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }
  );
};
