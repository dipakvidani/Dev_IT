// > Make a form with a checkbox group for hobbies using getElementsByName. Show selected hobbies on submit. 

    function handleSubmit(e){
        e.preventDefault();

        let hobbies=document.getElementsByName("hobbies");
        let selectedHobbies=[];
        
        for (const hobby of hobbies) {
           if(hobby.checked){
            selectedHobbies.push(hobby.value);
           }
        }

        alert("Selected Hobbies Are :"+ ( selectedHobbies.length > 0 ? (selectedHobbies.join("|")) : "None") )

    }
