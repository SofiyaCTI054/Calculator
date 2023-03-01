let str="";
let buttons=document.querySelectorAll('.buttons')
Array.from(buttons).forEach((butt) => {
    butt.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str)
        document.querySelector('#display').innerHTML=str;
        }
        else if(e.target.innerHTML=='C'){
            str="";
        document.querySelector('#display').innerHTML=str;
    }
        else{
        console.log(e.target)
        str = str+ e.target.innerHTML;
        document.querySelector('#display').innerHTML=str;}
    })
});
