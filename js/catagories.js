//categories loading 
function loadCatagories(){
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then(response => response.json())
      .then(json => displayCatagories(json))
}
function displayCatagories(categories){
  const categoriesArray=categories.categories;
  const categoriesContainer =document.getElementById('catagories-container');
  
  categoriesArray.forEach(element => {
    const categoriesButton=document.createElement('button');
    categoriesButton.classList='btn'
    categoriesButton.innerText=`${element.category}`;
    categoriesContainer.append(categoriesButton)
  }
);
}
//load videos and display the videos
function loadVideos(){
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
  .then(response => response.json())
  .then(videos => displayVideos(videos))
}
function displayVideos(videos){
  const videoArray=videos.videos;
  const videoContainer=document.getElementById('video-container')
  videoArray.forEach(element => {
    console.log(element)
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

// {category_id: '1001', video_id: 'aaaa', thumbnail: 'https://i.ibb.co/L1b6xSq/shape.jpg', title: 'Shape of You', authors: Array(1), …}
// authors
// : 
// Array(1)
// 0
// : 
// {profile_picture: 'https://i.ibb.co/D9wWRM6/olivia.jpg', profile_name: 'Olivia Mitchell', verified: ''}
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// category_id
// : 
// "1001"
// description
// : 
// "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others
// : 
// {views: '100K', posted_date: '16278'}
// thumbnail
// : 
// "https://i.ibb.co/L1b6xSq/shape.jpg"
// title
// : 
// "Shape of You"
// video_id
// : 
// "aaaa"
//calling the the function when loading the page
loadCatagories()
loadVideos()