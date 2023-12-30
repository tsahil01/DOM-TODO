
let input = document.querySelector('#taskInput')
const btn = document.querySelector('.add-btn')

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey) {
        if (event.key === 'r' || event.key === 'R') {
            event.preventDefault();
        }
    }
});

btn.addEventListener('click', ()=>{
    let li = document.createElement('li')
    li.className = 'task list-none'
    const text = document.createTextNode(`${input.value}`)
    li.append(text)
    document.querySelector('#taskList').append(li)
    input.value = ''

    li.addEventListener('click', () => {
        if(li.style.textDecoration == ''){
            li.style.textDecoration = 'line-through'
        } else{
            li.style.textDecoration = ''
        }
    });
})



