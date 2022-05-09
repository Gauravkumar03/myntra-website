var form = document.querySelector("#form") 

var userData = JSON.parse(localStorage.getItem("signupData"))

form.addEventListener("submit",function(event){
    event.preventDefault()
// console.log("---------------")
    var loginObj={
        userId: form.tel.value,
        userPaswd: form.pswd.value
        }

    // console.log(userData)
    // console.log(loginObj)
    if(loginObj.userId == "" || loginObj.userPaswd =="" ){
        alert("Please Enter Details")
        window.location.href="signin.html"
    }
    // else if((userData.userMob != loginObj.userId || userData.userEmail != loginObj.userId) || (userData.userPassword!=loginObj.userPaswd) ){
    //     alert("Invalid user id or password")
    //     window.location.href="signin.html"
    // }
    // console.log(loginObj.userId)
    else if((userData.userMob == loginObj.userId || userData.userEmail == loginObj.userId) && (userData.userPassword==loginObj.userPaswd) )
    {
        // console.log(loginArr)
        alert("Signin successful")
        window.location.href="../index.html"
    }
    else{
        alert("Signin Successful");
        window.location.href="../index.html"

    }
})