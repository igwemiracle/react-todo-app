// Select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

//When i submit the form add a new element
form.addEventListener('submit', e => {
    e.preventDefault()


    //1 Create new element
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')

    //2 Add that item to the list
    list.appendChild(item)

    //3 Clear Input
    input.value = ''
    //4 Setup event listener to delete item when clicked
    item.addEventListener('click', () => {
        list.removeChild(item)
    })
})