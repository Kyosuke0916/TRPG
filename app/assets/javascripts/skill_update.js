var pro_sum, ist_sum, buttle_pro_sum, search_pro_sum, act_pro_sum, neg_pro_sum, know_pro_sum, buttle_ist_sum, search_ist_sum, act_ist_sum, neg_ist_sum, know_ist_sum ;

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

var buttle= {
    avoid: ['avoid_grow',1,'character_avoid'],
    kick: ['kick_grow',2,'character_kick'],
    kumituki: ['kumituki_grow',3,'character_kumituki'],
    kobusi: ['kobusi_grow',4,'character_kobusi'],
    dutuki: ['dutuki_grow',5,'character_dutuki'],
    touteki: ['touteki_grow',6,'character_touteki'],
    masharu: ['masharu_grow',7,'character_masharu'],
    kenjyuu: ['kenjyuu_grow',8,'character_kenjyuu'],
    sabumasi: ['sabumasi_grow',9,'character_sabumasi'],
    shottogun: ['shottogun_grow',10,'character_shottogun'],
    masingun: ['masingun_grow',11,'character_masingun'],
    raihuru: ['raihuru_grow',12,'character_raihuru'],

};

Object.keys(buttle).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            // console.log(tmp)
            // console.log($(tmp))
            // console.log(val[1])
            document.getElementById("buttle_table").rows[val[1]].cells[3].innerHTML = Number(document.getElementById("buttle_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
            document.getElementById(val[2]).value = Number(document.getElementById("buttle_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
            document.getElementById("pro_sum").innerHTML = Number(document.getElementById("avoid_pro").value) + Number(document.getElementById("kick_pro").value)
            for(let n=0; n<11; n++) {
                buttle_pro_sum = buttle_pro_sum + Number(document.getElementById(val[n]).value)
                console.log(buttle_pro_sum)
            }
        });
    }
}, buttle);

var search= {
    oukyuu: ['oukyuu_grow',1,'character_oukyuu'],
    kagi: ['kagi_grow',2,'character_kagi'],
    kakusu: ['kakusu_grow',3,'character_kakusu'],
    kakureru: ['kakureru_grow',4,'character_kakureru'],
    kikimimi: ['kikimimi_grow',5,'character_kikimimi'],
    sinobi: ['sinobi_grow',6,'character_sinobi'],
    shasin: ['shasin_grow',7,'character_shasin'],
    seisin: ['seisin_grow',8,'character_seisin'],
    tuiseki: ['tuiseki_grow',9,'character_tuiseki'],
    touhan: ['touhan_grow',10,'character_touhan'],
    toshokan: ['toshokan_grow',11,'character_toshokan'],
    mebosi: ['mebosi_grow',12,'character_mebosi'],

};

Object.keys(search).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            // console.log(tmp)
            // console.log($(tmp))
            // console.log(val[2])
            document.getElementById("search_table").rows[val[1]].cells[3].innerHTML = Number(document.getElementById("search_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
            document.getElementById(val[2]).value = Number(document.getElementById("search_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
        });
    }
}, search);

var act= {
    unten: ['unten_grow',1,'character_unten'],
    shuri: ['shuri_grow',2,'character_shuri'],
    sousa: ['sousa_grow',3,'character_sousa'],
    jyouba: ['jyouba_grow',4,'character_jyouba'],
    suiei: ['suiei_grow',5,'character_suiei'],
    seisaku: ['seisaku_grow',6,'character_seisaku'],
    soujyuu: ['soujyuu_grow',7,'character_soujyuu'],
    tyouyaku: ['tyouyaku_grow',8,'character_tyouyaku'],
    denki: ['denki_grow',9,'character_densi'],
    nabi: ['nabi_grow',10,'character_nabi'],
    hensou: ['hensou_grow',11,'character_hensou'],

};

Object.keys(act).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("act_table").rows[val[1]].cells[3].innerHTML = Number(document.getElementById("act_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
            document.getElementById(val[2]).value = Number(document.getElementById("act_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
        });
    }
}, act);

var neg= {
    iiku: ['iiku_grow',1,'character_iiku'],
    sinyou: ['sinyou_grow',2,'character_sinyou'],
    settoku: ['settoku_grow',3,'character_settoku'],
    negiri: ['negiri_grow',4,'character_negiri'],
    native: ['native_grow',5,'character_native'],
    first: ['first_grow',6,'character_first'],
    second: ['second_grow',7,'character_second'],


};

Object.keys(neg).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("neg_table").rows[val[1]].cells[3].innerHTML = Number(document.getElementById("neg_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
            document.getElementById(val[2]).value = Number(document.getElementById("neg_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
        });
    }
}, neg);

var know= {
    igaku: ['igaku_grow',1,'character_igaku'],
    okaruto: ['okaruto_grow',2,'character_okaruto'],
    kagaku: ['kagaku_grow',3,'character_kagaku'],
    coc: ['coc_grow',4,'character_coc'],
    art: ['art_grow',5,'character_art'],
    keiri: ['keiri_grow',6,'character_keiri'],
    kouko: ['kouko_grow',7,'character_kouko'],
    comp: ['comp_grow',8,'character_comp'],
    sinri: ['sinri_grow',9,'character_sinri'],
    human: ['human_grow',10,'character_human'],
    seibutu: ['seibutu_grow',11,'character_seibutu'],
    tisitu: ['tisitu_grow',12,'character_tisitu'],
    densi: ['densi_grow',13,'character_densi'],
    tenmon: ['tenmon_grow',14,'character_tenmon'],
    hakubutu: ['hakubutu_grow',15,'character_hakubutu'],
    buturi: ['buturi_grow',16,'character_buturi'],
    houritu: ['houritu_grow',17,'character_houritu'],
    yakugaku: ['yakugaku_grow',18,'character_yakugaku'],
    rekisi: ['rekisi_grow',19,'character_rekisi'],

};

Object.keys(know).forEach(function(key) {
    var val = this[key]; // this は obj
    // console.log(key, val);
    for(let i = 0; i < val.length; i++) {
        let tmp = "#" + val[i]
        $(tmp).change(function(){
            console.log(tmp)
            console.log($(tmp))
            console.log(val[2])
            document.getElementById("know_table").rows[val[1]].cells[3].innerHTML = Number(document.getElementById("know_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
            document.getElementById(val[2]).value = Number(document.getElementById("know_table").rows[val[1]].cells[1].innerHTML) + Number(document.getElementById(val[0]).value)
        });
    }
}, know);