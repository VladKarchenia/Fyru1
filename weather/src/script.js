'use strict';

let instance

class LocationService {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance
    }

    getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })
    }
}

const locationManager = new LocationService()
locationManager.getLocation().then(...)










ymaps.ready(init)
// var suggestView = ymaps.SuggestView('search', {results: 1, offset: [20, 30]});

function init() {
    const geolocation = ymaps.geolocation,
        myMap = new ymaps.Map('map', {
            center: [55.76, 37.64],
            zoom: 7
        })
    geolocation.get({
        provider: 'browser',
        mapStateAutoApply: true
    }).then(function (result) {
        result.geoObjects.options.set('preset', 'islands#redDotIcon')
        result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Мое местоположение'
        })
        myMap.geoObjects.add(result.geoObjects)
    })
}

// function showAddress (value) {
//     var geocoder = ymaps.geocode(value)
//     geocoder.then(
//         function (res) {
//             var coordinates = res.geoObjects.get(0).geometry.getCoordinates()
//             var map = ymaps.Map('map', {
//                 center: coordinates,
//                 zoom: 9,
//             })
//             map.geoObjects.add(ymaps.Placemark(
//                 coordinates, {'preset': 'islands#redDotIcon'}
//             ))
//         }
//     )
// }


    // map.addOverlay(geocoder);

//     YMaps.Events.observe(geocoder, geocoder.Events.Load, function () {
//         if (this.length()) {
//             alert('Найдено :' + this.length());
//             map.addOverlay(this.get(0));
//             map.panTo(this.get(0).getGeoPoint());
//         } else {
//             alert ('Ничего не найдено')
//         }
//     })
//     YMaps.Events.observe(geocoder, geocoder.Events.Fault, function (error) {
//         alert('Произошла ошибка: ' + error.message)
//     });
// }
// document.getElementById('search').addEventListener('submit', showAddress, false)

navigator.geolocation.getCurrentPosition(function(position) {
    const DAY_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const MON_NAME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const TODAY = new Date()
    const TOMORROW = new Date(TODAY.getTime() + (24 * 60 * 60 * 1000))
    const dtString = DAY_NAME[TODAY.getDay()] + '<br>' + MON_NAME[TODAY.getMonth()] + ' ' + TODAY.getDate()
    const dttmString = DAY_NAME[TOMORROW.getDay()] + '<br>' + MON_NAME[TOMORROW.getMonth()] + ' ' + TOMORROW.getDate()
    const OPTIONS = {hour: 'numeric', minute: 'numeric'}
    const POS = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    const DATA_MAP = {
        wind: (data) => data.wind.speed.toFixed(1) + ' m/s',
        city: (data) => data.name + ', ' + data.sys.country,
        temp: (data) => Math.round(data.main.temp),
        condition: (data) => data.weather[0].description,
        img: (data) => 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
        cloudiness: (data) => data.weather[0].description,
        pressure: (data) => (data.main.pressure / 10).toFixed(1) + ' kPa',
        humidity: (data) => data.main.humidity + ' %',
        sunrise: (data) => new Date(data.sys.sunrise * 1000).toLocaleString('ru', OPTIONS),
        sunset: (data) => new Date(data.sys.sunset * 1000).toLocaleString('ru', OPTIONS)
    }
    // const DATA_MAP = {
    //     city: (data) => data.city.name + ', ' + data.city.country,
    //     wind: (data) => data.list[0].wind.speed.toFixed(1) + ' m/s',
    //     temp: (data) => Math.round(data.list[0].main.temp),
    //     condition: (data) => data.list[0].weather[0].description,
    //     img: (data) => 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png',
    //     cloudiness: (data) => data.list[0].weather[0].description,
    //     pressure: (data) => (data.list[0].main.pressure / 10).toFixed(1) + ' kPa',
    //     humidity: (data) => data.list[0].main.humidity + ' %',
    //     sunrise: (data) => new Date(data.list.sys.sunrise * 1000).toLocaleString('ru', OPTIONS),
    //     sunset: (data) => new Date(data.sys.sunset * 1000).toLocaleString('ru', OPTIONS)
    // }

    const USER_LANGUAGE = navigator.language && navigator.language.includes('ru') ? 'ru' : 'en'
    const WIND_DIR = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    // const input = document.getElementById('search')
    // const btn = document.getElementById('myBtn')
    
    document.getElementsByClassName('sunholder')[0].style.visibility = 'visible'
    document.getElementsByClassName('wrapper_content')[0].classList.add('preloader_on')
    

// fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&lang=' + USER_LANGUAGE + '&units=metric&APPID=c6f8dd0d039e624a468cee0667029f1f')
    // fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + POS.lat + '&lon=' + POS.lng + '&lang=' + USER_LANGUAGE + '&units=metric&APPID=c6f8dd0d039e624a468cee0667029f1f')
    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + POS.lat + '&lon=' + POS.lng + '&lang=' + USER_LANGUAGE + '&units=metric&APPID=c6f8dd0d039e624a468cee0667029f1f')
    .then(response => response.json())
    .then(data => {
        Object.keys(DATA_MAP).forEach(key => {
            const value = DATA_MAP[key](data)
            handleResponse(key, value)
        })

        document.querySelector('.wind_direction').style.transform = 'rotate('+ data.wind.deg + 'deg)'
        document.querySelector('.wind_direction').setAttribute('title', WIND_DIR[Math.floor(data.wind.deg / 22.5)])
    })
    .then(preloader)
    // .catch(err => err.text().then(data) = errorHandler(data))

    function handleResponse(key, value) {
        document.querySelector(`.${key}`).innerText += value
    }
        // let autoupdate = setInterval(() => request, 10000)
    window.onload = initDate
    function initDate() {
        document.getElementById('date_today').innerHTML = dtString
        document.getElementById('date_tomorrow').innerHTML = dttmString
    }
    function preloader() {
        document.getElementsByClassName('sunholder')[0].style.visibility = 'hidden'
        document.getElementsByClassName('wrapper_content')[0].classList.remove('preloader_on')
    }
})
