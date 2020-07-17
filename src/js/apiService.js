export const apiService = value => {
  const page = 1;
  fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=1&per_page=12&key=14706813-7c058fab53d6fa7c4bf5f75a9`,
  )
    .then(res => res.json())
    .then(data => console.log(data));
};
