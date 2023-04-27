const clock = document.querySelector("h2#clock"); 


function getClock() {
    const date = new Date();
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock(); // 처음 시간을 보여주고
setInterval(getClock, 1000); // 1초마다 호출 

  