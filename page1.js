function openPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username != "" && password != "") {
        alert("Login berhasil!");
    } else {
        alert("Username dan Password wajib diisi!");
    }

}