'use scrict'

var input = document.getElementById('input'),
    equals = document.getElementById('result'),
    clear = document.getElementById('memoryClear'),
    memoryAdd = document.getElementById('memoryAdd'),
    memorySub = document.getElementById('memorySub'),
    memorySave = document.getElementById('memorySave'),
    nums = document.querySelectorAll('.num'),
    ops = document.querySelectorAll('.operation'),
    theNum = '',
    oldNum = '',
    memory = '',
    resultNum,
    hasPoint = false,
    operation;

var setNum = function() {
    const value = this.dataset.val
    const isPoint = value === '.'

    if (isPoint) {
        if (hasPoint) {
            return
        }
        hasPoint = true
    }

    if (resultNum) {
        theNum = value;
        resultNum = '';
    } else {
        theNum += value;
    }
    input.innerHTML = theNum;
}

var moveNum = function() {
    hasPoint = false
    oldNum = theNum;
    theNum = '';
    operation = this.getAttribute('data-ops');
    equals.setAttribute('data-result', '');
}

var displayNum = function() {
    hasPoint = false
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);
    switch (operation) {
        case 'plus':
            resultNum = oldNum + theNum;
            break;
  
        case 'minus':
            resultNum = oldNum - theNum;
            break;
  
        case 'times':
            resultNum = oldNum * theNum;
            break;
  
        case 'divided by':
            resultNum = oldNum / theNum;
            break;

        default:
        resultNum = theNum;
    }
    resultNum = +resultNum.toFixed(9)
    input.innerHTML = resultNum;
    equals.setAttribute('data-result', resultNum);
    oldNum = 0;
    theNum = resultNum;
}

var memoryOp = function() {
    switch (operation) {
        case 'memorySave':
            memory = theNum;
            break;

        case 'memorySub':
            memory = memory.length > 0 ? (memory + '-' + theNum) : (theNum.length > 0 ? theNum : '');
            break;

        case 'memoryAdd':
            memory = memory.length > 0 ? (memory + '+' + theNum) : (theNum.length > 0 ? theNum : '');
            break;
    }
    input.innerHTML = resultNum;
    equals.setAttribute('data-result', resultNum);
    oldNum = 0;
    theNum = resultNum;
}

var memoryClear = function() {
    memory = '';
}

var clearAll = function() {
    oldNum = '';
    theNum = '';
    input.innerHTML = '0';
    equals.setAttribute('data-result', resultNum);
}

for (var i = 0; i < nums.length; i++) {
    nums[i].onclick = setNum;
}

for (var i = 0; i < ops.length; i++) {
    ops[i].onclick = moveNum;
}

equals.onclick = displayNum;
clear.onclick = clearAll;
memorySave.ondblclick = memoryClear;
