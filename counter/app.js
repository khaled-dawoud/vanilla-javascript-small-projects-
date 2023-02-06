const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

let count = 0;
btns.forEach( (btn) => {
    btn.addEventListener("click" , (e)=>{
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }else if(style.contains('increase')){
            count++;
        }else{
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});