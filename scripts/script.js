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


const courseList = [ 
    {
        code: "ACIT 1620",
        name: "Web Fundamental Technologies"
    },
    {
        code: "ACIT 1515",
        name: "Scripting for IT"
    },
    {
        code: "ACIT 1310",
        name: "Math for IT"
    }
];


let user;
do{
    user = prompt("Type a 4 digits-code")
}while((isNaN(user)) || (user.length != 4));


judge = true;
for(let course of courseList){
    if (course["code"].includes(user) == true){
        console.log(`Yes I am taking the course: ${course['code']} - ${course['name']}`)
        judge = false
    }
};
if(judge == true){
    courseList.push({code:"ACIT " + user,name:null})
    console.log(`The new course ACIT ${user} has been added` )
}

for(let course of courseList){
    console.log(course)
}