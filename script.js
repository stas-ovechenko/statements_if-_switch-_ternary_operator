// let sign , oneNumber , twoNumber , sumNumber , newOperations , historyOperations;

// let history = [];

// do {
//     do {
//     do {
//         sign = prompt('Enter sign +');
//         if ((sign !== '+')) {
//             alert('Failed information');
//         }
//     } while ((sign !== '+'));
//     do {
//         oneNumber = prompt('Enter first number');
//         twoNumber = prompt('Enter second number');
//         if ((isNaN(oneNumber) || isNaN(twoNumber))) {
//             alert('Failed information');
//         } else {
//             sumNumber = Number(oneNumber) + Number(twoNumber);
//             alert('Operation ' + '+' + ' finished with result ' + sumNumber);
//             history.push(sumNumber);
//         };
//     } while ((isNaN(oneNumber) || isNaN(twoNumber)));
//     newOperations = confirm('Продолжить дальше?');
//     historyOperations = confirm('Посмотреть историю?');
//     if (historyOperations !== false) {
//         console.log('History',history);
//     }
//     } while (historyOperations !== false, sign = false); 
// } while ((newOperations !== false));

let sign , oneNumber , twoNumber , result , newOperations , historyOperations;

let history = [];

do {
    do {
        do {
            sign = prompt('Enter operation +  -  *  /  sin  cos  ^');
            if ((sign !== '+') && (sign !== '-') && (sign !== '*') && (sign !== '/') && (sign !== 'sin') && (sign !== 'cos') && (sign !== '^')) {
                alert('Error');
            };
        } while ((sign !== '+') && (sign !== '-') && (sign !== '*') && (sign !== '/') && (sign !== 'sin') && (sign !== 'cos') && (sign !== '^'));
        do {
            oneNumber = prompt('Enter the first number');
            twoNumber = prompt('Enter the second number');
            if ((isNaN(oneNumber) || isNaN(twoNumber))) {
                alert('Error');
            } else if (sign === '+') {
                result = Number(oneNumber) + Number(twoNumber);
                alert('Operation ' + '+' + ' finished with result ' + result);
                history.push('Operation ' + '+' + ' finished with result ' + result);
            } else if (sign === '-') {
                result = Number(oneNumber) - Number(twoNumber);
                alert('Operation ' + '-' + ' finished with result ' + result);
                history.push('Operation ' + '-' + ' finished with result ' + result);
            } else if (sign === '*') {
                result = Number(oneNumber) * Number(twoNumber);
                alert('Operation ' + '*' + ' finished with result ' + result);
                history.push('Operation ' + '*' + ' finished with result ' + result);
            } else if (sign === '/') {
                result = Number(oneNumber) / Number(twoNumber);
                alert('Operation ' + '/' + ' finished with result ' + result);
                history.push('Operation ' + '/' + ' finished with result ' + result);
            } else if (sign === 'sin') {
                Math.sin(oneNumber);
                Math.sin(twoNumber);
                alert('Operation ' + 'sin' + ' finished with result ' + Math.sin(oneNumber) + ' ' + Math.sin(twoNumber));
                history.push('Operation ' + 'sin' + ' finished with result ' + Math.sin(oneNumber) + ' ' + Math.sin(twoNumber));
            } else if (sign === 'cos') {
                Math.cos(oneNumber);
                Math.cos(twoNumber);
                alert('Operation ' + 'cos' + ' finished with result ' + Math.cos(oneNumber) + ' ' + Math.cos(twoNumber));
                history.push('Operation ' + 'cos' + ' finished with result ' + Math.cos(oneNumber) + ' ' + Math.cos(twoNumber));
            } else if (sign === '^') {
                result = Number(oneNumber) ** Number(twoNumber);
                alert('Operation ' + '^' + ' finished with result ' + result);
                history.push('Operation ' + '^' + ' finished with result ' + result);
            } else {
                console.log();
            };
        } while ((isNaN(oneNumber) || isNaN(twoNumber)));
    newOperations = confirm('Continue further?');
    if (newOperations === false && (historyOperations = true)) {
        historyOperations = confirm('Watch a story?');
    };
    if (historyOperations === true) {
        alert(history.join('\n'));
    };
    } while (newOperations === true); 
} while (newOperations === true && (sign = false));