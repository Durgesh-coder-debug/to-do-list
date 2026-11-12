
let input = document.querySelector('input');
let adds = document.querySelector('.add');
let body = document.querySelector('.container');

function print() {
    let val = input.value;

    if (val.trim() === "") return;

    let task = document.createElement('div');
    task.classList.add('task');

    let check = document.createElement('input');
    check.type = 'checkbox';

    let p = document.createElement('p');
    p.innerText = val;

    let btn = document.createElement('button');
    btn.classList.add('delete');
    btn.innerText = 'Delete';

    task.appendChild(check);
    task.appendChild(p);
    task.appendChild(btn);

    body.appendChild(task);

    function show() {
        p.style.textDecoration = 'line-through';
        p.style.color = 'gray';
    }

    function show1() {
        p.style.textDecoration = 'none';
        p.style.color = 'black';
    }

    check.addEventListener('click', () => {
        if (check.checked) {
            show();
        }
        else {
            show1();
        }
    });

    function removed() {
        task.remove();
    }

    btn.addEventListener('click', removed);

    input.value = "";
}

adds.addEventListener('click', print);
