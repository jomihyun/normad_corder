// const h1 = document.getElementsByTagName("h1");
// const h1 = document.getElementsByClassName("hello");
// const h1 = document.getElementsById("hi");
// console.dir(h1) 


const h1 = document.querySelector(".hello");

function handleEventClick(){
    console.log("clicked hi~~!");
    h1.style.color = "red";
}

function handleMouseEnter(){
    h1.innerText = "Mouser is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouser is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "beige";
}

function handleWindowCopy(){
    alert("copy No ~");
}

function handleWindowOffline(){
    alert("offline WIFI");
}

function handleWindowOnline(){
    alert("online YAP");
}

// 어떤 이벤트(click 등)를 listen 하고 싶은지 명시하고 해당 이벤트를 했을때 어떤 함수를 실행 할지도 정한다.
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
h1.addEventListener("click", handleEventClick); 

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// 아래처럼 간다하게 쓸 수 있음 
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;
// h1.onclick = handleEventClick;
// 같은 이벤트지만 addEventListener를 선호하는 이유는 나중에 removeEventListener를 통해서 이벤트를 제거할 수 있기 때문이다.



