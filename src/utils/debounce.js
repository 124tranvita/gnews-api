function debounce(fn, delay) {
  let id;
  //console.log(`id at immediate: ${id}`);
  return (...args) => {
    //console.log(`Previous id: ${id}`);
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default debounce;
