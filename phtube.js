const loadData = async (searchId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${searchId}`
  );
  const data = await res.json();
  console.log(data.title);
};
loadData(1001);
