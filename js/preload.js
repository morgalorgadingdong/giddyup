let body = document.getElementById('the-body')
// setTimeout(loadBody(), '10000000')
// function loadBody() {
//     body.classList.remove('is-preload')
//     console.log('reveal')
// }

setTimeout(function() {
    body.classList.add('is-preload-reveal')
    // setTimeout(function() {
    //     body.classList.remove('is-preload')
    // }, '500')
}, '500')