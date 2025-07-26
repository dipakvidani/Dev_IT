document.getElementById("btn_gen_ran_Num").addEventListener("click",()=>{
    let RandomNumber_Btw_1_To_100=Math.floor(Math.random()*100)+1;
    let random_number_print=document.getElementById("random_number_print");
    console.log(RandomNumber_Btw_1_To_100);
    

    random_number_print.innerText=RandomNumber_Btw_1_To_100;
})