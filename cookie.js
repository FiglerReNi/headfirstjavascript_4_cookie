function writeCookie(name, value, days){
    var expire = "";
    if(days){
        var date = new Date();
        //hozzáadjuk a jelenlegi dátum-időhöz a napokat)
        date.setTime(date.getTime() + (days*24*60*60*1000))
        expire = date.toUTCString();
    }
    document.cookie = name + "=" + value + "; " + expire + ";"
}

function readCookie(name){
    var searchName = name + "=";
    var decodeCookie = decodeURIComponent(document.cookie)
    var cookies = decodeCookie.split(';');
    var i;
    var l = cookies.length;
    for(i=0; i<l; i++){
        var item = cookies[i];
        //megvizsgáljuk az első karaktert, és amíg üres addig töröljük
        while(item.charAt(0) == ' '){
            item = item.substring(1);
        }
        if(item.indexOf(searchName) == 0){
            //kivágjuk a value-t
            return item.substring(searchName.length, item.length);
        }
    }
    return "";
}

function eraseCookie(name){
    writeCookie(name, "", -1);
}