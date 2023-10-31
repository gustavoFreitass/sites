//switch the light

const board = document.querySelector(".board");
document.querySelector(".switchRegulator").addEventListener("click", e=> {
    if(e.target.innerText == "🌙"){
        e.target.innerText = "☀️";
        board.classList.remove("light")
        board.classList.add("dark")
        document.querySelector("body").style.backgroundColor = "rgb(21, 23, 30)"
        document.querySelector("body").style.color = "White"

    }else{
        e.target.innerText = "🌙"
        board.classList.remove("dark")
        board.classList.add("light");
        document.querySelector("body").style.backgroundColor = "white"
        document.querySelector("body").style.color = "black"
    }
});
selectPage(true);