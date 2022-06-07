
const fetch_data = async () => {
    const response = await fetch('https://api-football-standings.azharimm.site/leagues');
    const payload = await response.json();
    return payload.data
};

const render_data = (data) => {
    const ol = document.createElement("ol");

    for (let team of data) { 
        let li = document.createElement("li"); li.innerHTML = team.name; 
        ol.appendChild(li); 
    }

    const body = document.querySelector("body");
    body.appendChild(ol);
}

const button_func = async () => {
    const data = await fetch_data();
    console.log(data);
    render_data(data);
}

const button = document.querySelector(".button-fetch");
button.addEventListener('click', button_func);
