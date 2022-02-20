// #adding new work experience field dynamically!!
// arrow function
addNewExField = ()=>{
    let newNode = document.createElement('textarea')
    console.log(newNode)
    newNode.classList.add('form-control')
    newNode.classList.add('wefield')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','show more experience')

    let addbtnobj = document.getElementById('workExpAddButton')
    let workexpobj = document.getElementById('workExperience')
    workexpobj.insertBefore(newNode,addbtnobj)
}
// adding new qualification field dynamically!!
// arrow function

addNewQualField =()=>{
    let newNode = document.createElement('textarea')
    console.log(newNode)
    newNode.classList.add('form-control')
    newNode.classList.add('qualfield')
    newNode.classList.add('mt-3')
    newNode.setAttribute('placeholder','Enter more Qualification')

    let qualObj = document.getElementById('qualfield')
    let qualaddObj = document.getElementById('qualificationaddBtn')
    qualObj.insertBefore(newNode,qualaddObj)
}

// generate CV button 
// arrow function
generateCv = ()=>{
    let nameFieldObj = document.getElementById('namefield').value;
    console.log(nameFieldObj)
    let nameTemp = document.getElementById('nameTemp')
    nameTemp.innerHTML=nameFieldObj;

    // for second name field in cv template
    document.getElementById('nameTemp2').innerHTML=nameFieldObj

    // contact field to contact template
    let contactfieldObj = document.getElementById('contactfield').value
    document.getElementById('numTemp').innerHTML=contactfieldObj

    // address field to address template
    let addressfieldObj = document.getElementById("addressfield").value
    document.getElementById('addressTemp').innerHTML=addressfieldObj

    // links field
    // github link
    let githublinkObj = document.getElementById('githubfield').value
    document.getElementById('githubTemp').innerHTML=githublinkObj

    // linkedin link
    let linkedinlinkObj = document.getElementById('linkedinfield').value
    document.getElementById('linkedinTemp').innerText=linkedinlinkObj

    // details
    // objectives
    document.getElementById('objectiveTemp').innerHTML=document.getElementById('objectivefield').value

    // work experience

    let workexpObj = document.getElementsByClassName('wefield')

    // here loop is used to iterate more than one experience
    // if someone is having more experience and he want to add more exp then loop is
    // used to iterate the exp template to generate cv 

    let str =""
    for(let i of workexpObj){
        str=str+`<li> ${i.value}</li>`
    }
    document.getElementById('weTemp ').innerHTML=str

    // same logic is defined with academic qualifications.
    // Academic Qualification

    let acadqualObj = document.getElementsByClassName('qualfield')
    // straq---> string academic qualification
    // I have to make this because str is already declared.
    let straq=''
    for(let i of acadqualObj){
        straq = straq+`<li> ${i.value}</li>`
    }
    document.getElementById('aqualTemp').innerHTML=straq

    // hide the template 
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}

// print cv button function
// normal function


function printCv(){
    window.print()
}

// print cv into pdf form
function downloadCv(){
let doc = new jsPDF();
doc.text(document.getElementById('namefield').value,10,10)
doc.text(document.getElementById('contactfield').value,25,25)
doc.text(document.getElementById(addressfield).value)

// save the file
doc.save("output.pdf")
}
