var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slider");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3500); // Change image every 3.5 seconds
}

function submitEmail() {
    let email = document.getElementById("email").value;

    if (email.length < 1) {
        return;
    }

    document.getElementById("form-email").remove();

    let textWelcome = document.getElementById("text-finished");
    textWelcome.innerHTML = `<p class="moreinfo-success-message">Terimakasih telah memasukan email anda, kami akan mengirimkan berita terkini kepada email berikut: ${email}</p>`
    textWelcome.style.display = ""
}