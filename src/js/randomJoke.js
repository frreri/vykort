export const joke = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random');
  if (!res.ok) throw new Error('FEEEEEEEEEL');
  const data = await res.json();
  return data.value;
};
