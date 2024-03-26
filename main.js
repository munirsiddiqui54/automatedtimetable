console.log("Hello world")

let FacultyPage=document.getElementById('FacultyPage')
let SubjectPage=document.getElementById('SubjectPage')
let CurrentPage=document.getElementById('CurrentPage')
let GeneratePage=document.getElementById('GeneratePage')


const facultyList=document.getElementsByClassName("facultyList")

const courseList=document.getElementsByClassName("subjectList")


function deleteFaculty(rowId) {
    if (confirm("Are you sure you want to delete this Faculty?")) {
        // AJAX request
        fetch('deleteFaculty.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id=${rowId}`,
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // Assuming you want to update the table after deletion
            fetchFacultyData(); // Call fetchData() to update the table
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

function fetchFacultyData() {
    fetch('getFaculty.php')
        .then(response => response.json())
        .then(data => {
            const facNode= document.createElement("tr");
        
                    data.forEach(row => {
                const v = document.createElement("tr");
                    v.innerHTML = `
                    <th scope="row">${row.id}</th>
                    <td>${row.first_name}</td>
                    <td>${row.last_name}</td>
                    <td>${row.f_email}</td>
                    <td>${row.f_code}</td>
                    <td>${row.f_working_load}</td>
                    <td> <button class="btn btn-danger" onclick="deleteFaculty(${row.id})">DELETE </button></td>
                  `;
                    facNode.append(v);
                });
              
              facultyList[0].innerHTML=facNode.innerHTML      
              facultyList[1].innerHTML=facNode.innerHTML      
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchFacultyData();

function deleteCourse(rowId) {
    if (confirm("Are you sure you want to delete this course?")) {
        // AJAX request
        fetch('deleteCourse.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id=${rowId}`,
        })
        .then(response => response.text())
        .then(result => {
            console.log(result);
            // Assuming you want to update the table after deletion
            fetchCourseData(); // Call fetchCourseData() to update the table
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}

function fetchCourseData() {
    fetch('getCourse.php')
        .then(response => response.json())
        .then(data => {
            const courseNode= document.createElement("tr");
        
            data.forEach(row => {
                const v = document.createElement("tr");
                v.innerHTML = `
                    <th scope="row">${row.id}</th>
                    <td>${row.c_name}</td>
                    <td>${row.c_code}</td>
                    <td>${row.c_required_hours}</td>
                    <td> <button class="btn btn-danger" onclick="deleteCourse(${row.id})">DELETE </button></td>
                `;
                courseNode.append(v);
            });
            
            courseList[0].innerHTML=courseNode.innerHTML;       
            courseList[1].innerHTML=courseNode.innerHTML;           
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchCourseData();




// const prompt = `Subjects Data:
// ${sub}

// Faculties Data:
// ${fac}

// Class Information:
// - Class A: 6 hours available per day, with a lunch break from 12:00 PM to 1:00 PM
// - Class B: 5 hours available per day, with a morning break from 10:00 AM to 10:15 AM

// Constraints:
// - Avoid scheduling classes during faculty unavailable hours.
// - Ensure each subject is taught the required number of hours per week.
// - Minimize gaps between classes for efficient use of time.

// `;

// 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

const key="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"
// function makeRequest() {
//     const prompt = "Generate a timetable for the following classes...";
//     const apiKey = 'YOUR_API_KEY'; // Replace with your API key

//     axios.post(
//         'https://api.openai.com/v1/completions',
//         {
//             model: 'gpt-3.5-turbo', // Adjust as needed
//             prompt: prompt,
//             max_tokens: 1000 // Adjust as needed
//         },
//         {
//             headers: {
//                 'Authorization': `Bearer ${key}`,
//                 'Content-Type': 'application/json'
//             }
//         }
//     )
//     .then((response) => {
//         // Handle successful response
//         console.log('Timetable:', response.data.choices[0].text);
//     })
//     .catch((error) => {
//         // Handle error
//         if (error.response && error.response.status === 429) {
//             console.error('Rate limit exceeded. Please try again later.');
//         } else {
//             console.error('Error:', error.message);
//         }
//     });
// }

// document.getElementById("makeReq").addEventListener("click",()=>{
//     makeRequest()
// })
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



let facBtn=document.getElementById('faculty')
facBtn.addEventListener("click",()=>{
    FacultyPage.style.display="block"
    SubjectPage.style.display="none"
    CurrentPage.style.display="none"
    GeneratePage.style.display="none"
    facBtn.style.color="black"
    facBtn.style.backgroundColor="skyblue"
    foo(facBtn)
    
fetchData();
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
    foo(genBtn)
})


foo(facBtn)