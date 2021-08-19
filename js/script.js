window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  //отправка данных
  //1
  //XHR
  // function request(event) {
  //   event.preventDefault();

  //   let formData = new FormData(form);
  //   formData.append("id", Math.random());
  //   let obj = {};
  //   formData.forEach((value, key) => {obj[key] = value});
  //   let json = JSON.stringify(obj);

  //   const request = new XMLHttpRequest();

  //   request.open("POST", "http://localhost:3000/people");
  //   request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  //   request.send(json);
  //   request.addEventListener("load", function() {
  //     if (request.readyState === 4 && request.status === 200) {
  //       const response = JSON.parse(request.response);
  //       console.log(response)
  //     } else {
  //       console.error("Что-то пошло не так...")
  //     }
  //   });
  // }

  //2
  // function request(event) {
  //   event.preventDefault();

  //   let formData = new FormData(form);
  //   formData.append("id", Math.random());
  //   let obj = {};
  //   formData.forEach((value, key) => {
  //     obj[key] = value
  //   });
  //   let json = JSON.stringify(obj)

  //   // fetch
  //   getResource("http://localhost:3000/people", json)
  //     .then(response => console.log(response))
  //     .catch(error => console.error(error));

  //   //axios
    // axios.post("http://localhost:3000/people", json)
    // .then(data => console.log(data.data))
  // }

  //Fetch
  // async function getResource(url, data) {
  //   const response = await fetch(`${url}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     },
  //     body: data
  //   })

  //   if (!response.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
  //   }

  //   return await response.json();
  // }

  //3
  //XHR
  // function request(event) {
  //   event.preventDefault();

  // let formData = new FormData(form);
  // formData.append("id", Math.random());

  //   const request = new XMLHttpRequest();
  //   request.open("POST", "./api.php");
  //   request.send(formData);
  //   request.addEventListener("load", function() {
  //     if (request.readyState === 4 && request.status === 200) {
  //       console.log(request.response)
  //     } else {
  //       console.error("Что-то пошло не так...")
  //     }
  //   });
  // }

  //4
  function request(event) {
    event.preventDefault();

    let formData = new FormData(form);

    // fetch
    // getResource("./api.php", formData)
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));

    //axios
    axios({
      method: "POST",
      url: "./api.php",
      data: formData,
      headers: {"content-type": "multipart/form-data"}
    })
    .then(data => console.log(data.data))
  }

  //Fetch
  // async function getResource(url, data) {
  //   const response = await fetch(url, {
  //     method: "POST",
  //     body: data
  //   })

  //   if (!response.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
  //   }

  //   return await response.text();
  // }

  //получение данных
  //1
  // function request() {
  //   const request = new XMLHttpRequest();

  //   request.open("GET", "http://localhost:3000/people");
  //   request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  //   request.send();
  //   request.addEventListener("load", function() {
  //     if (request.readyState === 4 && request.status === 200) {
  //       const response = JSON.parse(request.response);
  //       createCards(response);        
  //     } else {
  //       console.error("Что-то пошло не так...")
  //     }
  //   });

  //   document.querySelector("button").remove();
  // }

  // 2
  // fetch + axios
  // function request() {
  //   getResource("http://localhost:3000/people", {method: "GET"})
  //     .then(response => createCards(response.data))
  //     .catch(error => console.error(error));

  //   document.querySelector("button").remove();
  // }

  // fetch
  // async function getResource(url) {
  //   const response = await fetch(url)

  //   if (!response.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
  //   }

  //   return await response.json();
  // }
  //

  //axios
  // async function getResource(url) {
  //   const response = await axios(url)

  //   if (response.status !== 200) {
  //     throw new Error(`Could not fetch ${url}, status: ${response.status}`)
  //   }

  //   return response;
  // }

  form.addEventListener("submit", (event) => request(event), {"once": true});
});