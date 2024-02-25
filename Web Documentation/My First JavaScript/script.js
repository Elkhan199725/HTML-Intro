document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('displayDateButton').addEventListener('click',function(){
        document.getElementById('demo').innerHTML = new Date();
    });
});