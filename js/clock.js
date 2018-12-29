var d,h,m,s;
function clocky(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
if (h<=9)
    {
        h='0' + h;
    }
if (m<=9)
    {
        m='0' + m;
    }

if (s<=9)
    {
        s='0' + s;
    }
var clocktime = h + ":" + m + ":" + s;
var backcolor='#'+ h + m + s;    
document.getElementById("clock").innerHTML=clocktime;
document.body.style.background=backcolor;    
setTimeout(clocky,1000);
}
clocky();

