function openPopup() {
    $("#loginPopup").fadeIn();
}

function closePopup() {
    $("#loginPopup").fadeOut();
}

function login() {

    let username = $("#username").val();
    let password = $("#password").val();

    if(username != "" && password != "") {
        alert("Login berhasil!");
    } else {
        alert("Username dan Password wajib diisi!");
    }

}