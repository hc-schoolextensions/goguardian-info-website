var input = document.getElementById("floatingurl");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("loadinfo").click();
    }
});

function loadinfo() {
    if (input.value.startsWith('://blocked.goguardian.com/', 5)) {
        window.location = `${location.protocol}//${location.host}/info.html#${input.value}`;
    } else {
        alert('Please enter a valid GoGuardian block page URL.', 'danger');
    }
}

function alert(message, type) {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">${message}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
    document.getElementById('ap').append(wrapper);
    setTimeout(function () {
        document.getElementsByClassName('btn-close')[0].click()
    }, 10000);
}