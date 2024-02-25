document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('turnOn').addEventListener('click', function() {
        document.getElementById('myImage').src = '32904-3-bulb-on.png';
    });
    document.getElementById('turnOff').addEventListener('click', function() {
        document.getElementById('myImage').src = '32904-3-bulb-off.png';
    });
});