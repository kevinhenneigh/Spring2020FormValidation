window.onload = function () {
    var formBtn = document.querySelector("button");
    formBtn.onclick = main;
};
function main() {
    isTxtPresent("first-name", "First name is required");
    isTxtPresent("last-name", "Last name is required");
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
