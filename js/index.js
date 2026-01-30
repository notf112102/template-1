// start scroll-div
scroll_div=document.getElementsByClassName("scroll-div")[0]; 
let bd_height=document.documentElement.scrollHeight; 
let client=document.documentElement.clientHeight; 
let height=bd_height - client; 
window.addEventListener("scroll", () => {
    let top=document.documentElement.scrollTop; 
    top=(top/height)*100; 
    scroll_div.style.width=`${top}%`; 
})
// end scroll div
// start btn-top
btn_top=document.getElementsByClassName("btn-top")[0]; 
window.addEventListener("scroll", () => {
    let top=document.documentElement.scrollTop; 
    if(top >= 600) btn_top.style.display="flex";
    else btn_top.style.display="none";
})
btn_top.addEventListener("click", () => {
    window.scrollTo(0, 0); 
})
// end btn-top
// start active page
// start features
let features=document.getElementsByClassName("features")[0]; 
let feature_content=document.querySelector(".features .container");
let services=document.getElementsByClassName("services")[0]; 
let service_content=document.querySelectorAll(".services .container .box .content"); 
let service_image=document.querySelector(".services .container .box .image"); 
let portfolio=document.getElementsByClassName("portfolio")[0]; 
let portfolio_content=document.querySelector(".portfolio .container");
let about=document.getElementsByClassName("about")[0];
let about_image=document.querySelector(".about .container .box .image"); 
let about_box=document.querySelectorAll(".about .container .box")[1]; 
let contact=document.getElementsByClassName("contact");
// start header animation
let header_h1=document.querySelectorAll(".special-header h1");
let header_p=document.querySelectorAll(".special-header p");
function contClass(e, add, rm){
    e.classList.remove(rm); 
    e.classList.add(add); 
}
window.addEventListener("scroll", () => {
    let top=document.documentElement.scrollTop;
    if(top >= features.offsetTop - 200 && top <= services.offsetTop){
        contClass(feature_content, "container-active", "container-noactive"); 
    } else {
        contClass(feature_content, "container-noactive", "container-active"); 
    } 
})
// end features
// start services
window.addEventListener("scroll", () => {
    let top=document.documentElement.scrollTop; 
    if(top >= services.offsetTop - 200 && top <= portfolio.offsetTop){
        service_content.forEach(e => {  
            contClass(e, "content-active", "content-noactive"); 
        });
        contClass(service_image, "image-active", "image-noactive"); 
        contClass(header_h1[0], "content-active", "content-noactive");
        contClass(header_p[0], "image-active", "image-noactive"); 

    } else {
        service_content.forEach(e => {
            contClass(e, "content-noactive", "content-active"); 
        });
        contClass(service_image, "image-noactive", "image-active"); 
        contClass(header_h1[0], "content-noactive", "content-active"); 
        contClass(header_p[0], "image-noactive", "image-active"); 
    }
})
// end services
// start portfolio
window.addEventListener("scroll", () => {
    let top=document.documentElement.scrollTop; 
    if(top >= portfolio.offsetTop - 200 && top <= about.offsetTop){
        contClass(portfolio_content, "container-active", "container-noactive");
        contClass(header_h1[1], "content-active", "content-noactive");
        contClass(header_p[1], "image-active", "image-noactive");
    } else {
        portfolio_content.classList.remove("container-active"); 
        portfolio_content.classList.add("container-noactive"); 
        contClass(portfolio_content, "container-noactive", "container-active"); 
        contClass(header_h1[1], "content-noactive", "content-active");
        contClass(header_p[1], "image-noactive", "image-active");
    }
})
// end portfolio
// start about
window.addEventListener("scroll", () => {
    let top=document.documentElement.scrollTop; 
    if(top >= about.offsetTop - 200){
        contClass(about_image, "content-active", "content-noactive"); 
        contClass(about_box, "image-active", "image-noactive"); 
        contClass(header_h1[2], "content-active", "content-noactive");
        contClass(header_p[2], "image-active", "image-noactive");
    } else {
        contClass(about_image, "content-noactive", "content-active"); 
        contClass(about_box, "image-noactive", "image-active"); 
        contClass(header_h1[2], "content-noactive", "content-active");
        contClass(header_p[2], "image-noactive", "image-active");
    }
})
// end about
// end active page