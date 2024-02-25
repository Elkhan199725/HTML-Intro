document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hideElementButton').addEventListener('click', function() {
        document.getElementById('demo').style.display = 'none';
    });

    document.getElementById('showElementButton').addEventListener('click', function() {
        document.getElementById('demo').style.display = ''; // Or 'block', depending on the original display style
    });
});