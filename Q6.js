var home = document.querySelector('#home');
var about = document.querySelector('#about');
var contacts = document.querySelector('#contacts');

var hometext = document.querySelector('#hometext');
var abouttext = document.querySelector('#abouttext');
var contactstext = document.querySelector('#contactstext'); 

hometext.style.display = "block";
hometext.style.width = '50%';

home.addEventListener("click", function(){
    removetext();
    hometext.style.display = "block";
    hometext.style.width = '50%'; 
})

about.addEventListener("click", function(){
    removetext();
    abouttext.style.display = "block";
    abouttext.style.width = '50%'; 
})

contacts.addEventListener("click", function(){
    removetext(); 
    contactstext.style.display = "block";
    contactstext.style.width = '50%'; 
})

function removetext(){
    document.querySelectorAll("h3").forEach(function(h3){
         h3.style.display ="none";
    })
}