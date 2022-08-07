array_student_name= [];
function submit(){
    for(var j=1; j<=4; j++)
{
    var name_student=document.getElementById("name_of_the_student_" +j).value
    console.log(name_student);
    array_student_name.push(name_student);

}

var length=array_student_name.length;
console.log(length);
var displayarray=[]
for(var k=0; k<length; k++)
{
 
displayarray.push("<h4>name-"+array_student_name[k]+"</h4>");    
console.log(displayarray)

}

document.getElementById("display_name_with_commas").innerHTML=displayarray;
var reamove=displayarray.join("")
document.getElementById("display_name_without_commas").innerHTML=reamove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
    
}

function sorting()
{
array_student_name.sort();
var length=array_student_name.length;
console.log(length);
var sortdisplayarray=[];
for(var k=0; k<length; k++)
{
 
sortdisplayarray.push("<h4>name-"+array_student_name[k]+"</h4>");    
console.log(sortdisplayarray)

}
var reamove=sortdisplayarray.join("")
document.getElementById("display_name_without_commas").innerHTML=reamove;
}