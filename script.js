function required()
{
var principal = document.getElementById("principal").value;
if (principal <= "0" )
{
alert("Enter a positive number");
var result = document.getElementById("result").value;
document.getElementById('principal').focus();
result.innerText = "";
}
}

function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = parseFloat(principal * years * rate /100);
var year = new Date().getFullYear()+parseInt(years);
var amount = parseFloat(principal) + parseFloat(interest);
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of<mark> "+rate+"</mark>%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}

var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

