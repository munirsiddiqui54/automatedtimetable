<?php
require "faculty.php";
require "courses.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="stylesheet" href="dashboard.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="" style="display: flex;">
        <nav class="d-flex" style="height: 100vh;">
            <img src="logo.png" alt="Logo" />
            <h2>Admin Dashboard</h2>
            <ul class="d-flex mt-5" style="flex-direction: column;" id="nav">
                <button class="btn btn-secondary px-4 my-1" id="faculty">Add Faculty</button>
                <button class="btn btn-secondary px-4 my-1" id="Subject">Add Subject</button>
                <button class="btn btn-secondary px-4 my-1" id="Current">Current Time Table</button>
                <button class="btn btn-secondary px-4 my-1" id="Generate">Faculties and Subjects</button>
            </ul>
        </nav>
        <main id="GeneratePage">
            <h3> Info-Page</h3>
            <div class="d-flex" style="width: 100%;justify-content: space-between;flex-direction:column">
                <div class="m-2 animate" style="border: 1px solid gray;">
                    <table class="table container animate" style="width: 800px;">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Faculty ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Faculty Code</th>
                                <th scope="col">Required Hours</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody class="facultyList">

                        </tbody>
                    </table>
                </div>
                <div class="m-2 animate" style="border: 1px solid gray;">
                    <table class="table container" style="width: 800px;">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Course ID</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Course Code</th>
                                <th scope="col">Required Hours</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody class="subjectList">

                        </tbody>
                    </table>

                </div>
            </div>
            <button class="btn btn-success m-5 animate" style="width: 200px;">
                <a id="makeReq" style="color: white; text-decoration: none;">
                    Generate
                </a>
            </button>
            <div class="ms-2">
                <p id="display">

                </p>
            </div>

        </main>

        <!-- FACULTY PAGE -->

        <main id="FacultyPage">
            <div class="d-flex mt-5" style="display: flex;justify-content: space-around;">
                <div class="m-3 animate" style="display: flex;align-items: center;flex-direction: column;">
                    <h3>Add Faculty</h3>
                    <form method="post">
                        <input type="text" name="f_first_name" class="form-control m-1" id="f_first_name" placeholder="Enter First Name">
                        <input type="text" name="f_last_name" class="form-control m-1" id="f_last_name" placeholder="Enter Last Name">
                        <input type="email" name="f_email" class="form-control m-1" id="f_email" placeholder="Enter Email">
                        <input type="password" name="f_password" class="form-control m-1" id="f_password" placeholder="Enter Password">
                        <input type="text" name="f_code" class="form-control m-1" id="f_code" placeholder="Enter Faculty Code">
                        <input type="text" name="f_working_load" class="form-control m-1" id="f_working_load" placeholder="Enter Working Load">
                        <button class="btn btn-primary m-1" type="submit" name="submit" style="width: 100%;">Add Faculty</button>
                    </form>
                </div>
                <div>
                    <table class="table container animate" style="width: 800px;">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Faculty ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Faculty Code</th>
                                <th scope="col">Required Hours</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody class="facultyList">
                            <tr>
                                <th scope="col">Course ID</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Course Code</th>
                                <th scope="col">Required Hours</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </main>

        <!-- SUBJECT PAGE -->

        <main id="SubjectPage" class="pe-3 my-5">
            <div class="d-flex animate" style="display: flex;justify-content: space-around;">
                <div class="m-3" style="display: flex;align-items: center;flex-direction: column;">
                    <h3>Add Course</h3>
                    <form method="post">
                        <input type="text" name="c_name" class="form-control m-1" id="c_name" placeholder="Enter Course Name">
                        <input type="text" name="c_code" class="form-control m-1" id="c_code" placeholder="Enter Course Code">
                        <input type="text" name="c_required_hours" class="form-control m-1" id="c_required_hours" placeholder="Enter Required Hours">
                        <button class="btn btn-primary m-1" type="submit" name="submit_course" style="width: 100%;">Add Course</button>
                    </form>
                </div>
                <div>
                    <table class="table container" style="width: 800px;">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Course ID</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Course Code</th>
                                <th scope="col">Required Hours</th>
                                <th scope="col">Operation</th>
                            </tr>
                        </thead>
                        <tbody class="subjectList">

                        </tbody>
                    </table>
                </div>
            </div>
        </main>


        <!-- CURRENT TIME TABLE PAGE  -->

        <main id="CurrentPage" style="overflow: scroll;height: 100vh;">

        </main>
    </div>

    <script type="importmap">
        {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script>
    <script type="module">
        import {
            GoogleGenerativeAI
        } from "@google/generative-ai";


        // Fetch your API_KEY
        const API_KEY = "AIzaSyDS-ZhJ_1Tm3FwQdTxLJyzhE7xnB-u1px8";

        // Access your API key (see "Set up your API key" above)
        const genAI = new GoogleGenerativeAI(API_KEY);

        // ...

        const model = genAI.getGenerativeModel({
            model: "gemini-pro"
        });

        let timetable;

        const saveTimeTable = async () => {
            alert("Saving Time Table");
            const prompt = ` This is the Html Code for Time Table ${timetable}.
            convert into a Json object as 
            var divisions = {
            A:{
                Monday:{
                    time: {
                        subject:x
                        faculty:y
                    },
                },
                Tuesday:{},
                Wednesday:{},
                Thursday:{},
                Friday:{}
            },
            B:{
                Monday:{},
                Tuesday:{},
                Wednesday:{},
                Thursday:{},
                Friday:{}
            }
            name: "John",
            age: 30,
            city: "New York"
            };
            `;
            const result = await model.generateContent(prompt);
            const response = await result.response;
            let text2 = response.text();
            console.log(text2)
        }


        const makeRequest = async (subjectData, FactultyData) => {
            alert("Searching...")
            console.log("Searching...")
            const prompt = `
Gemini Pro Time Table Generator with resepective Faculty.

generate time tables for two divisions A and B  using the provided data. Below are the details of faculty and courses from 10 am to 5pm:
Hours are in per week availability and requirement

Faculty:
${JSON.stringify(subjectData)}

Subjects:
${JSON.stringify(facultyData)}

`
            console.log(prompt)
            const result = await model.generateContent(prompt);
            const response = await result.response;
            let text = response.text();
            console.log(text)

            const result2 = await model.generateContent(`prepare an HTML code in form of table to render the following Data: ${text}`)

            const response2 = await result2.response;
            let text2 = response2.text();
            console.log(text2);
            timetable = text2;
            document.getElementById("display").innerHTML = `
            <form>
            
            ${text2}
            <button class="btn btn-success" >SAVE </button>

            </form>
            `
        }

        let facultyData;
        let SubjectData;

        function fetchData() {
            fetch('getCourse.php')
                .then(response => response.json())
                .then(data => {
                    SubjectData = data
                });
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'fetch_data.php', true);
            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var data = JSON.parse(xhr.responseText);
                    facultyData = data;

                } else {
                    console.error('Request failed with status ' + xhr.status);
                }
            };
            xhr.onerror = function() {
                console.error('Request failed');
            };
            xhr.send();
        }
        fetchData()
        document.getElementById("makeReq").addEventListener("click", () => {
            if (facultyData != undefined && SubjectData != undefined) {
                console.log(facultyData);
                console.log(SubjectData);
                makeRequest(SubjectData, facultyData)
            }
        })
    </script>
    <script src="./main.js"></script>

</body>

</html>