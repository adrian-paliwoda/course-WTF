function Save(event){
    event.preventDefault();
    const textFromTextBox = document.getElementById('text')?.value;
    if (textFromTextBox){
        window.localStorage.setItem('text', textFromTextBox)
    }
}
function Load(event){
    event.preventDefault();
    const text = window.localStorage.getItem('text');
    if (text){
        document.getElementById('text').value = text;
    }
}

function SaveFromFlowBite(event){
    event.preventDefault();
    const textFromTextBox = document.getElementById('message')?.value;
    if (textFromTextBox){
        window.localStorage.setItem('message', textFromTextBox)
    }
}
function LoadFromFlowBite(event){
    event.preventDefault();
    const text = window.localStorage.getItem('message');
    if (text){
        document.getElementById('message').value = text;
    }
}

document.getElementById('loadButton').addEventListener('click', Load);
document.getElementById('saveButton').addEventListener('click', Save);

document.getElementById('LoadFromFlowBite').addEventListener('click', LoadFromFlowBite);
document.getElementById('SaveFromFlowBite').addEventListener('click', SaveFromFlowBite);