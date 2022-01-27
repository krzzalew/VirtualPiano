const keys = ['A','S','D','F','G','H','J','W','E','T','Y','U'];
const blackKeys = ['W','E','T','Y','U'];

document.addEventListener("keydown", press);
document.addEventListener("keyup", unpress);

// Function checks if pressed key is present in 'keys' array. If so, it calls 'click' function (once), otherwise sends
// message to the console.
function press(event) {
    if (event.repeat) return;
    let pressed = event.key.toUpperCase();
    if (keys.includes(pressed)) {
        click(pressed);
    } else {
        console.log("Wrong key");
    }
}

// Function checks released key's presence in 'keys' array. Calls 'unclick' function if positive.
function unpress(event) {
    let pressed = event.key.toUpperCase();
    if (keys.includes(pressed)) {
        unclick(pressed);
    }
}

// Assign 'mousedown' and 'mouseup' events for all key buttons used.
for (let key of keys) {
    document.getElementById(key).addEventListener("mousedown", function () {
        click(key);
    });
    document.getElementById(key).addEventListener("mouseup", function () {
        unclick(key);
    });
}

// Plays sound file on click and changes <kbd> element style.
function click(key) {
    let sound = new Audio('audio/' + key + '.mp3');
    sound.play();
    if (blackKeys.includes(key)) {
        document.getElementById(key).style.backgroundPosition = 'top';
    } else {
        document.getElementById(key).style.transform = 'scaleY(0.99)';
    }
}

// Restores <kbd> element style on key/mouse release.
function unclick(key) {
    if (blackKeys.includes(key)) {
        document.getElementById(key).style.backgroundPosition = 'bottom';
    } else {
        document.getElementById(key).style.transform = 'none';
    }
}