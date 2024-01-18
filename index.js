const textInput = document.querySelector('.main__text-area');
const buttonInput = document.querySelector('.main__botton');
const list = document.querySelector('.main__ul');


buttonInput.addEventListener('click',(e=>{
    if(textInput.value === ''){
        alert('text input vacio');
    } else {
        madeListItem();
        textInput.value = ''
    }
}))

textInput.addEventListener('keydown',(e => {
    if (e.code == 'Enter'){
        if(textInput.value === ''){
            alert('text input vacio');
        } else {
            madeListItem();
            textInput.value = ''
        }
    }
}))

const madeListItem = () => {
    const item = document.createElement('li');
    const iconContainer = document.createElement('div');
    const textContainer = document.createElement('div');

    const checker = document.createElement('div');
    const trash = document.createElement('div'); 
    const edit = document.createElement('div');
    const text = document.createElement('div');

    const checkIcon = new Image();
    checkIcon.src = 'srs/controlar.png'
    const editIcon = new Image();
    editIcon.src = 'srs/lapiz.png'
    const trashIcon = new Image();
    trashIcon.src = 'srs/basura.png'

    checker.appendChild(checkIcon);
    checker.classList.add('main__item--check')
    trash.appendChild(trashIcon);
    trash.classList.add('main__item--trash')
    edit.appendChild(editIcon)
    edit.classList.add('main__item--edit')

    text.innerHTML = textInput.value
    text.classList.add('main__item--text')

    textContainer.appendChild(edit)
    textContainer.appendChild(text)
    
    iconContainer.appendChild(checker)
    iconContainer.appendChild(trash)

    textContainer.classList.add('main__item__text-container')
    iconContainer.classList.add('main__item__icons');
        
    item.appendChild(textContainer)
    item.appendChild(iconContainer);
    item.classList.add('main__item')
    
    list.appendChild(item)
    
    edit.addEventListener('click',(e => {
        const editText = document.createElement('input');
        editText.type = "text";
        editText.value = text.textContent;
        editText.classList.add('main__item--text--edit');
        textContainer.replaceChild(editText, text);
        editText.focus();
        window.addEventListener('keydown',(e => {
            if (e.code == 'Enter'){
                text.innerHTML = editText.value;
                textContainer.replaceChild(text,editText);
                console.log(text);
            }
        }));
    }))

    checker.addEventListener('click',(e => {
        text.style = `text-decoration-line: line-through;`
        item.style = `opacity: 0.5`
    }))

    trash.addEventListener('click',(e => {
        list.removeChild(item)
    }))
}
