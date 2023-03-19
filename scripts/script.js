let course1 = {
    code: "ACIT 1620",
    name: "Web Fundamental Technologies"
};
let course2 = {
    code: "ACIT 1515",
    name: "Scripting for IT"
};
let course3 = {
    code: "ACIT 1310",
    name: "Math for IT"
};


const courseList = [course1, course2, course3];


let user;
do{
    user = prompt("Type a 4 digits-code")
}while((isNaN(user)) || (user.length != 4))