console.log("hii");


let post = document.querySelectorAll(".post");

post.forEach((pst)=>{
    console.log("hii");
    pst.addEventListener("mouseover",()=>{
        pst.style.backgroundColor = "#1a1a1a"
        pst.style.borderColor = "#1a1a1a"
    })
    pst.addEventListener("mouseout",()=>{
        pst.style.backgroundColor = "#1e1e1e"
        pst.style.borderColor = "rgb(76, 76, 76)"
    })
})