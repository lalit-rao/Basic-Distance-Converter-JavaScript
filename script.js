(function () {
   'use strict';

    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answer = document.getElementById('answer');

        // alert(distance);
        if (distance) {
            // convert
            const conversion = (distance * 1.609344).toFixed(3);
            // display
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`
        }
        else {
            // display error
            answer.innerHTML = '<h2>Please provide a number!</h2>'
        }
    });
})()