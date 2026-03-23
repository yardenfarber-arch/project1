const form = document.querySelector("#submitBtn")

form.addEventListener("click", function(e) {
    e.preventDefault()
const firstName =document.querySelector("#firstName").value
const lastName =document.querySelector("#lastName").value
const email =document.querySelector("#email").value
const age =document.querySelector("#age").value
const message =document.querySelector("#message").value
if (firstName.length<=1 || firstName.length>=10)
{
    alert("Error: Change the firstname")
    return
}
if (lastName.length<=1 )
{
    alert("Error: Change the lastname")
    return
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(!emailPattern.test(email))
{
     alert("Error: Change the email")
     return
}
if(age<6)
{
   alert("Invalid age")
   return
}
if(message.length<4)
{
    alert("Too short, please write more") 
    return
}
alert("ok")
console.log(firstName)
console.log(lastName)
console.log(email)
console.log(age)
console.log(message)
fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            name: firstName, 
            lastName: lastName, 
            email: email, 
            age: age, 
            message: message 
        })
    })
    .then(res => res.text())
    .then(data => {
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(age)
        console.log(message)
        alert("הנתונים נשלחו בהצלחה! תשובת השרת: " + data);
    })
    .catch(err => {
        console.error("שגיאה בשליחה:", err);
        alert("קרתה שגיאה בשליחת הנתונים לשרת.");
    });
})