function myFunc()
{
    alert("You called my function!");
}

function zoomIn()
{
    let smileyTag = document.getElementById("smiley");
    smileyTag.width = "1000";
    smileyTag.height = "1000";
}

function checkPasswords()
{
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    if (password1 != password2) {
	alert("Passwords don't match");
    }
    else if (password1 == password2 && password1.length < 8) {
	alert("Passwords match, but are not long enough");
    }
    else if (password1 == password2) {
	alert("Passwords match!");
    }

}

let currentSmiley = 0;
function nextPic() {
    currentSmiley = (currentSmiley + 1) % 5;
    let smileyTag = document.getElementById("smiley");
    smileyTag.src = "smiley"+currentSmiley+".jpeg";
}
function prevPic() {
    currentSmiley = (currentSmiley - 1);
    if (currentSmiley < 0) {
	currentSmiley = currentSmiley+5;
    }
    let smileyTag = document.getElementById("smiley");
    smileyTag.src = "smiley"+currentSmiley.toString()+".jpeg";
}

function changeCSSofpar() {
    let placeholderPar = document.getElementById("plpar");
    let borderTag = document.getElementById("bor").value;
    if (borderTag == "#FF0000") {
	placeholderPar.style.borderColor = "red";
    }
    else if (borderTag == "#00FF00") {
	placeholderPar.style.borderColor = "green";
    }
    else if (borderTag == "#0000FF") {
	placeholderPar.style.borderColor = "blue";
    }
    else if (!isNaN(borderTag)) {
	placeholderPar.style.borderWidth = borderTag + "px";
    }
	
    let backgroundTag = document.getElementById("bck").value;
    if (backgroundTag == "#FF0000") {
	placeholderPar.style.backgroundColor = "red";
    }
    if (backgroundTag == "#00FF00") {
	placeholderPar.style.backgroundColor = "green";
    }
    if (backgroundTag == "#0000FF") {
	placeholderPar.style.backgroundColor = "blue";
    }
}
