function valide() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    var reg_name = /^[a-zа-я]+$/i;
    var pass_name = /^[a-z0-9]{5,100}/i;

    if (reg_name.test(name) == false) {
        alert("Неверное ФИО");
    }
    if (pass_name.test(password) == false) {
        alert("Неверный пароль");
    }
}

document.querySelector(".button").addEventListener("click", valide);



