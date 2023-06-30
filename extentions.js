function ParabolicSmooth(x) {
    x = x - 1;
    let y = Math.abs(Math.pow(x, 2) - 1);
    return y;
}

function GetHeightOfElement(element) {
    let rect = element.getBoundingClientRect();
    return (rect.bottom - rect.top);
}

function GetWidthOfElement(element) {
    let rect = element.getBoundingClientRect();
    return (rect.right - rect.left);
}

function ConvertViewport(value, mode = "auto") {
    if (mode == "auto") {
        let type = value[value.length - 2] + value[value.length - 1];

        if (type == "vw") {
            return (screen.width / 100 * parseFloat(value));
        }
        else if (type == "vh") {
            return (screen.height / 100 * parseFloat(value));
        }
        else {
            return;
        }
    }
    else if (mode == "width") {
        return (screen.width / 100 * parseFloat(value));
    }
    else if (mode == "height") {
        return (screen.height / 100 * parseFloat(value));
    }
    else {
        return;
    }
}

function SmoothScroll(id, mode = "none", offset = 0) {
    if (mode == "center") {
        let elementRect = document.getElementById(id).getBoundingClientRect();
        var toPosition = (elementRect.top + elementRect.bottom) / 2 - window.innerHeight / 2 - offset;
    }
    else {
        var toPosition = document.getElementById(id).getBoundingClientRect().top - offset;
    }

    window.scrollBy({
        top: toPosition,
        behavior: 'smooth'
    });
}

var lastScreenPosition = 0;

function OpenBurger() {
    lastScreenPosition = document.body.getBoundingClientRect().top * -1;

    document.getElementsByClassName("burger")[0].style.width = "100vw";
    document.getElementsByClassName("burger")[0].style.opacity = "1";
    document.getElementsByClassName("burger__links")[0].style.transition = "opacity ease-out 0.1s 0.4s";
    document.getElementsByClassName("burger__links")[0].style.opacity = "1";
    

    setTimeout(() => {
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
        document.getElementById("html").style.overflowY = "hidden";
    }, 400);
}

function CloseBurger() {
    document.getElementsByClassName("burger")[0].style.width = "0";
    document.getElementsByClassName("burger")[0].style.opacity = "0";
    document.getElementsByClassName("burger__links")[0].style.transition = "opacity ease-out 0.1s";
    document.getElementsByClassName("burger__links")[0].style.opacity = "0";

    document.body.style.height = "";
    document.body.style.overflowY = "";
    document.getElementById("html").style.overflowY = "";

    window.scrollBy({
        top: lastScreenPosition
    });
}
