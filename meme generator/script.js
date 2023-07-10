const generatememe=document.querySelector(".meme-generator .generate");

const memeimg=document.querySelector(".meme-generator img");
const memetitle=document.querySelector(".meme-generator .memetitle");

const updatedetails=(url,title) =>{
    memeimg.setAttribute("src",url);
    memetitle.innerHTML=title;

};


const generatememefunc = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) =>{
        updatedetails(data.url,data.title);
    });
};


generatememe.addEventListener("click",generatememefunc);
generatememefunc();