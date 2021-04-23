function enable()
{
    var Name=document.getElementById("a").value;
    var pass=document.getElementById("d").value;
    if(Name.length==0||pass.length==0)
    {
     alert("Invalid Input")
    }
    else
    {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/login", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {

        }
    };
    var json={
        "name":Name,
        "pass":pass,
    };
    xhttp.send(JSON.stringify(json));

}
}

   