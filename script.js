let wavespectum = ["radio waves", "microwave", "infrared waves", "visible light", "ultraviolet waves", "x-rays", "gamma rays"];
let wavespectum_sliceable = ["radio waves", "microwave", "infrared waves", "visible light", "ultraviolet waves", "x-rays", "gamma rays"];
let ids  = ["radiowave", "microwave", "Infrared", "visiblelight", "ultravioletwaves", "xrays", "gammarays"]


function checkElement(Enteredinput) {
    input = Enteredinput.toLowerCase();
    for (let i = 0; i < wavespectum.length; i++) {
        if (input === wavespectum[i]) {
            console.log(wavespectum.length)
            console.log(wavespectum_sliceable.length)
            document.getElementById(ids[i]).innerHTML = wavespectum[i].charAt(0).toUpperCase() + wavespectum[i].slice(1);
            document.getElementById(ids[i]).style.backgroundColor = "#78FA5F";
            document.getElementById('inputwave').value = "";
            wavespectum_sliceable.splice(ids[i], 1);
            if (wavespectum_sliceable.length == 0) {
                document.getElementById("CB").classList.remove("hidden");
                document.getElementById("CBHolder").classList.remove("hidden");
                return;
            } else {
                return;
            }
        }
    }
}

function reset() {
    wavespectum_sliceable = wavespectum;
    for (let textBox = 0; textBox < wavespectum.length; textBox++) {
        document.getElementById(ids[textBox]).innerHTML = "Empty";
        document.getElementById(ids[textBox]).style.removeProperty("background");
    }
    document.getElementById("CB").classList.add("hidden");
    document.getElementById("CBHolder").classList.add("hidden");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("CBHolder").classList.add("hidden");
    document.getElementById("CB").classList.add("hidden");
    document.getElementById('inputwave').addEventListener('input', function(event) {
        let valueEntered = this.value;
        if (valueEntered !== "") {
            checkElement(valueEntered);
        }
    });
});