var obj= {
    str: ['str_tmp','str_inc',1],
    con: ['con_tmp','con_inc',2],
    pow: ['pow_tmp','pow_inc',3],
    dex: ['dex_tmp','dex_inc',4],
    app: ['app_tmp','app_inc',5],
    siz: ['siz_tmp','siz_inc',6],
    int: ['int_tmp','int_inc',7],
    edu: ['edu_tmp','edu_inc',8],
    hp: ['hp_tmp','hp_inc',9],
    mp: ['mp_tmp','mp_inc',10],
    san: ['san_tmp','san_inc',11],
    idea: ['idea_tmp','idea_inc',12],
    luck: ['luck_tmp','luck_inc',13],
    know: ['know_tmp','know_inc',14],

    };
Object.keys(obj).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("status_table").rows[4].cells[val[2]].innerHTML = Number(document.getElementById("status_table").rows[1].cells[val[2]].innerHTML) + Number(document.getElementById(val[1]).value) + Number(document.getElementById(val[0]).value)
        });
    }
}, obj);

