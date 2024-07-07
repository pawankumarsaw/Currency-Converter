const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_XKB4tFGFfYeT71idDohTemUPvbs95DenoCk4X26g"
let dropdowns=document.querySelectorAll(".country-name");
let btn=document.querySelector("button");
let fromCurr=document.querySelector(".from select");
let toCurr=document.querySelector(".to select")
let result=document.querySelector(".result-box");
for(let dropdown of dropdowns){
    for(currcode in countryList){
        let options=document.createElement("option");
        options.innerText=currcode;
        options.value=currcode;
        if(dropdown.name==="from" && currcode==="USD"){
            options.selected="selected";
        }
        if(dropdown.name==="to" && currcode==="INR"){
            options.selected="selected";
        }
        dropdown.append(options);

    }
    dropdown.addEventListener("change", (evnt)=>{
        updateflag(evnt.target);
    });

}
const updateflag= (element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let image=element.parentElement.querySelector("img");
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`
    image.src=newsrc;
}
btn.addEventListener("click",async (evnt)=>{
    evnt.preventDefault();
    let input= document.querySelector("input");
    let amount = input.value;
    // console.log(fromCurr.value,toCurr.value)
    let respons= await fetch(BASE_URL);
   let obj= await respons.json();
   let fromvalue= obj.data[fromCurr.value].value;
    let tovalue= obj.data[toCurr.value].value;
    let usdvalue = amount/fromvalue;
    let resultamnt=usdvalue*tovalue;
    result.innerText= `${amount}${fromCurr.value} = ${resultamnt}${toCurr.value}`;

    
})