/**
 * Created by Administrator on 11.10.2017.
 */
function multiplyBy()
{
    num1 = document.getElementById("ensimmäinen").value;
    num2 = document.getElementById("toinen").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy()
{
    num1 = document.getElementById("ensimmäinen").value;
    num2 = document.getElementById("toinen").value;
    document.getElementById("result").innerHTML = num1 / num2;
}