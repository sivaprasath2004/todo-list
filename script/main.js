let button=document.getElementById('button');
let todolist=document.getElementById('todolistbody');
let input=document.getElementById('textbox');
let darkmode=document.getElementById('Dark');
let about=document.getElementById('about')
let about_checked=document.getElementById('about_checked')
let checker=0
let array=[]
let todo
let i
window.onload=()=>{
    todo=JSON.parse(localStorage.getItem('todolist'))|| []
    if(todo[0]==''){
        console.log('nothing')
    }
    else{
        todo.forEach(i =>{
            addtodolist(i)
            array.push(i)});
    }
}
about.addEventListener('click',()=>{
    if(checker==0){
        about_checked.style.transform="translateY(0%)"
        checker+=1
    }
    else{
        about_checked.style.transform="translateY(-120%)"
        checker=0
    } 
})
darkmode.addEventListener('click',()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains('dark')){
        darkmode.src="images/sun.png"
        darkmode.style.height="30px"
        darkmode.style.width="30px"
    }
    else{
        darkmode.src="images/moon (1).png"
        darkmode.style.height="25px"
        darkmode.style.width="25px"
    }
})
button.addEventListener('click',()=>{
    if(input.value==''){
        document.getElementById('span').innerHTML=`ENTER THE TEXT TO SAVE `;
    }
    else{
        document.getElementById('span').innerHTML='';
        addtodolist(input.value)
        input.value=""
        localStorage.setItem('todolist',JSON.stringify(array))
    }
  
})
function addtodolist(value){
    array.push(input.value)
    let para=document.createElement('p')
    let but=document.createElement('button')
    but.innerText="DELETE";
    para.innerText=value;
    para.style.cursor='pointer';
    todolist.appendChild(para)
    para.appendChild(but)
    input.value=""
    para.addEventListener('click',()=>{
        if(para.style.textDecoration=='line-through'){
        para.style.textDecoration='none'

        }
        else{
            para.style.textDecoration='line-through'
        }
        
    })
    but.addEventListener('click',()=>{
        todolist.removeChild(para)
        removeElement(value)
    })
}
function removeElement(value){
     let num=array.indexOf(value)
     if(num>-1){
     array.splice(num,1)
     }
     localStorage.setItem('todolist',JSON.stringify(array))
}

