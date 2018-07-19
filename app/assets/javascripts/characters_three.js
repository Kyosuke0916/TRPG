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
    str_dice = document.getElementById("str_button").onclick = function () {
        requestAjax("http://localhost:3000/characters/three", function (response) {
            document.getElementById("str").innerHTML = response.val
            document.getElementById("character_str").innerHTML = response.val
        });
    };

    con_dice=document.getElementById("con_button").onclick = function () {
     requestAjax("http://localhost:3000/characters/three", function (response) {
            document.getElementById("con").innerHTML = response.val
            document.getElementById("character_con").innerHTML = response.val
        });
    };

    pow_dice=document.getElementById("pow_button").onclick = function () {
        requestAjax("http://localhost:3000/characters/three", function (response) {
            document.getElementById("pow").innerHTML = response.val
            document.getElementById("character_pow").innerHTML = response.val
        });
    };
    dex_dice=document.getElementById("dex_button").onclick = function () {
        requestAjax("http://localhost:3000/characters/three", function (response) {
            document.getElementById("dex").innerHTML = response.val
            document.getElementById("character_dex").innerHTML = response.val
        });
    };

    app_dice=document.getElementById("app_button").onclick = function () {
        requestAjax("http://localhost:3000/characters/three", function (response) {
            document.getElementById("app").innerHTML = response.val
            document.getElementById("character_app").innerHTML = response.val
        });
    };

    siz_dice=document.getElementById("siz_button").onclick = function () {
        requestAjax("http://localhost:3000/characters/two6", function (response) {
            document.getElementById("siz").innerHTML = response.val
            document.getElementById("character_siz").innerHTML = response.val
        });
    };

    int_dice=document.getElementById("int_button").onclick = function () {
        requestAjax("http://localhost:3000/characters/two6", function (response) {
            document.getElementById("int").innerHTML = response.val
            document.getElementById("character_int").innerHTML = response.val
        });
    };

    edu_dice=document.getElementById("edu_button").onclick = function () {
        requestAjax("http://localhost:3000/characters/two6", function (response) {
            document.getElementById("edu").innerHTML = response.val
            document.getElementById("character_edu").innerHTML = response.val
        });
    };

    document.getElementById("all_button").onclick = function () {
        str_dice();
        con_dice();
        pow_dice();
        dex_dice();
        app_dice();
        siz_dice();
        int_dice();
        edu_dice();
        };



};