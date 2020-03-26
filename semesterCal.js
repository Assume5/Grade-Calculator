function calculate(){
    //calculation
    const table=document.getElementById("table");
    let finalGrade=0;
    let TotalCredit=0;
    var allDropdown =  document.getElementsByTagName("select");
    let convertLetter=[isNaN];
    for(var item in allDropdown ){
        if(allDropdown[item].value==="A"){
            convertLetter.push(4.0)
        }
        else if(allDropdown[item].value==="A-"){
            convertLetter.push(3.7)
        }
        else if(allDropdown[item].value==="B+"){
            convertLetter.push(3.3)
        }
        else if(allDropdown[item].value==="B"){
            convertLetter.push(3.0)
        }
        else if(allDropdown[item].value==="B-"){
            convertLetter.push(2.7)
        }
        else if(allDropdown[item].value==="C+"){
            convertLetter.push(2.3)
        }
        else if(allDropdown[item].value==="C"){
            convertLetter.push(2.0)
        }
        else if(allDropdown[item].value==="C-"){
            convertLetter.push(1.7)
        }
        else if(allDropdown[item].value==="D+"){
            convertLetter.push(1.3)
        }
        else if(allDropdown[item].value==="D"){
            convertLetter.push(1)
        }
        else if(allDropdown[item].value==="F"){
            convertLetter.push(0)
        }
      }
      for(let i=1;i<table.rows.length;i++){
        if(!isNaN(parseInt(table.rows[i].cells[2].children[0].value))){
        finalGrade+=(convertLetter[i]*parseInt(table.rows[i].cells[2].children[0].value))
        TotalCredit+=parseInt(table.rows[i].cells[2].children[0].value);
       }    
   }
    finalGrade=(finalGrade/TotalCredit).toFixed(2)
    let letterGrade="";
    if(finalGrade>=4.0){
        letterGrade="A";
    }
    else if(finalGrade>=3.70 && finalGrade<=3.99){
        letterGrade="A-"
    }
    else if(finalGrade>=3.30 && finalGrade<=3.69){
        letterGrade="B+"
    }
    else if(finalGrade>=3.0 && finalGrade<=3.29){
        letterGrade="B"
    }
    else if(finalGrade>=2.7 && finalGrade<=2.99){
        letterGrade="B-"
    }
    else if(finalGrade>=2.3 && finalGrade<=2.69){
        letterGrade="C+"
    }
    else if(finalGrade>=2.0 && finalGrade<=2.29){
        letterGrade="C"
    }
    else if(finalGrade>=1.70 && finalGrade<=1.99){
        letterGrade="C-"
    }
    else if(finalGrade>=1.3 && finalGrade<=1.69){
        letterGrade="D+"
    }
    else if(finalGrade>=1 && finalGrade<=1.32){
        letterGrade="D"
    }
    else{
        letterGrade="F"
    }
    //text color
    if(letterGrade==="A" || letterGrade==="A-" ||letterGrade==="B+" ||letterGrade==="B" ){
        if ( document.getElementById("letterGrade").classList.contains('text-warning')){
            document.getElementById("PercentGrade").classList.remove("text-warning")
        }
        if ( document.getElementById("letterGrade").classList.contains('text-danger')){
            document.getElementById("PercentGrade").classList.remove("text-danger")
        }
        document.getElementById("PercentGrade").classList.add("text-success")
    }
    else if(letterGrade==="B-"){
        if ( document.getElementById("letterGrade").classList.contains('text-success')){
            document.getElementById("PercentGrade").classList.remove("text-success")
        }
        if ( document.getElementById("letterGrade").classList.contains('text-danger')){
            document.getElementById("PercentGrade").classList.remove("text-danger")
        }
        document.getElementById("PercentGrade").classList.add("text-warning")
    }
    else{
        if ( document.getElementById("letterGrade").classList.contains('text-success')){
            document.getElementById("PercentGrade").classList.remove("text-success")
        }
        if ( document.getElementById("letterGrade").classList.contains('text-warning')){
            document.getElementById("PercentGrade").classList.remove("text-warning")
        }
        document.getElementById("PercentGrade").classList.add("text-danger")
    }
    //print text
    document.getElementById("PercentGrade").innerHTML="You GPA in this semester is: "+ finalGrade;
    }
function cloneCourse(){//will clone row 
    let table=document.getElementById("table1");    
    let c=table.cloneNode(true);
    //get rid of input value
    let inputValue = c.getElementsByTagName("input");
    for (let i=0; i<inputValue.length; i++){
        inputValue[i].value='';             
    }
    document.getElementById("table").appendChild(c);
}