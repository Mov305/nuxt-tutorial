export default defineEventHandler(async (event) => {
  const { name } = getQuery(event);

  const { age } = await readBody(event); // the normal fetch in nuxt is $fetch()

  const { key } = useRuntimeConfig();

  return {
    message: `Hello ${name}! You are ${age} years old! ${key}`,
  };
});
