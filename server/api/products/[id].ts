export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  const product: { title: string } = await $fetch(`https://fakestoreapi.com/products/${id}`);

  if (!product.title) {
    return {
      status: 404,
      body: {
        message: `Product with id ${id} not found ${process.env.ENV_V_TEST}`,
      },
    };
  }

  return {
    product,
  };
});
