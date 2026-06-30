//Practicing about APIs Used for resource sharing  between Apps.
const URL = "https://www.googleapis.com/calendar/v3/calendars";

async function getData() {
    try {
        let response = await fetch(URL);
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();
//Another Example.
async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let Data= await response.json();
        console.log(Data);
    } catch (error) {
        console.log(error);
    }
}

getData();
//Use of APIs to Make Request and use of button to Generate repsonse at the WebPage.
let Datapara = document.querySelector("#para");
let getDatabtn = document.querySelector("#btn");

getDatabtn.addEventListener("click", () => {
    setTimeout(getData, 2000);
});

async function getData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        console.log(data);

        Datapara.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.log(error);
    }
}
/*From Above Code i saw the concept of hoisting as all the functions i given the name getData functions Overriding ocuured and the js excuted the last function even i did't call the function in 3rd code*/
//Now from preventing hoisting the code be like 
// Practicing about APIs Used for resource sharing between Apps.
const URL = "https://www.googleapis.com/calendar/v3/calendars";

async function fetchGoogleCalendar() {
    try {
        let response = await fetch(URL);
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchGoogleCalendar();


// Another Example.
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchUsers();


// Use of APIs to Make Request and use of button to Generate response at the WebPage.
let Datapara = document.querySelector("#para");
let getDatabtn = document.querySelector("#btn");

getDatabtn.addEventListener("click", () => {
    setTimeout(displayUsers, 2000);
});

async function displayUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        console.log(data);

        Datapara.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.log(error);
    }
}
/*this will also not excute as i declared same URLs in upper hoisting code if i want to execute upper part should be deleted*/