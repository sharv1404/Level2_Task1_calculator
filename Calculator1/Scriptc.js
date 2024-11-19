let lastResult = null;

function appendValue(value) {
    const expressionField = document.getElementById('expression');
    if (value === 'ans') {
        expressionField.value += lastResult !== null ? lastResult : '';
    } else {
        expressionField.value += value;
    }
}

function clearDisplay() {
    document.getElementById('expression').value = '';
    document.getElementById('result').textContent = '';
}

function deleteLast() {
    const expressionField = document.getElementById('expression');
    expressionField.value = expressionField.value.slice(0, -1);
}

function calculate() {
    const expressionField = document.getElementById('expression');
    const resultField = document.getElementById('result');
    try {
        const evaluatedResult = eval(expressionField.value.replace('√', 'Math.sqrt'));
        resultField.textContent = evaluatedResult;
        lastResult = evaluatedResult;
    } catch (error) {
        resultField.textContent = 'Error';
    }
}