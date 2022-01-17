let women = ["Azeezah", "Khadijah", "Mariam", "Zainab", "Aisha", "Asiyah"," Balqees", "Rasheedah", "Amidah", "Fawziyyah"];
let men = ["Fuad", "Habeeb", "Abdullah", "Faizal", "Ahmad", "Saeed", "Abbas", "AbdulrRasheed", "AbdulRahman", "Mubarak"];
let result = document.querySelector(".result");
let partner = document.querySelector(".partner");
let hus = document.querySelector(".hus");
let part = document.querySelector(".part");
let gender = document.querySelectorAll("#gender");
let womenRandom = women[Math.floor(Math.random() * women.length)];
let menRandom = men[Math.floor(Math.random() * men.length)];
let male = document.getElementById('genderMale')
let female = document.getElementById('genderFemale')
let refresh = document.querySelector(".refresh")
let userInfo = document.querySelector(".info");
let start = document.querySelector("#start");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

function begin() {
    start.style.display = 'none';
    let x = document.getElementById("fname").value;
    result.innerHTML = '<h1>Congratulations</h1>'  ;
    partner.innerHTML = x;
    hus.innerHTML = '<h1>Your partner is : </h1>'     
    male.addEventListener('click', () =>{
        part.innerHTML = womenRandom;
    });
    female.addEventListener('click', () =>{
        part.innerHTML = menRandom;
    });
    if(part.style.display === 'none'){
        part.style.display = 'block';
    }    else{
        part.style.display = 'none';
    } 
    if(result.style.display === 'none'){
        result.style.display = 'block';
    }    else{
        result.style.display = 'none';
    } 
    if(hus.style.display === 'none'){
        hus.style.display = 'block';
    }    else{
        hus.style.display = 'none';
    } 
    refresh.innerHTML = '<div class="restart"> <input type="button" class="resbutton" value="Restart" /></div>'
}
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active")
});
hamburger.addEventListener('click', () =>{
    navMenu.classList.toggle("active")
});
document.querySelectorAll(".head").forEach(n => n.addEventListener('click', () =>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))



















