function changeColor(red, green, blue) {
    r_span = document.getElementsByClassName(red.getAttribute("for-set"))[red.getAttribute("for-set-index")];
    g_span = document.getElementsByClassName(green.getAttribute("for-set"))[green.getAttribute("for-set-index")];
    b_span = document.getElementsByClassName(blue.getAttribute("for-set"))[blue.getAttribute("for-set-index")];
    
    r_span.innerText = "R : " + red.value;
    g_span.innerText = "G : " + green.value;
    b_span.innerText = "B : " + blue.value;

    let color_picker = document.getElementsByClassName("color-picker")[0];
    color_picker.style.backgroundColor = "rgb( " + red.value + ", " + green.value + ", " + blue.value + " )";
}