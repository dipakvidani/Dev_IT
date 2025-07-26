function copyToClipboard() {
  let userAddress = document.getElementById("userAddress");
  let copyStatusSpan=document.getElementById("copyStatusSpan")

  userAddress.select();   //select the whole things from input

  console.log(navigator);
  console.log(navigator.clipboard);
  
  console.log(navigator.clipboard.writeText(userAddress.value));

  navigator.clipboard.writeText(userAddress.value.trim())       //write value into clip board
  .then(() => {
    copyStatusSpan.innerText =
      "Address copied to clipboard!";
      copyStatusSpan.classList="text-success fw-bold";
  })
  .catch((err)=>{
      copyStatusSpan.innerText =
      "failed to copy To clipboard!";
      console.log("Problem During the Coping from text box :" , err);
      
      copyStatusSpan.classList="text-danger fw-bold";
  })
}
