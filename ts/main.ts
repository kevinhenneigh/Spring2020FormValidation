
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("button");
    formBtn.onclick = main
}

/**
 * Chande the message heading to a random color when it
 * is clicked
 */
function changeHeading(){
    let heading =<HTMLElement>this;
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    heading.style.color = "rgb(" + red + "," + green + "," + blue + ")";
}

function main():void{
    let msgHeading = document.createElement ("h2");
    msgHeading.innerText = "Processing form";
    msgHeading.setAttribute("class", "message");
    msgHeading.onclick = changeHeading;

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);

    setTimeout(function(){
        msgHeading.remove();
    }, 10000)

    resetErrorMessages();
    isTxtPresent("first-name", "First name is required");
    isTxtPresent("last-name", "Last name is required");
    
    // Validate date
    let dobBox =<HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;
    if(!isValidDate(dob)){
        let errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "Format should be mm/dd/yyyy";
        

    }
}

function isValidDate(input:string):boolean{
    // Validating mm/dd/yyyy and m/dd/yyyy
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);
}

/**
 * Resets all spans back to default text
 */

function resetErrorMessages():void {
    let allspans = document.querySelectorAll("form span");
    
    for (let i = 0; i < allspans.length; i++ ) {
        let currSpan = <HTMLElement>allspans[i];
        
        if (currSpan.hasAttribute("data-required")) {
                currSpan.innerText = "*"
        }
        else {
            currSpan.innerText = "";
        }
    }
}
/**
 * Returns true if the textbox with the given id 
 * has some text inside it
 * @param id The id of the <input type="text"> to validate
 * @param errMsg The nessage to display in the sibling span 
 * of the textbox 
 */
function isTxtPresent(id:string, errMsg:string):boolean {
    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = <HTMLElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
