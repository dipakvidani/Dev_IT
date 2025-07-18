let parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {
    // console.log(e);   
    // console.log(e.target);
    // console.log(e.target.id);
    let idOfClickedDiv=e.target.id;
   
    console.log(`Div With ID :${idOfClickedDiv} is Clicked!!`);
    
});
