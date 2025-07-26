//debounce function

function debounce(func, delay) {
  let searchId;

  return function (...args) {
    clearTimeout(searchId);
    searchId = setTimeout(() => {
      func.apply(this, args);   //this->window object //args->inputvalue
    }, delay);
  };
}

function serachQuery(query) {
  document.getElementById("debounce_response").innerHTML=`<span class="text-info fw-bold">visulizing debounce search : </span> <span class="text-warning">searching for ${query}</span> `
}

const debounceSearch = debounce(serachQuery, 500);

document.getElementById("textInput").addEventListener("input", (e) => {
  debounceSearch(e.target.value);
});
