function generateYear(element) {
    let date = new Date();
    if (element.children.length <= 1) {
        for(let year = date.getFullYear(); year >= 1970; year--) {
            let option = document.createElement("option");
            option.setAttribute("value", year);
            option.innerText = year;
            element.appendChild(option)
        }
    }
}

function generateMonth(element) {
    if (element.children.length <= 1) {
        for(let month = 1; month <= 12; month++) {
            let option = document.createElement("option");
            option.setAttribute("value", month);
            option.innerText = month;
            element.appendChild(option)
        }
    }
}

function generateDay(element) {
    if (element.children.length <= 1) {
        for(let day = 1; day <= 31; day++){
            let option = document.createElement("option");
            option.setAttribute("value", day);
            option.innerText = day;
            element.appendChild(option);
        }
    }
}