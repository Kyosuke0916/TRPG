(function(){

requestAjax = function(endpoint, callback) {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
if (this.readyState==4 && this.status==200) {
callback(this.response);
}
};
xhr.responseType = 'json';
xhr.open('GET',endpoint,true);
xhr.send();
};
})();

window.onload = function() {
    document.getElementById("twenty_button").onclick = function () {
        requestAjax("http://localhost:3000/dices/twenty", function (response) {
            document.getElementById("twenty").innerHTML = response.val
        });
    };

    document.getElementById("hundred_button").onclick = function () {
        requestAjax("http://localhost:3000/dices/hundred", function (response) {
            document.getElementById("hundred").innerHTML = response.val
        });
    };

    document.getElementById("ten_button").onclick = function () {
        requestAjax("http://localhost:3000/dices/ten", function (response) {
            document.getElementById("ten").innerHTML = response.val
        });
    };

    document.getElementById("six_button").onclick = function () {
        requestAjax("http://localhost:3000/dices/six", function (response) {
            document.getElementById("six").innerHTML = response.val
        });
    };

    document.getElementById("four_button").onclick = function () {
        requestAjax("http://localhost:3000/dices/four", function (response) {
            console.log(response.val)
            document.getElementById("four").innerHTML = response.val
        });
    };
}
    $('#freedom_button').on('ajax:success', function(event) {
        console.dir(event)
        document.getElementById("freedom").innerHTML=(event.detail[0].val)
    });

