//categories loading 
function loadCatagories(){
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then(response => response.json())
      .then(json => displayCatagories(json))
}

//load categories wise video then the button is clicked
function loadCategoriesVideo(category_id){
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${category_id}`)
  .then(response => response.json())
  .then(data => displayVideos(data.category))
}

//display the category wise button
function displayCatagories(categories){
  const categoriesArray=categories.categories;
  const categoriesContainer =document.getElementById('catagories-container');
  
  categoriesArray.forEach(element => {
    const categoriesButton=document.createElement('button');
    categoriesButton.classList='btn';
    categoriesButton.onclick=()=>{
      loadCategoriesVideo(element.category_id);
    }
    categoriesButton.innerText=`${element.category}`;
    categoriesContainer.append(categoriesButton)
  }
);
}
//load videos and display the videos
function loadVideos(){
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(response => response.json())
  .then(videos => displayVideos(videos.videos))
}
function displayVideos(videos){
  console.log(videos)
  const videoContainer=document.getElementById('video-container');
  videoContainer.innerHTML=""
  videos.forEach(element => {
    const videoCard=document.createElement('div');
    videoCard.classList='card card-compact mx-auto'
    videoCard.innerHTML=` 
    <figure class="w-[230px] h-[120px]">
        <img class="object-cover w-full h-full" src=${element.thumbnail} alt="Shoes" />
      </figure>
      <div class="flex gap-3 py-4">
      <div>
      <img class="w-[25px] h-[25px] rounded-full object-cover" src=${element.authors[0].profile_picture}/></div>
      <div>
        <h2 class="font-bold">${element.title}</h2>
      <div class="flex gap-3">
        <p class=" text-sm text-slate-500">${element.authors[0].profile_name}</p>
        ${element.authors[0].verified===true ?`<img class="w-[15px]" src=" https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" />`:'' }
        </div>
        <p class=" text-sm text-slate-500">${element.others.views}</p>
      </div>
      </div>
      `
      videoContainer.appendChild(videoCard)
  });
}

loadCatagories()
loadVideos()