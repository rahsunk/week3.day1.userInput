titleInp=document.getElementById("title_input")
mainTitle=document.getElementById("main_title")
submit=document.getElementById("submit_button")
nounInp=document.getElementById("noun")
verbInp=document.getElementById("verb")
adjInp=document.getElementById("adjective")


titleInp.onkeyup=function(){
    mainTitle.innerHTML=titleInp.value
}

submit.onclick=function(event){
    let titleVal=titleInp.value
    let nounVal=nounInp.value
    let verbVal=verbInp.value
    let adjVal=adjInp.value
    if(titleVal==""||nounVal==""||verbVal==""||adjVal==""){
        alert("Please fill in all fields")
    }
    else{
        event.preventDefault()
        let result = "Last night I ate a "+nounVal+", and today I just had to "+verbVal+". What a "+adjVal+" day!"
        let formContainer=document.querySelector(".form_container")
        formContainer.style.display="none"
        let resultDisplay=document.getElementById("story_result")
        resultDisplay.innerHTML=result
    }
}