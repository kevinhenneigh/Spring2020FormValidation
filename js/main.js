window.onload = function () {
    var formBtn = document.querySelector("button");
    formBtn.onclick = main;
};
function main() {
    resetErrorMessages();
    isTxtPresent("first-name", "First name is required");
    isTxtPresent("last-name", "Last name is required");
}
function resetErrorMessages() {
    var allspans = document.querySelectorAll("form span");
    for (var i = 0; i < allspans.length; i++) {
        var currSpan = allspans[i];
        if (currSpan.hasAttribute("data-required")) {
            currSpan.innerText = "*";
        }
        else {
            currSpan.innerText = "";
        }
    }
}
function isTxtPresent(id, errMsg) {
    var txtBox = document.getElementById(id);
    var txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        var errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
