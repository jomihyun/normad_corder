const h1 = document.querySelector("h1");

/*

// className를 사용하지 않고, 클래스를 기존꺼에서 추가하는 방법 
function handleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){  //.classList.contains() 클래스를 포함하고 있는지 확인한다.
        h1.classList.remove(clickedClass); // true이면  제거 .remove(clickedCLass) 한다.
    }else{
        h1.classList.add(clickedClass);
    }
}

*/

// 위 코드를 아래와 같이 간단하게 toggle 사용하여 작성 가능
function handleClick(){
   h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleClick);