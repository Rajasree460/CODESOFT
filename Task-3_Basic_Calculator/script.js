let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML=='='){
      try{
        string=String(eval(string));
        document.querySelector('input').value = string;
      }
      catch{
        document.querySelector('input').value = 'ERROR';
        string='';
      }
    }
    else  if(e.target.innerHTML=='C'){
      string="";
      document.querySelector('input').value = string;
    }
    else  if(e.target.innerHTML=='←'){
      string=string.slice(0,-1);
      document.querySelector('input').value = string;
    }
    else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
const cal=document.querySelector('input');
const cal_width=cal.scrollWidth;
window.addEventListener('click',()=>{
    setTimeout(()=>{
        cal.scrollLeft=cal_width;
    });

})


})
