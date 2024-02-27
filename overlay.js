
function pupOverlay(){
let btn = document.querySelector(".overlay")

   if(btn.innerText === "Subscribe"){

      btn.innerHTML = "<h4>Subscribed</h4>"
      btn.classList.add("is-overlay")

      
   }else{
     
       btn.innerHTML = "<h4>Subscribe</h4>"
       btn.innerHTML.remove("is-overlay")
   } 


}



function pupUp(){

   let overlayPup = document.querySelector(".pup-img")

    if(!overlayPup){

      overlayPup.classList.remove("pup-up")

     document.getElementById("js-pub").style.display = "block"

    }else{

      overlayPup.classList.add("pup-up")

      document.getElementById("js-pup").style.display = "none"
    }
}

// function show(){

//    document.getElementById("js-pup").style.display = "none"
// }

// function pupUp(){

//  

// }
 