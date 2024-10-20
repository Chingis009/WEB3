function calculatePrice() {
    let basePrice = 100; // Starting price

    let education = parseFloat(document.getElementById("education").value);

    let networth = parseFloat(document.getElementById("networth").value);

    let caste = parseFloat(document.getElementById("caste").value);

    let skills = 0;
    if (document.getElementById("musician").checked) skills += parseInt(document.getElementById("musician").value);
    if (document.getElementById("cook").checked) skills += parseInt(document.getElementById("cook").value);
    if (document.getElementById("easygoing").checked) skills += parseInt(document.getElementById("easygoing").value);
    if (document.getElementById("sings").checked) skills += parseInt(document.getElementById("sings").value);

    let ageElements = document.getElementsByName("age");
    let ageCoefficient = 1;
    for (let i = 0; i < ageElements.length; i++) {
        if (ageElements[i].checked) {
            ageCoefficient = parseFloat(ageElements[i].value);
            break;
        }
    }

    let reputationCoefficient = 1;
    if (document.getElementById("gossipsParents").checked) reputationCoefficient *= parseFloat(document.getElementById("gossipsParents").value);
    if (document.getElementById("gossipsCharacter").checked) reputationCoefficient *= parseFloat(document.getElementById("gossipsCharacter").value);
    if (document.getElementById("generalGossip").checked) basePrice += parseInt(document.getElementById("generalGossip").value); 

    let finalPrice = basePrice * education * networth * ageCoefficient * reputationCoefficient;
    finalPrice += caste + skills;

    document.getElementById("result").innerText = "Final Price: $" + finalPrice.toFixed(2);
    document.getElementById("result").style.color = "blue";
}