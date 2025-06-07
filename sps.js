const photos=document.querySelectorAll(".photo")
///all div  of class ".photo" selected

let msg=document.querySelector(".msg")

let whowon=document.querySelector(".whowon")

let yrsr=document.querySelector("#yrsr")  //p selected

let crsr=document.querySelector("#crsr")  //p selected

let ys=0;
let cs=0;

photos.forEach((i)=>
{
    i.addEventListener("click",()=>     //i is div 
    {
        const getid=i.getAttribute("id")
        // console.log("choice was clicked",getid)

        fight(getid)    //getid=stone/paper/scissors
    })
}) 

const fight=(getid)=>{

    const compchoice=jaolao()

    msg.innerText=`User picks ${getid}.
     Comp picks ${compchoice}.`

     if(draw(getid,compchoice))
     {
        whowon.innerText="It's a draw😐"
        whowon.style.backgroundColor="#808080"
        // whowon.style.border="2px solid black"
     }

     else if(getid==="stone" && compchoice==="paper")
     {
        whowon.innerText="comp win😒"
        whowon.style.backgroundColor="#FF474C"
        whowon.style.border="2px solid black"
        cs++
        crsr.innerText=cs

     }

     else if(compchoice==="stone" && getid==="paper")
     {
        whowon.innerText="You win😎"
        whowon.style.backgroundColor="#90EE90"
        whowon.style.border="2px solid black"
        ys++
        yrsr.innerText=ys
     }

     else if(compchoice==="paper" && getid==="scissors")
     {
        whowon.innerText="You win😎"
        whowon.style.backgroundColor="#90EE90"
        whowon.style.border="2px solid black"
        ys++
        yrsr.innerText=ys
     }

     else if(getid==="paper" && compchoice==="scissors")
     {
        whowon.innerText="comp win😒"
        whowon.style.backgroundColor="#FF474C"
        whowon.style.border="2px solid black"
        cs++
        crsr.innerText=cs
     }

      else if(getid==="scissors" && compchoice==="stone")
     {
        whowon.innerText="comp win😒"
        whowon.style.backgroundColor="#FF474C"
        whowon.style.border="2px solid black"
        cs++
        crsr.innerText=cs
     }
     

     else if(compchoice==="scissors" && getid==="stone")
     {
        whowon.innerText="You win😎"
        whowon.style.backgroundColor="#90EE90"
        whowon.style.border="2px solid black"
        ys++
        yrsr.innerText=ys
     }
     


}

const jaolao=()=>{

      const arrr=["stone","paper","scissors"]

      const select=Math.floor((Math.random())*3)  
      //Math.floor((Math.random())*3) means '0' to '2' range
      //(Math.random())*3 means math.random() gives no. 0.something,multiplying by 3 convert it into no. between 0 to 2.something.

      return arrr[select]
}

const draw=(getid,compchoice)=>
{
    if(getid===compchoice)
    {
        return true
    }
    else{
        return false
    }
}


const reset=document.querySelector(".reset")

reset.addEventListener("click",()=>{
    ys=0
    cs=0
    crsr.innerText=0
    yrsr.innerText=0
    msg.innerText="Play your move"
    whowon.innerText="Lets see who wins"
    whowon.style.backgroundColor="#66a7ca"
    
})
