async function api() {
  // const response = await fetch(`https://www.fruityvice.com${path}`, {
  //   method,
  //   mode: "no-cors", // no-cors, *cors, same-origin
  // });

  // const data = await response.json();

  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve([
        {
          name: "apple",
        },
        {
          name: "pear",
        },
        {
          name: "strawberry",
        },
        {
          name: "mango",
        },
      ]);
    }, 1000)
  );
}

export default api;
