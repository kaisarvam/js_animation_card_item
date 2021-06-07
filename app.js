//Movement Animations
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//more items
const title = document.querySelector(".info h1");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove",(e)=>{
    
    let xAxis = (window.innerWidth /2 - e.pageX )/25;
    let yAxis = (window.innerHeight /2 - e.pageY) /25;
    console.log(xAxis,yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter",(e)=>{
    card.style.transition='none';
    //popout
    title.style.transform ="translateZ(150px)";
    sneaker.style.width="30rem";
    sneaker.style.transform ="translateZ(200px) rotateZ(-20deg) translateX(100px)";
    purchase.style.transform ="translateZ(100px)";
    description.style.transform ="translateZ(80px)";
    sizes.style.transform ="translateZ(100px)";
    
})


//Animate out
container.addEventListener("mouseleave",(e)=>{
    card.style.transition='all 0.5s ease';
    card.style.transform=`rotate(0deg) rotate(0deg)`;
      //popback
      title.style.transform ="translateZ(0px)";
      sneaker.style.width="20rem";
      sneaker.style.transform ="translateZ(0px)";
      purchase.style.transform ="translateZ(0px)";
    description.style.transform ="translateZ(0px)";
    sizes.style.transform ="translateZ(0px)";

});