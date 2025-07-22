
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
let top = window.scrollY;
let offset = sec.offsetTop - 100;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');

if(top >= offset && top < offset + height){
navLink.forEach(links => {
    links.classList.remove('active');
    document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
});
}
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}




const form = document.querySelector('form');


function sendEmail(){

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yatendrak814@gmail.com",
        Password : "7966154D84FCFA266B930DF54F297034BA76",
        To : 'yatendrak814@gmail.com',
        From : "yatendrak814@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});