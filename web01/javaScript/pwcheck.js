function passwordCheck(p1, p2) {
    if (p2.parentNode.getElementsByTagName("span").length == 0) {
        var message = document.createElement("span");
        p2.parentNode.appendChild(message);
    } else {
        var message = p2.parentNode.getElementsByTagName("span")[0];
    }

    if (p1.value == p2.value) {
        p1.className = "form-control valid";
        p2.className = "form-control valid";
        message.className = "valid-msg";
        message.innerText = "정상적인 비밀번호 입니다.";
    } else {
        p1.className = "form-control invalid";
        p2.className = "form-control invalid";
        message.className = "invalid-msg";
        message.innerText = "비밀번호가 일치하지 않습니다.";
    }
}