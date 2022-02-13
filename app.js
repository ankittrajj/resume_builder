// #adding new work experience field dynamically!!
addNewExField = ()=>{
    let newNode = document.createElement('textarea')
    console.log(newNode)
    newNode.classList.add('form-control')
    newNode.classList.add('wefield')
    newNode.classList.add('mt-2')
    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter the qualification')

    let addbtnobj = document.getElementById('workExpAddButton')
    let workexpobj = document.getElementById('workExperience')
    workexpobj.insertBefore(newNode,addbtnobj)


}