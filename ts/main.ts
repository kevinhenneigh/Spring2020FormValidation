
window.onload = function(){
    let formBtn = <HTMLElement>document.querySelector("button");
    formBtn.onclick = main
}

function main():void{
    resetErrorMessages();
    isTxtPresent("first-name", "First name is required");
    isTxtPresent("last-name", "Last name is required");
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
