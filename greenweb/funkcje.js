function init()
{
ramka();
	var nowy=document.getElementById("nowy");
	nowy.onclick=clear;
	//var kreuj=document.getElementById("tworz");
	//kreuj.onclick=createe;
    //var tworzz=document.getElementById("tworzz");
    //tworzz.onclick=createe;
var labiryntodzero=document.getElementById("labiryntodzero");
labiryntodzero.onclick=labirynt;
var tworzark=document.getElementById("tworzark");
	tworzark.onclick=randomarc;
var beam=document.getElementById("beams");
beam.onclick=beams;

var sin=document.getElementById("sinus");
sin.onclick=sinus;
var cos=document.getElementById("cosinus");
cos.onclick=cosinus;
var dia=document.getElementById("diamond");
dia.onclick=diamond;
var ding=document.getElementById("dingdong");
ding.onclick=dingdong;
//var probeam=document.getElementById("probeams");
//probeam.onclick=probeams;
var circlelab=document.getElementById("circlelab");
circlelab.onclick=circlelabirynt;

var d=new Date();
var e=d.getTime();
//alert(e);
e=new Date().getTime();
//alert(e);
}


function dingdong(){
    
    clear();
    var ca=document.getElementById("ramko");
		var cac=ca.getContext("2d");
               
                var srodekx=ca.width/2;
                var srodeky=ca.height/2;
                var kros=Math.floor(Math.random()*5);
      cac.strokeStyle=randomcolor();
                    cac.lineWidth=kros;
//                cac.beginPath();    
//    cac.moveTo(0, srodeky);
//    cac.lineTo(srodekx -25, srodeky);
//cac.stroke();
    var poczatek=0;
           
           
    
           var wysokosc=srodeky;
           for(var i=0;i<500;i++){
                 
                    
                var ile=Math.floor((Math.random()*75)+1);
                var szer=Math.floor((Math.random()*10)+1);
           var aj=0;
        if(aj==0)         {
            cac.beginPath();   cac.moveTo(poczatek, wysokosc);
        poczatek+=szer;    
    cac.lineTo(poczatek, wysokosc+ile);//cac.stroke();
    //cac.beginPath();       cac.moveTo(poczatek, wysokosc);
    poczatek+=szer;
    cac.lineTo(poczatek, srodeky);cac.stroke();
    aj++;
        }
    
   if(aj==1)         {
            cac.beginPath();   cac.moveTo(poczatek, wysokosc);
        poczatek+=szer;    
    cac.lineTo(poczatek, wysokosc-ile);//cac.stroke();
    //cac.beginPath();       cac.moveTo(poczatek, wysokosc);
    poczatek+=szer;
    cac.lineTo(poczatek, srodeky);cac.stroke();
        aj=0;
        }
     
           
//           cac.strokeStyle=randomcolor();
//                    cac.lineWidth=1;
//                cac.beginPath();    
//    cac.moveTo(poczatek, srodeky);
//    cac.lineTo(ca.width, srodeky);
//    
//           cac.stroke();
//    
}

}
function diamond(){
    
var ca=document.getElementById("ramko");
		var cac=ca.getContext("2d");
               
                var srodekx=ca.width/2;
                var srodeky=ca.height/2;
              var a=2;
              var l=0;
              
  var kros=Math.floor(Math.random()*5+1);
              for (var i= 0; i <500;i++){
        cac.strokeStyle=randomcolor();
                    cac.lineWidth=kros;
                cac.beginPath();       
        if(l==0){cac.moveTo(srodekx-a, srodeky);cac.lineTo(srodekx, srodeky+a);};
        if(l==1){cac.moveTo(srodekx+a, srodeky);cac.lineTo(srodekx, srodeky+a);};
        if(l==2){cac.moveTo(srodekx+a, srodeky);cac.lineTo(srodekx, srodeky-a);};
        if(l==3){cac.moveTo(srodekx-a, srodeky);cac.lineTo(srodekx, srodeky-a);};
        l++;
        if(l==4){l=0;a+=2;};
                                
                cac.stroke();
                
            }
        
    
    
}
function sinus(){
    clear()
var ca=document.getElementById("ramko");
		var cac=ca.getContext("2d");
    var x= ca.width;
    var y=ca.height;
    var d=x/180;
    var a=-60;
    var ukle=1;
    var wukle=1.5;
    var zmiennik=0;
    var czek=false;
    var l=0;
      cac.strokeStyle=randomcolor();
    for(var i=0;i<=300;i++){
      
    cac.beginPath();
            if(l==0){ukle =1; wukle= 0;czek=false;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20;};
        if(l==1){ukle =1; wukle= 0;czek=true;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20;};
        if(l==2){ukle =1; wukle= 0;czek=false;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20; };
        if(l==3){ukle =1; wukle=0; czek=true;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20;};
        
        
        cac.lineWidth=1;
        cac.stroke();
        a+=20;
        l++;
        if(l==4){l=0;}
        
        
    
    
    }

}
function cosinus(){
    clear();
var ca=document.getElementById("ramko");
		var cac=ca.getContext("2d");
    var x= ca.width;
    var y=ca.height;
    var d=x/180;
    var a=-40;
    var ukle=1;
    var wukle=1.5;
    var zmiennik=0;
    var czek=false;
    var l=0;
      cac.strokeStyle=randomcolor();
    for(var i=0;i<=300;i++){
      
    cac.beginPath();
            if(l==0){ukle =1; wukle= 0;czek=true;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20;};
        if(l==1){ukle =1; wukle= 0;czek=false;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20;};
        if(l==2){ukle =1; wukle= 0;czek=true;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20; };
        if(l==3){ukle =1; wukle=0; czek=false;  cac.arc(a, y/2, 20, ukle*Math.PI,wukle*Math.PI, czek);a+=20;};
        
        
        cac.lineWidth=1;
        cac.stroke();
        a+=20;
        l++;
        if(l==4){l=0;}
        
        
    
    
    }

}
function circlelabirynt(){
    clear();
	var ca=document.getElementById("ramko");
		var cac=ca.getContext("2d");
		ca.style.webkitFilter ="blur(-2px)";
		var a=ca.width;
var b=ca.height;

				var e=a/2;
			var f=b/2;
			var kolorpierwszy=randomcolor();
			var c=0;
		for(var i=0;i<=a;i++)
		{
			
			for(var j=1;j<=a;j++)
			{cac.strokeStyle=randomcolor();	}
			cac.beginPath();
			cac.lineWidth=1;
							cac.arc(e, f , c, 0*Math.PI, 2*Math.PI);
							c+=2;
				//if(e!=a){e+=4;if(f!=b){f+=4;}}
				
			cac.stroke();
			
		
		}
		cac.beginPath();
		cac.strokeStyle=randomcolor();
		cac.lineWidth=16;
		cac.arc(e, f, 1, 0*Math.PI, 2*Math.PI);
		cac.stroke();
	
	
	
}
function ramka() {
	var ca=document.getElementById("ramko");
	var scren = window.outerWidth;
	var screnn= window.outerHeight;
		scren -= 200	;
	screnn -= 200;
	ca.setAttribute("style", "width:"+scren+"px;height:"+screnn+"px;");
	
	}
function color(sa){ //taki switch troche
	if(sa==0)
	{var que=randomcolor();
		Maniek.kolor=que;
}
	if(sa==1)
	{ Maniek.kolor="red";}
	if(sa==2)
	{ Maniek.kolor="green";}
	if(sa==6)
	{	
		window.open("pickchooser.html", "_blank", "toolbar=yes, location=yes, directories=no,status=no, menubar=yes,	 scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
	}
	
	
	
	}
	
	function labirynt() {
			var ca=document.getElementById("ramko");
		var cac=ca.getContext("2d");
		var a=ca.width;
var b=ca.height;
	var c=2;
         var kros=Math.floor(Math.random()*5+1);
			var d=2;
			var e=a/2;
			var f=b/2;
			var kolorpierwszy=randomcolor();
                        
		for(var i=0;i<=a;i++)
		{
			
			for(var j=1;j<=a;j++)
			{cac.strokeStyle=randomcolor();	}
			cac.beginPath();
			cac.lineWidth=kros;
							cac.rect(e, f , c, d);
				//if(e!=a){e+=4;if(f!=b){f+=4;}}
				c+=16;
				d+=16;
				e-=8;
					f-=8;
			cac.stroke();
			
		
		}

		
		
	}
	function createe() {
		var ca=document.getElementById("ramko");
	var cac=ca.getContext("2d");
		cac.lineWidth=(document.getElementById("g")).value;
		cac.strokeStyle=randomcolor();
		cac.beginPath();
                if(document.getElementById("f").value=="false"){czek=false;};
                    if(document.getElementById("f").value=="true"){czek=true;};
				cac.arc( (document.getElementById("a")).value, (document.getElementById("b")).value ,(document.getElementById("c")).value, ((document.getElementById("d")).value)*Math.PI,((document.getElementById("e")).value)*Math.PI, czek);
				//context.arc(x,y,r,sAngle,eAngle,counterclockwise);
			cac.stroke();	
	
	

		
		
	}
	
	function probeams()
	{
		
		var listcolor = new Array();
	var start=randomhex;
	var c="#";
	var a=nadziesietna(start);
	var b=a+20;
	for(var i=0;i<200;i++)
	{
		a=nadziesietna(b);
		c+=a;
		a+2;
		b=a;
		listcolor.push(c);
		c="#";
		
		
		
	};
		
		var ca=document.getElementById("ramko");
	var cac=ca.getContext("2d");
var a=0;
var b=0;
var x=ca.width;
var y=ca.height;
var g=document.getElementById("e");
		for(var i=0;i<200;i++)
		{	
	cac.beginPath();
	cac.lineWidth= 20;
			cac.strokeStyle=list[i];
		cac.arc(a, b, 10, 0*Math.PI, 2*Math.PI);
				a+=1.5;
				b+=1.75;
	cac.stroke();
	//			g.value=g.value+list[i];
			
		};
			}
			
	function randomarc(){
		
		
		var ca=document.getElementById("ramko");
	var cac=ca.getContext("2d");

	var a=0;
	var b=0;
	var c=0;
	var d=0;
	var array=new Array();
	array.push(0);
	array.push(0);
	array.push(0);
	array.push(0);
	var sr=randomcolor;
	var los=Math.random()*22;
	for(var j=0;j<50;j++){
		cac.beginPath();
		sr=randomcolor();
	for(var i=0;i<4;i++)
	{
		array[i]=Math.random()*600;
		if(i==3){array[i]=Math.random()*4+0,05}
		
	}
		
			cac.strokeStyle=sr;
	cac.lineWidth=Math.random()*16;
	cac.arc(array[0],array[1],array[2],array[3], 2*Math.PI);
	
	cac.stroke();
	}
	
	}
function manualwrite()
{
var a=document.getElementById("a");
var aa=a.value;
var b=document.getElementById("b");
var bb=b.value;
var c=document.getElementById("c");
var cc=c.value;
var d=document.getElementById("d");
var dd=d.value;
var e=document.getElementById("e");
var ee=d.value;
var ca=document.getElementById("ramko");

var strokestyle=randomcolor;


var cac=ca.getContext("2d");	
cac.strokeStyle=strokestyle;
cac.lineWidth=ee;
			cac.rect(aa, bb , cc, dd);
			cac.stroke();	

if(wybranytyp.value=="sinus")
{var cac=ca.getContext("2d");
	cac.beginPath();
	cac.lineWidth=ee;
	cac.strokeStyle=strokestyle;
	cac.arc(aa, bb,cc, 0*Math.PI, 2*Math.PI);
	cac.stroke();	}
	
//Maniek.numer=Maniek.numer+Maniek.przegiecie;
//Maniek.numero=Maniek.numero+Maniek.pochylenie;
	
}

function beams(){
	Maniek.pochylenie=Math.floor((Math.random()*10)+1);
	Maniek.przegiecie=Math.floor((Math.random()*10)+1);
		for(var ine=0;ine<100;ine++){
		beam();
		};
	Maniek.numer=1*Math.random()*15;
	Maniek.numero=1*Math.random()*15;
	}
	
	
	
function beam()
{
	var ca=document.getElementById("ramko");
	var cac=ca.getContext("2d");
	cac.beginPath();
	var los=Math.floor(Math.random()*20)+1;
	var a=Maniek.numero;
	var b=Maniek.numer;
	var cole=randomcolor();
	cac.lineWidth=Math.floor(Math.random()*10);
	cac.strokeStyle=cole;
	cac.arc(a,b,los,0*Math.PI,2*Math.PI);
			cac.stroke();
Maniek.numer=Maniek.numer+Maniek.przegiecie;
Maniek.numero=Maniek.numero+Maniek.pochylenie;
	
}

function clear(){

var ca=document.getElementById("ramko");
	
	var cac=ca.getContext("2d");
cac.clearRect(0, 0, ca.width, ca.height);
}
function randomcolor()
	{
		var b="#";
		var a=randomhex();
		return b+a;
			}
			
function randomhex()
	{
		var a="";
		var lista=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		for(var i=0;i<6;i++){
			a+=lista[Math.floor(Math.random()*15)];
		};
		
		return a;
			}
			



			
function HEXnaDEC(str){
		
    
        var suma=0;
        var licznik=0;
		str=str.toString();
		str=str.toUpperCase();
        for(var i=str.length-1;i>=0;i--)
        {
            switch(str.charAt(i))
            { case '0' :{ suma+=0*Math.pow(0,licznik);licznik++;break;}
            case '1' : {suma+=1*Math.pow(16,licznik);licznik++;break;}
            case '2' : {suma+=2*Math.pow(16,licznik);licznik++;break;}
            case '3' : {suma+=3*Math.pow(16,licznik);licznik++;break;}
            case '4' : {suma+=4*Math.pow(16,licznik);licznik++;break;}
            case '5' : {suma+=5*Math.pow(16,licznik);licznik++;break;}
            case '6' : {suma+=6*Math.pow(16,licznik);licznik++;break;}
            case '7' : {suma+=7*Math.pow(16,licznik);licznik++;break;}
            case '8' : {suma+=8*Math.pow(16,licznik);licznik++;break;}
            case '9' : {suma+=9*Math.pow(16,licznik);licznik++;break;}
            case 'A' : {suma+=10*Math.pow(16,licznik);licznik++;break;}
            case 'B' : {suma+=11*Math.pow(16,licznik);licznik++;break;}
            case 'C' : {suma+=12*Math.pow(16,licznik);licznik++;break;}
            case 'D' : {suma+=13*Math.pow(16,licznik);licznik++;break;}
            case 'E' : {suma+=14*Math.pow(16,licznik);licznik++;break;}
            case 'F' : {suma+=15*Math.pow(16,licznik);licznik++;break;}
            default : {break;}
            
            }
        
        
        }
    suma=suma.toString();
    return suma;
		
	}
	
	function DECnaHEX(dec){
		
		
		var hex="";
			var reminder=0;
			var dividend =0;
			var quotient=0;
			var divisor=16;
			var result = dec;
				
					if(dec<divisor){
						
						switch(dec)
			{
				case '10' : dec='A';break;
				case '11' : dec='B';break;
				case '12' : dec='C';break;
				case '13' : dec='D';break;
				case '14' : dec='E';break;
				case '15' : dec='F';break;
				default : break;
			}
		
						return dec.toString();
						
					}
					else {
			
				
	while(result!=0)
			{
			
			result=dec/divisor;
			result=FdraFAiuUfQBdxUeOysN(result);
			reminder=dec%divisor;	
			reminder=reminder.toString();
			switch(reminder)
			{
				case '10' : reminder='A';break;
				case '11' : reminder='B';break;
				case '12' : reminder='C';break;
				case '13' : reminder='D';break;
				case '14' : reminder='E';break;
				case '15' : reminder='F';break;
				default : break;
			}
			
			hex+=reminder;
			dec=result;
				
			}
			
		
					
			return invert(hex);
					}
	}
	
	
	
	
	function roundsmth(str){
		var stru=str.toString();
		var temp="";
		var transistor=0;
		var ke=0;
		if(stru.indexOf(".")!=-1){
		for(var i=0;i<stru.length;i++)
			
			{
			
				if(transistor==0){
				if(stru.charAt(i)!=".")
				{temp+=stru.charAt(i);
				
				
				}}
			
			if(stru.charAt(i)==".")
			{transistor=1;
				var czoped=i+1;
				if(stru.charAt(czoped)>=5){
					var que=i-1;
					var tempnum=stru.charAt(que);
					tempnum++;
					ke=temp;
					ke++;
					temp=ke;
						temp=temp.toString();			
				}
		}
			}
		}
		else {temp=stru;}
			
						return temp;
	}
	
	function cutstring(string, num)
	{string=string.toString();
	temp="";
	if(num>string.length){return alert("function cutstring have bad parrametrs");}
	else {
for(var j=0;j<num;j++){
	temp+=string.charAt(j);
	}
	}
	return temp;
	}
	
	
	function roundlast(num){
		num=num.toString();
		temp=num;
		if(num.indexOf(".")!=-1)
		{
			if((num.length-(num.indexOf(".")+1))>=2){
			
			if(num.charAt(num.length-1)>=5)
				
			{
				temp=cutstring(num, num.length-2);
				var g=num.charAt(num.length-2);
				g++;
				temp+=g;}
				
				else {temp=cutstring(num, num.length-1);}
				
		}
		else {temp=round(temp);}
		
		}
		
		
		
		return temp;
	}
	
	function roundmax(num){
		num=num.toString();
		var temp="";var dot=0;
		var co=num.length;
		if(num.indexOf(".")!=-1){
		
		for(var ke=num.length;ke>=0;ke--)
		{	Math.roun		
			if(num.charAt(ke)>=5&&num.charAt(ke)!='.'){temp=cutstring(num, ke);temp++;	}
						
			else {temp=cutstring(temp, ke);}
			}		
		}
		else {return num;}
		
		return temp;
		
	}
	function round(num){
		num=num.toString();var tempor="";
		if(num.indexOf(".")!=-1)
		{tempor=FdraFAiuUfQBdxUeOysN(num);
			if(num.charAt(num.indexOf(".")+1)>=5){tempor++;}
		}
		else {tempor=num;}
		return tempor;
		
	}
	
	function roundto(num, dots)
	{num=num.toString();var temp="";var tempor="";var how=0;var t=0;
if(num.indexOf(".")!=-1)
	{temp=num;
	how=num.indexOf(".")+dots;
	var check=how+1;
if(how+1<num.length&&check<=num.length){
	if(dots==0){ return temp=round(temp);}
	if(dots!=0){
		if(num.charAt(check)>=5)
			{temp=cutstring(num,how);
				t=num.charAt(how);t++;
				temp+=t;
				}
		else {temp=cutstring(num,check);}
						}
			
	}
else {return alert(" function roundto have wrong arguments" );}
		}
	
	
else {return num;}
	
		
		
	return temp;	
	}
	
	function FdraFAiuUfQBdxUeOysN(word){
		word=word.toString();
		var chopedword="";
		if(word.indexOf(".")!=-1){
			for(var i=0;i<word.indexOf(".");i++){chopedword+=word.charAt(i);}
		}else {chopedword=word;}return chopedword;}
	
	function id(co)
{
    
    co=co.toString();
    var e=document.getElementById(co);
    return e;
    
}

function invert(str)
{
	str=str.toString();
	temp="";
	for(var i=str.length;i>=0;i--)
		{
			temp+=str.charAt(i);
		}
	
	return temp;
	
	
}


function agclick(){var a=id("decnahex");var aa=id("decnahexanswer");aa.innerHTML=DECnaHEX(a.value);}
function bgclick(){var b=id("hexnadec");var bb=id("hexnadecanswer");bb.innerHTML=HEXnaDEC(b.value);}
function cgclick(){var c=id("round");var cc=id("roundanswer");var ccc=round(c.value);ccc.toString();cc.innerHTML=ccc;}
function dgclick(){var d=id("chop");var dd=id("chopanswer");dd.innerHTML=FdraFAiuUfQBdxUeOysN(d.value);}
function test() {var a=id("testbox"); var ku=id("textstring"); var ds=invert(ku.value); a.innerHTML=ds;}

