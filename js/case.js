/*
1. add evet listener to the case plus button
2. get the value inside the cae number field ( input field)
3. convert the case number to an integer
4. calculate the new case number
5. set the value to the case number field
internal

*/

function updateCaseNuber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-price')
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNuber(true)
    updateCaseTotalPrice(newCaseNumber)
    calculateSubTotal()
    
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNuber(false)
    updateCaseTotalPrice(newCaseNumber)
    calculateSubTotal()
     
})