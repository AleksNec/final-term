(function (d) {

    // d = document

    const $body = d.querySelector('body');
    const $btn = d.querySelector('.nav-button');

    $btn.addEventListener('click', function () {

        $body.classList.toggle('show');

    });


})(document);


// const body = document.body;
// const menu = document.getElementById('menu');

document.getElementById('submit-form').addEventListener('click', msg);
document.getElementById('msg-form-button').addEventListener('click', msg);


function msg() {
    e.preventDefault();
    document.body.classList.toggle('show-msg');
    // this.reset();
    // 
}