let movies=[
   "Squid Game" ,
   "Popular" ,
   "Zero Day" ,
   "The Night Agent" ,
   "Strangers Things"

]


moviesList=document.getElementById("list-items")
document.getElementById("load-movies").addEventListener("click",function(){
    for (let i = 0; i < movies.length; i++) {
        let li=document.createElement("li")
        li.textContent=movies[i]
        moviesList.appendChild(li)
        
    }


document.getElementById(load-movies).disabled=true
})







// Email Validation
document.querySelector('.email-signup button').addEventListener('click', function() {
    const email = document.querySelector('.email-signup input').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email.match(emailPattern)) {
        alert('Thank you for signing up!');
    } else {
        alert('Please enter a valid email address');
    }
});