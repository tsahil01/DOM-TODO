
let input = document.querySelector('#taskInput')
const btn = document.querySelector('.add-btn')

btn.addEventListener('click', ()=>{
    let li = document.createElement('li')
    li.className = 'task'
    const text = document.createTextNode(`${input.value}`)
    li.append(text)
    document.querySelector('#taskList').append(li)

    li.addEventListener('click', () => {
        if(li.style.textDecoration == ''){
            li.style.textDecoration = 'line-through'
        } else{
            li.style.textDecoration = ''
        }
    });
})



