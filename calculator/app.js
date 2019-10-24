
document.onclick = handleClick;
const NUMBERS = [0,1,2,3,45,6,7,8,9];
const OPERATORS = ["%","÷","↶","C","(",")","-","x","x2","√","+","="];
const MAX_DISPLAY_CHAR = 18; // Calulator display can only accomodate 18 characters


function isOperator(char) {
    if (OPERATORS.includes(char)) return true;
    return false;
}

function applyOperator(operator, prevValue, currentValue) {
    switch (operator) {
        case "%":
            return (Number(currentValue) / 100);   
        case "÷":
            return (Number(prevValue) / Number(currentValue));     
        case "x":
            return (Number(prevValue) * Number(currentValue));     
        case "÷":
            return (Number(prevValue) / Number(currentValue));     
        case "-":
            return (Number(prevValue) / Number(currentValue));     
        case "√":
            return (Math.sqrt(currentValue));     
        case "+":
            return (Number(prevValue) + Number(currentValue));   
        case "x2":
            // option 2: Math.pow(currentValue, 2);
            return (Number(currentValue) ** 2);    
        default:
            return 0;
    }
}

// group all the inputs properly
function groupInputs(inputs) {
    let res = '';
    inputs.map( val => {
        if (isOperator(val)) {
            res += ','+val+',';

        } else {
            res += ''+val;
        }
    });
    return res.split(',');
}

function handleClick(e) {
    const id  = e.target.id;
    let el = document.getElementById('display')
    let vals = el.innerHTML;
    if (
        // prevent having any oprator as the first input except "(" that can begin an operation
        vals === '' && 
        isOperator(id) && 
        id !== '('
    ) {
        return;
    }
    if (id === 'C') { 
        // clear all
        el.innerHTML = '';
    } else if(id === '↶') {
        // cancels the last action
        if (vals.length === 0) return;
        el.innerHTML = vals.split('').splice(0, vals.length - 1).join('');
    } else if (id === '=') {
        // compute the result
        const v = vals.split('');
        const inputs = groupInputs(v);
        let len = inputs.length;
        let result = inputs[0];
        for (let i = 1; i < len; i++) {
            if (isOperator(inputs[i])) {
                result = applyOperator( inputs[i], result, inputs[i+1])
            }
        }
        document.getElementById('display').innerHTML = result;
    } else {
        const lastElement = vals[vals.length - 1];
        const currentDisplayLength = vals.length;
        if( // prevents have two operators after each other
            isOperator(lastElement) &&
            isOperator(id)
        ) {
            return;
        }
        if (currentDisplayLength === MAX_DISPLAY_CHAR) {
            // privents having element overflow the calculator display
            return; 
        }
        // display limitation
        el.innerHTML = vals + id;
    }
}

