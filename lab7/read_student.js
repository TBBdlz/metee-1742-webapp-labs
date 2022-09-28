"use strict";
const studentList = document.getElementById("student-list");
fetch("students.json")
    .then((response) => response.json())
    .then((data) => {
    for (let s of data.wclass) {
        const studentItem = document.createElement("li");
        studentItem.innerHTML = `${s.student["@attributes"].id} <b>${s.student.name}</b> has skill <i>${s.student.skill}</i>`;
        studentList.appendChild(studentItem);
    }
});
