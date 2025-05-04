const Base_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelectorAll("form button")

// for(code in countryList){
//     console.log(code,countryList[code]);
// };

for(let select of dropdowns){
    for(currCode in countryList){
        let newOptions=document.createElement("option");
        newOptions.innerText=currCode;
        newOptions.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOptions.selected="selected";
        }else if(select.name="to" && currCode==="INR"){
            newOptions.selected="selected";
        }
        select.append(newOptions);
    };

    select.addEventListener("change",(evt) =>{
      updateFlag(evt.target);
});
}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc='https://flagsapi.com/${countryCode}/flat/64.png';
    let img = element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="empty" || amtVal<1){
        amtVal=1;
        amount.value="1";
    }
    console.log(amtVal);
})