// Api
const accessKey="r1aTV5CGKJE5YEF41nF2xo9HqZX6Y2ZcYOWN7g5xscU";

// Variables 
const formElement=document.querySelector(".image-form");
const searchInput= document.getElementById("search-input");
const search=document.querySelector(".search-button");
const imagesSec=document.querySelector(".images");
const imageConatiner=document.querySelector(".image-sec");
const showMore=document.querySelector(".more-btn");
const showMoreBtn=document.getElementById("more");
let inputdata="";
let page=1;


// search Image function 
async function searchImages(){

    inputdata=searchInput.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessKey}`;

    const response= await fetch(url);
    const data=await response.json();

    const result=data.results;

    if(page===1){
        imageConatiner.innerHTML="";
    }

    if(inputdata==""){
        alert("Please enter a keyword to continue...");
        searchInput.value="Enter any keyword....";
        return;
    }

    result.map((results)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add("images");
        

        const image=document.createElement("img");
        image.src=results.urls.small;
 
        
        
        const imageLink=document.createElement('a');
        imageLink.href=results.links.html;
        imageLink.target="_blank";
        imageLink.textContent=results.alt_description;
       

        imageConatiner.appendChild(imageWrapper);
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink); 

    });

    page++;
    if(page>1){
        showMore.style.display="block";
    }
}


// calling function
formElement.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
});

showMoreBtn.addEventListener("click",(e)=>{
     searchImages();
});

search.addEventListener('click',(e)=>{
    searchImages();
});

 