// localStorage.setItem('name','Dipak')
// localStorage.getItem("name")
// localStorage.removeItem("name")
// localStorage.clear()

// console.log("Getting the Value from Local Storage...",localStorage.getItem('name'));

async function setIteamInLocalStorage(key,value){
localStorage.setItem(key,value)
}

function getIteamInLocalStorage(key){
localStorage.getItem(key)
}

setIteamInLocalStorage('name','Dipak')

console.log(getIteamInLocalStorage('name'));

//cookies

document.cookie = "name=Dipak Vidani;expires=Thu, 18 Jul 2025 12:00:00 UTC; path=/";
