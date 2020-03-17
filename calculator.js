function calculate(){
    //check
    let validGrade=0;
    let validWeight=0;
    for(let i=1;i<table.rows.length;i++){
        if(!isNaN(parseInt(table.rows[i].cells[1].children[0].value))&&!isNaN(parseInt(table.rows[i].cells[2].children[0].value))){
        validWeight+=parseInt(table.rows[i].cells[2].children[0].value);
        }
        //make sure is valid input
        if(parseInt(table.rows[i].cells[1].children[0].value)>100){
            alert("Grade assessment percentage should be less than 100% !!!")
            validGrade=101;
        }
        if(parseInt(table.rows[i].cells[1].children[0].value)<0){
            alert("Grade assessment percentage should be more than 0% !!!")
            validGrade=101;
        }
        //make sure is valid input
        if(parseInt(table.rows[i].cells[2].children[0].value)>100){
            alert("Weight assessment percentage should be less than 100% !!!")
        }
        if(parseInt(table.rows[i].cells[2].children[0].value)<0){
            alert("Weight assessment percentage should be more than 0% !!!")
        }
    }
    if(validWeight>100){
        alert("Weight percentage can not be more than 100%!!!")
    }
    if( validWeight < 0){
        alert("Weight percentage can not less than 0% !!!")
    }
    //calculation
    if(validGrade<=100 && validWeight<=100 && validWeight>=0){
    const table=document.getElementById("table");
    let finalGrade=0;
    for(let i=1;i<table.rows.length;i++){
        if(!isNaN(parseInt(table.rows[i].cells[1].children[0].value))&&!isNaN(parseInt(table.rows[i].cells[2].children[0].value))){
        finalGrade+=(parseInt(table.rows[i].cells[1].children[0].value)*(parseInt(table.rows[i].cells[2].children[0].value)*0.01));
        }
        if(parseInt(table.rows[i].cells[1].children[0].value)>100){
            alert("Grade should be less than 100 or greater than 0!!!")
        }
    }
    let letterGrade="";
    if(finalGrade>=93){
        letterGrade="A";
    }
    else if(finalGrade>=90 && finalGrade<=92.9){
        letterGrade="A-"
    }
    else if(finalGrade>=87 && finalGrade<=89.9){
        letterGrade="B+"
    }
    else if(finalGrade>=83 && finalGrade<=86.9){
        letterGrade="B"
    }
    else if(finalGrade>=80 && finalGrade<=82.9){
        letterGrade="B-"
    }
    else if(finalGrade>=77 && finalGrade<=79.9){
        letterGrade="C+"
    }
    else if(finalGrade>=73 && finalGrade<=76.9){
        letterGrade="C"
    }
    else if(finalGrade>=70 && finalGrade<=72.9){
        letterGrade="C-"
    }
    else if(finalGrade>=67 && finalGrade<=69.9){
        letterGrade="D+"
    }
    else if(finalGrade>=65 && finalGrade<=66.9){
        letterGrade="D"
    }
    else{
        letterGrade="F"
    }
    //text color
    if(letterGrade==="A" || letterGrade==="A-"){
        if ( document.getElementById("letterGrade").classList.contains('text-warning')){
            document.getElementById("letterGrade").classList.remove("text-warning")
            document.getElementById("PercentGrade").classList.remove("text-warning")
        }
        if ( document.getElementById("letterGrade").classList.contains('text-danger')){
            document.getElementById("letterGrade").classList.remove("text-danger")
            document.getElementById("PercentGrade").classList.remove("text-danger")
        }
        document.getElementById("letterGrade").classList.add("text-success")
        document.getElementById("PercentGrade").classList.add("text-success")
    }
    else if(letterGrade==="B+" || letterGrade==="B-"||letterGrade==="B"){
        if ( document.getElementById("letterGrade").classList.contains('text-success')){
            document.getElementById("letterGrade").classList.remove("text-success")
            document.getElementById("PercentGrade").classList.remove("text-success")
        }
        if ( document.getElementById("letterGrade").classList.contains('text-danger')){
            document.getElementById("letterGrade").classList.remove("text-danger")
            document.getElementById("PercentGrade").classList.remove("text-danger")
        }
        document.getElementById("letterGrade").classList.add("text-warning")
        document.getElementById("PercentGrade").classList.add("text-warning")
    }
    else{
        if ( document.getElementById("letterGrade").classList.contains('text-success')){
            document.getElementById("letterGrade").classList.remove("text-success")
            document.getElementById("PercentGrade").classList.remove("text-success")
        }
        if ( document.getElementById("letterGrade").classList.contains('text-warning')){
            document.getElementById("letterGrade").classList.remove("text-warning")
            document.getElementById("PercentGrade").classList.remove("text-warning")
        }
        document.getElementById("letterGrade").classList.add("text-danger")
        document.getElementById("PercentGrade").classList.add("text-danger")
    }
    //print text
    document.getElementById("letterGrade").innerHTML="In this course you score an: "+ letterGrade;
    document.getElementById("PercentGrade").innerHTML="Your percent grade are: "+ finalGrade + "%";
    }
}
function cloneAssessment(){//will clone row 
    let table=document.getElementById("table1");    
    let c=table.cloneNode(true);
    //get rid of input value
    let inputValue = c.getElementsByTagName("input");
    for (let i=0; i<inputValue.length; i++){
        inputValue[i].value='';             
    }
    document.getElementById("table").appendChild(c);
}