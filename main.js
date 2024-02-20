console.log("Hello world")

let FacultyPage=document.getElementById('FacultyPage')
let SubjectPage=document.getElementById('SubjectPage')
let CurrentPage=document.getElementById('CurrentPage')
let GeneratePage=document.getElementById('GeneratePage')

FacultyPage.style.display="block"
SubjectPage.style.display="none"
CurrentPage.style.display="none"
GeneratePage.style.display="none"

function foo(x){
    genBtn.style.color="white"
    genBtn.style.backgroundColor="gray"
    facBtn.style.color="white"
    facBtn.style.backgroundColor="gray"
    subBtn.style.color="white"
    subBtn.style.backgroundColor="gray"
    currBtn.style.color="white"
    currBtn.style.backgroundColor="gray"
    x.style.color="black"
    x.style.backgroundColor="skyblue"
}


const facultyList=document.getElementById("facultyList")
var fac={
    101:{name:"Nikhil Sharma",code:"NS",hours:6},
    102:{name:"Parth Tamaghle",code:"PT",hours:6},
    103:{name:"Munir Siddiqui",code:"MS",hours:5},
    104:{name:"Riya Patil",code:"RP",hours:6},
    105:{name:"Rajveer Singh",code:"RS",hours:5}
}
function getFaculty(){
    const facNode= document.createElement("tr");
    for (var key in fac) {
        if (fac.hasOwnProperty(key)) {
            var s = fac[key];
        const v = document.createElement("tr");
            v.innerHTML = `
            <th scope="row">${key}</th>
            <td>${s.name}</td>
            <td>${s.code}</td>
            <td>${s.hours}</td>
            <td> <button class="btn btn-danger" onclick="deleteSub(${key})">DELETE </button></td>
          `;
            facNode.append(v);
      }
    }
      facultyList.innerHTML=facNode.innerHTML
}

var sub={
    101:{name:"Maths4",code:"M4",hours:6},
    102:{name:"Automata Theory and System Software",code:"ATSS",hours:6},
    103:{name:"Oprating System",code:"OS",hours:7},
    104:{name:"Computer Networks Design",code:"CND",hours:6},
}
const subjectList=document.getElementById("subjectList")

function getSubject(){
    const facNode= document.createElement("tr");
    for (var key in sub) {
        if (sub.hasOwnProperty(key)) {
            var s = sub[key];
        const v = document.createElement("tr");
            v.innerHTML = `
            <th scope="row">${key}</th>
            <td>${s.name}</td>
            <td>${s.code}</td>
            <td>${s.hours}</td>
            <td> <button class="btn btn-danger" onclick="deleteSub(${key})">DELETE </button></td>
          `;
            facNode.append(v);
      }
    }
    subjectList.innerHTML=facNode.innerHTML
}

function getSubData(){
   const x= document.getElementsByClassName("s_data")[0]
   
    const facNode= document.createElement("tbody");
    for (var key in sub) {
        if (sub.hasOwnProperty(key)) {
            var s = sub[key];
        const v = document.createElement("tr");
            v.innerHTML = `
            <th scope="row">${key}</th>
            <td>${s.name}</td>
            <td>${s.code}</td>
            <td>${s.hours}</td>
          `;
            facNode.append(v);
      }
    }
    x.innerHTML=facNode.innerHTML
}
function getFacData(){
    const x= document.getElementsByClassName("f_data")[0]

     const facNode= document.createElement("tbody");
     for (var key in fac) {
        console.log(key)
         if (fac.hasOwnProperty(key)) {
             var s = fac[key];
         const v = document.createElement("tr");
             v.innerHTML = `
             <th scope="row">${key}</th>
             <td>${s.name}</td>
             <td>${s.code}</td>
             <td>${s.hours}</td>
           `;
            facNode.append(v);
       }
     }
     x.innerHTML=facNode.innerHTML
     console.log(facNode)
 }
function getData(){
    
    getSubData()
    getFacData()
}

function deleteSub(index){
    delete sub[index]
    getSubject()
}
function deleteFac(index){
    delete fac[index]
    getFaculty()
}

document.getElementById('s_add').addEventListener('click',addSubject)
document.getElementById('f_add').addEventListener('click',addFaculty)

function addFaculty(){
    const name=document.getElementById('f_name').value
    const id=document.getElementById('f_id').value
    const code=document.getElementById('f_code').value
    const hours=document.getElementById('f_hours').value
    fac.push({id,name,code,hours})
    getFaculty()
}
function addSubject(){
    const name=document.getElementById('s_name').value
    const id=document.getElementById('s_id').value
    const code=document.getElementById('s_code').value
    const hours=document.getElementById('s_hours').value
    // sub.push({id,name,code,hours})
    sub[id]={name,code,hours}
    getSubject()
}



let facBtn=document.getElementById('faculty')
facBtn.addEventListener("click",()=>{
    FacultyPage.style.display="block"
    SubjectPage.style.display="none"
    CurrentPage.style.display="none"
    GeneratePage.style.display="none"
    facBtn.style.color="black"
    facBtn.style.backgroundColor="skyblue"
    foo(facBtn)
    getFaculty()
    })


let subBtn=document.getElementById('Subject')

subBtn.addEventListener("click",()=>{
    FacultyPage.style.display="none"
SubjectPage.style.display="block"
CurrentPage.style.display="none"
GeneratePage.style.display="none"
subBtn.style.color="black"
subBtn.style.backgroundColor="skyblue"
foo(subBtn)
getSubject()
})


let currBtn=document.getElementById('Current')
currBtn.addEventListener("click",()=>{
FacultyPage.style.display="none"
SubjectPage.style.display="none"
CurrentPage.style.display="block"
GeneratePage.style.display="none"
foo(currBtn)
})


let genBtn=document.getElementById('Generate')
genBtn.addEventListener("click",()=>{
    FacultyPage.style.display="none"
    SubjectPage.style.display="none"
    CurrentPage.style.display="none"
    GeneratePage.style.display="block"
    getData()
    foo(genBtn)
})


foo(facBtn)
getFaculty()