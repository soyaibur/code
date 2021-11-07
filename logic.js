const btn=document.getElementById('btn');
    
btn.addEventListener('click',addButton)

function addButton(){
    const div = document.createElement('button')
    div.classList.add('btn')
    div.innerHTML = btn.innerHTML
    btn.after(div)
}
