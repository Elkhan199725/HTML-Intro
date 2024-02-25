document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeTextButton').addEventListener('click', function() {
        document.getElementById('demo').innerHTML = "Hello JavaScript!";
    });
});