'use strict'
// const input = document.getElementById('input')
// const button = document.getElementById('myBtn')
// const xhr = new XMLHttpRequest()
// function getExchangeRate() {
//     xhr.open('GET', 'http://www.nbrb.by/API/ExRates/Rates/145')
//     xhr.onreadystatechange = () => {
//         console.log({ readyState: xhr.readyState, status: xhr.status })
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const response = JSON.parse(xhr.responseText)
//             console.log(response)
//             const offRate = response.Cur_OfficialRate
//             return function updateRate() {
//                 input.value = offRate
//             }
//         }
//         if (xhr.readyState !== 4) return;
//         if (xhr.status !== 200) {
//             alert( 'ошибка: ' + (xhr.status ? xhr.statusText : 'запрос не удался') );
//             return;
//         }
//     }
//     xhr.send()
// }
// button.addEventListener('click', getExchangeRate)

// decorated XHR
function ajax(method = 'GET', url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)

    xhr.onreadystatechange = () => {
        console.log({ readyState: xhr.readyState, status: xhr.status })
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)
            callback && callback(response)
        } else {
            new Error(xhr.status ? xhr.statusText : 'Request failed')
        }
    }

    xhr.send()
    return xhr
}

const updateRate = (data) => {
    const input = document.getElementById('input')
    const offRate = data.Cur_OfficialRate
    input.value = offRate
}
const getRates = () => ajax('GET', 'http://www.nbrb.by/API/ExRates/Rates/145', updateRate)
document.getElementById('myBtn').addEventListener('click', getRates)
