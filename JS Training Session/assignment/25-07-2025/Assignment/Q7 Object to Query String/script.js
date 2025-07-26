function convertToQueryString() {
  let inputObject = document.getElementById("inputObject");
  let inputObject_Value;
  try {
    inputObject_Value = JSON.parse(inputObject.value);
  } catch (err) {
    document.getElementById("queryStringSpan").innerText = "Invalid JSON!";
    return;
  }
  let queryStringSpan = document.getElementById("queryStringSpan");

  let objectToArray = Object.entries(inputObject_Value);

  console.log(objectToArray);
  const stringQuery = objectToArray.reduce((prev, [key, value], idx) => {
    const pairOfKeyvalue = `${key}=${value}`;
    return idx === 0 ? pairOfKeyvalue : `${prev}&${pairOfKeyvalue}`;
  }, "");

  queryStringSpan.innerText = stringQuery;
}
