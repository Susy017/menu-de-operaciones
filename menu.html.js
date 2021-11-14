body {
	
	background-image: url(img/noche.jpg);
	background-position: center;
	background-repeat: repeat;
	background-size: cover;
}
}
.menu{
	list-style: none;
	padding: 0;
	
	width: 1000%;
	max-width: 600px;
	margin: auto;
}

}
nav{
    text-align: right;
    padding: 30px 50px 0 0;

}

nav > a{
    color:#fff;
    font-weight: 300;
    text-decoration: none;
    margin-right: 10px;
}

nav > a:hover{
    text-decoration: underline;
}

.slider{
	width: 100%;
	margin: auto;
	overflow: hidden;
}

.slider ul{
	display: flex;
padding: 0;
width: 400%;

animation: cambio 20s infinite alternate;
animation-timing-function: ease-in;	
}

.slider li{
 width: 100%;
 list-style: none;
}

.slider img{
	width: 70%;
}

@keyframes cambio {
	0%{margin-left: 0;}
    20%{margin-left: 0;}

    25%{margin-left: -100%;}
    45%{margin-left: -100%;}

    50%{margin-left: -200%;}
    70%{margin-left: -200%;}

    75%{margin-left: -300%;}
    100%{margin-left: -300%;}

}
 p{
    font-size: 20px;
    color:#FFFFFF;
}
 ol{
    font-size: 20px;
    color:#78FF01;
}
table,td,th,tr{
border-color:#8E44AD  ;
color:#8E44AD ;
font-family:Times New Roman;
font-size:18px;
text-align:center;
table-layout: auto; width: 30%;
margin-right: auto;
margin-left: auto;
}
/* Boton de Neon */

*
{
    margin: 0;
    padding: 0;
   
    box-sizing: border-box;
}
body
{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;    
}
a
{
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 40px 0;
    color: #03e9f4;
    font-size: 24px;
    text-decoration: none;
    text-transform: uppercase;
    /*overflow: hiddem;*/
    transition: 0.5s;
    letter-spacing: 1px;
}
a:hover
{
    background: #03e9f4;
    color: #8E44AD;
    box-shadow: 0 0 5px #8E44AD,
                0 0 25px #8E44AD,
                0 0 50px #8E44AD,
                0 0 200px#8E44AD;
}
a span
{
    bottom: 0;
    right: -100;
    width: 100px;
    height: 2px;
    background: linear-gradient(270deg,transparent,#8E44AD);
    animation: animate1 1s linear infinite;
    animation-delay: 0.5s;
}
@keyframes animate2
{
    0%
    {
        top: -100;
    }
    50%,100%
    {
        left: 100%;
    }
    
}