function sendPost() {
  const data =
    document.getElementById("name").value +
    ";" +
    document.getElementById("age").value +
    ";" +
    document.getElementById("phone").value +
    ";" +
    document.getElementById("email").value;
  console.log(data);
  navigator.sendBeacon("http:localhost:4001/savedetails/" + data);
  console.log(data);
}
