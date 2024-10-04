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
    console.log(element.category);
    categoriesContainer.append(categoriesButton)
  }
);
  
  

}
loadCatagories()