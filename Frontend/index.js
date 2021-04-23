  

function enable()
{
    var Name=document.getElementById("a").value;
    var mob_no=document.getElementById("b").value;
    var email=document.getElementById("c").value;
    if(Name.length==0||mob_no.length!=10||email.length<5)
    {
     alert("Invalid Input")
    }
    else
    {
    document.getElementById('append').style.display="block";
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8080/posts", true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    };
 

    var json={
        "name":Name,
        "number":mob_no,
        "email":email,
    };
    xhttp.send(JSON.stringify(json));
}

setTimeout(function(){ window.location.reload(); }, 200);
}
function load()
{
    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("GET", "http://localhost:8080/posts", true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list=JSON.parse(this.responseText);
            var temp=document.getElementById('append');
            var count=1;
            for(var i=0;i<list.length;i++)
            {
                count++;
                var table=document.createElement('tr');  
                var temp22=document.createElement('td');
                var temp2=document.createElement('td');
                var temp3=document.createElement('td');
                var temp4=document.createElement('td');
                var temp5=document.createElement('td');
                temp22.innerHTML=list[i].id;
                temp22.style.display="none";
                
                temp2.innerHTML="<input type='text' class='l' value=" +list[i].name +" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
                temp3.innerHTML="<input type='text' class='l' value=" + list[i].number+" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
                temp4.innerHTML="<input type='text' class='l' value=" + list[i].email +" style= 'width:80px;  background-color: #c3c3c1; border:none;'>";
                temp5.innerHTML='<button style="background-color:#efe4b0;" onclick="deleteRow(this)">Delete</Button>'
                
                temp5.classList.add("k");

        
                
                table.appendChild(temp22);
                table.appendChild(temp2);
                table.appendChild(temp3);
                table.appendChild(temp4);
                table.appendChild(temp5);

                temp.appendChild(table);

            }
            if(count==1)
            {
                temp.style.display="none";
            }
            else
            {
                temp.style.display="block";
            }
           

        }
    };
    xhttp1.send();

}
function deleteRow(r)
{
    var i = r.parentNode.parentNode.rowIndex;
    var m=document.getElementById('append').rows[i].cells[0].innerHTML;
    var url = "http://localhost:8080/posts/"+m;
    console.log(url);
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url, true);
xhr.onload = function () {

}
xhr.send(null); 
    setTimeout(function(){ window.location.reload(); }, 100);
}
   