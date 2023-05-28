function calculate() {
    let width = document.getElementById('current-width').value;
    let height = document.getElementById('current-height').value;
    let newWidth = document.getElementById('new-width').value;

    let getNewHeight = ((height / width) * newWidth).toFixed(0);

    showResult(newWidth, getNewHeight);
}


function showResult(newWidth, getNewHeight) {
    let result = document.getElementById('show-result');
    result.innerHTML = '';
    result.innerHTML += /*html*/ `
        <div>RESULT: Your new image size is ${newWidth} x ${getNewHeight}</div>
        <button class="clear-btn" onclick="clearInputFields()">Clear all</button>
    `;
}


function clearInputFields() {
    document.getElementById('current-width').value = '';
    document.getElementById('current-height').value = '';
    document.getElementById('new-width').value = '';
    document.getElementById('show-result').innerHTML = '';
}
