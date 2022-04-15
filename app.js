const person = {
    name: 'Jared Shetler',
    career: 'Writer / Student',
    description: 'It took me 150 hours to beat Elden Ring.'
}
const jobs = [                                                                           //3 of my past jobs stored as objects...
{                                                                                        //...inside of an array
    company: 'Starbucks Coffee Co',
    job: 'Barista',
    desc: 'Created delicious beverages and exceed customer expectations'
},
{
    company: 'Greer and Associates Electrical',
    job: "Electrician's Assistant",
    desc: 'Learned the trade, organized stuff, and did the work no one else wanted to do'
},
{
    company: 'Home',
    job: 'Freelance Writer',
    desc: "Identified client's problems and delivered solutions in a timeley manner"
}]
let allCaps = person.name.toUpperCase();

const skills = [
{
    skill: 'Euphonium',
    val: true
},
{
    skill: 'Fencing',
    val: true
},
{
    skill: 'Writing',
    val: true
},
{
    skill: 'CSS',
    val: false
},
{
    skill: 'HTML',
    val: false
}]

const interests = ['Reading', 'Writing', 'DnD', 'Music', 'Video Games']                 //My interests stored in an array

function displayPosition(company, title, description) {                                 //Defining the displayPosition function
    console.log("*" + title + " at " + company + " - " + description + ".")
}
function displaySkill(val, skill) {                                                     //Defining the displaySkill function
    if(Boolean(val) == true)                                                            //using skill name and Boolean value
        console.log('* BAM: ' + skill)
    else
        console.log('* ' + skill)
}
console.log('Name: ' + allCaps)
console.log('Career: ' + person.career)
console.log('Description: ' + person.description)

console.log(' ')                                                                        //Empty space for the aesthetic

console.log('My Interests: ')
for(var c = 0; c < interests.length; c++) {
console.log('* ' + interests[c])
}

console.log(' ')                                                                            //Empty space for the aesthetic

console.log('My Previous Experience:')                                                   // A title to separate sections

for(var i = 0; i < jobs.length; i++) {                                                  //Calling the displayPosition function in a loop
    displayPosition(jobs[i].company, jobs[i].job, jobs[i].desc)
}

console.log(' ')                                                                           //Empty space for the aesthetic

console.log("My SKills! :")                                                               // A title to separate sections pt 2

for(var n = 0; n < skills.length; n++) {                                    //Calling the displaySkills function in a loop
    displaySkill(skills[n].val, skills[n].skill)
}