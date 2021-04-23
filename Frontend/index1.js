
function enable()
{
    var Name=document.getElementById("a").value;
    var mob_no=document.getElementById("b").value;
    var email=document.getElementById("c").value;
    var pass=document.getElementById("d").value;
    if(Name.length==0||mob_no.length!=10||email.length<5||pass.length==0)
    {
     alert("Invalid Input")
    }
    else
    {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/signup", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
 

    var json={
        "name":Name,
        "number":mob_no,
        "email":email,
        "pass":pass
    };
    xhttp.send(JSON.stringify(json));
    setTimeout(function(){ location.href="login.html"; }, 300);
  
 
}


}

   