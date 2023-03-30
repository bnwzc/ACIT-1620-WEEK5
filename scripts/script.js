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


function createCourseArray(){
    const courseID = document.querySelectorAll(".courseID")
    const courseDate = document.querySelectorAll(".courseDate")
    let courselist = []
    for(var i = 0; i < courseID.length;i = i + 1){
        courselist.push({code:courseID[i].textContent,date:courseDate[i].textContent})
    }   
    return courselist
}
function findCourse(courseList){
    do{
        user = prompt("Type a 4 digits-code")
    }while((isNaN(user)) || (user.length != 4))
    index = 0
    judge = false
    for(let i of courseList){
        
        if(i["code"].slice(5,9) == user){
            const x = document.querySelectorAll('.course')[index]
            x.style.backgroundColor = 'green'
            judge = true
        }
        index = index + 1
    }
    if(judge == false){
        const newlist = document.createElement('li')
        newlist.style="list-style-type: none;"
        newlist.class="course-grid course"
        document.querySelector("ul").appendChild(newlist)
        const newcourseID = document.createElement('a')
        newcourseID.textContent="ACIT-"+user
        newcourseID.href="http://www.bcit.ca"
        newcourseID.target="_blank"
        newcourseID.class="courseID"
        newlist.appendChild(newcourseID)
        const newcourseDate = document.createElement('p')
        newcourseDate.textContent="Fall 2020"
        newcourseDate.class="courseDate"
        newcourseDate.class="order-3"
        newlist.appendChild(newcourseDate)
        const newcourseDescription = document.createElement('p')
        newcourseDescription.textContent="N/A"
        newcourseDescription.class="order-2"
        newlist.appendChild(newcourseDescription)

    }
}
findCourse(createCourseArray())