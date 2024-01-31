console.log("Hello world")

let FacultyPage=document.getElementById('FacultyPage')
let SubjectPage=document.getElementById('SubjectPage')
let CurrentPage=document.getElementById('CurrentPage')
let GeneratePage=document.getElementById('GeneratePage')

FacultyPage.style.display="none"
SubjectPage.style.display="none"
CurrentPage.style.display="block"
GeneratePage.style.display="none"

var list={
    101:"Harry Potter",
    102:"Hermione ",
    103:"Jack",
    104:"John"
}

var facMap = new Map();
facMap.set("Teacher- ID ", "Teacher");
facMap.set(101, "Harry");
facMap.set(102, "Hermine");
facMap.set(103, "John");

const facultyList=document.getElementsByClassName("facultyList")

function getFaculty(){
    for (var i = 0; i < facultyList.length; i++) {
    const facNode= document.createElement("li");
    for (const [key, value] of facMap.entries()) {
        console.log(key, value);
        const v = document.createElement("li");
            v.innerHTML = `<h6>${key} : ${value}</h6>`;
            facNode.append(v);
      }
    facultyList[i].innerHTML=facNode.innerHTML
    }
}
var subMap = new Map();
subMap.set("subject- ID", "Subject");
subMap.set(101, "Maths - 4");
subMap.set(102, "Computer Networks");

const subjectList=document.getElementsByClassName("subjectList")

function getSubject(){
    for (var i = 0; i < subjectList.length; i++) {
    const facNode= document.createElement("ul");
    for (const [key, value] of subMap.entries()) {
        console.log(key, value);
        const v = document.createElement("li");
            v.innerHTML = `<h6>${key} : ${value}</h6>`;
            facNode.append(v);
      }
      subjectList[i].innerHTML=facNode.innerHTML
    }
}

function addFaculty(){
    const name=document.getElementById('teacherName').value
    const id=document.getElementById('teacherId').value
    facMap.set(id,name)
    getFaculty()
}




let facBtn=document.getElementById('faculty').addEventListener("click",()=>{
FacultyPage.style.display="block"
SubjectPage.style.display="none"
CurrentPage.style.display="none"
GeneratePage.style.display="none"
getFaculty()
})


let subBtn=document.getElementById('Subject').addEventListener("click",()=>{
    FacultyPage.style.display="none"
SubjectPage.style.display="block"
CurrentPage.style.display="none"
GeneratePage.style.display="none"
getSubject()
})


let currBtn=document.getElementById('Current').addEventListener("click",()=>{
FacultyPage.style.display="none"
SubjectPage.style.display="none"
CurrentPage.style.display="block"
GeneratePage.style.display="none"
})


let genBtn=document.getElementById('Generate').addEventListener("click",()=>{
    FacultyPage.style.display="none"
    SubjectPage.style.display="none"
    CurrentPage.style.display="none"
    GeneratePage.style.display="block"
    getFaculty()
    getSubject()
})


