export default defineEventHandler(async (event) => {
  // const { name } = getQuery(event);
  // const { age } = await useBody(event);
  // const { age } = await readBody(event);

  // api call with private key
  // const { data } = await $fetch(
  //   "https://free.currconv.com/api/v7/convert?q=USD_INR&apiKey=2e8a0a0a4d3d7e1cc0e9"
  // );
  // api call with private key
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=eJdPhICJUDBt6B4e41X6DZ4A9Xos4Z2JRZ8xh2v2"
  );
  return data;

  // return {
  //   message: `hello ${name} ! you are ${age} years old`,
  // };
});
