export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currencyKey } = useRuntimeConfig();
  const uri = `https://free.currconv.com/api/v7/convert?q=${code}_INR&apiKey=${currencyKey}`;
  const { data } = await $fetch(uri);
  return data;
});
