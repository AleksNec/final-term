(function (d) {

    // d = document

    const $body = d.querySelector('body');
    const $btn = d.querySelector('.nav-button');

    $btn.addEventListener('click', function () {

        $body.classList.toggle('show');

    });


})(document);



document.getElementById('form').addEventListener('submit', msg);
document.getElementById('msg-form-button').addEventListener('click', msg);
function msg(e) {

    e.preventDefault();
    document.body.classList.toggle('show-msg');

    // this.reset();
    // 
}
