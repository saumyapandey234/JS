let a=document.querySelector("#toggle");
let b=document.querySelector("body");
let currMode="light";//dark
a.addEventListener("click",() => {
    // console.log("You are trying to change the mode");
    if(currMode === "light"){
        currMode="dark";
        // document.querySelector("body").style.backgroundColor="black";
        //OR
        b.classList.add("dark");
        b.classList.remove("light");

    }else{
        currMode="light";
        // document.querySelector("body").style.backgroundColor="white";
        //or
        b.classList.add("light");
        b.classList.remove("dark");

    }
    console.log(currMode);
});