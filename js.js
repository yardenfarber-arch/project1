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
alert("Okay, saved successfully")    
console.log(firstName)
console.log(lastName)
console.log(email)
console.log(age)
console.log(message)

})
