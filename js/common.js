
function getTextElementValueByID(elementID){
    const phoneTotalElement = document.getElementById(elementID);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementID, value ){
    const subTotalElement = document.getElementById(elementID);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueByID('phone-price');
    const currentCaseTotal = getTextElementValueByID('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('purchase-amount', currentSubTotal);
    
   

    // calculate Tax 
    const vatAmountString = (currentSubTotal * 0.1).toFixed(2);
    const vatAmount = parseFloat(vatAmountString)

    setTextElementValueById('vat-if-applicable', vatAmount);

    const finalAmount = currentSubTotal + vatAmount;
    setTextElementValueById('purchase-amount-after-tax', finalAmount)
}