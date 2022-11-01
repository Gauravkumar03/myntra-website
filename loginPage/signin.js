var form = document.querySelector("#form") 

var userData = JSON.parse(localStorage.getItem("signupData"))
var flag = false;
document.getElementById("Profile_login").addEventListener("click", myFunction);
var profilename='Profile';
form.addEventListener("submit",function(event){
    event.preventDefault()
    var loginObj={
        userId: form.tel.value,
        userPaswd: form.pswd.value
        }
        userData.forEach(element => {
        if(loginObj.userId== "" || loginObj.userPaswd =="" ){
            alert("Please enter All details")
            return
        }
        else if((element.userEmail== loginObj.userId || element.userMob == loginObj.userId) && (element.userPassword==loginObj.userPaswd) )
        {
            alert("Signin Successful")
            
            profilename = element.userName;
            flag = true;
            window.location.href="../index.html"
            return
        }
        else{
            alert("Invalid userid or password");
            return
        }
    });

})

function myFunction(){
    if(flag==true){
        var name = document.getElementsByClassName("Profile_title").value
        name = profilename 
    }
}
