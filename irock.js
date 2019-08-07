//periodikus ismétlés időközönként
//var timerId = setInterval(message, 3000);

function greeting(){
    if(navigator.cookieEnabled) {
        var user = readCookie('user_name');
        if (user == "") {
            alert('Hello I am your pet rock!');
        } else {
            alert('It is good to meet you, ' + user + '!');
        }
    }
    setInterval(pageRefresh, 10000);
}

function nameCheck() {
    if (navigator.cookieEnabled) {
        var user = readCookie('user_name');
        if (user == "") {
            var person = prompt('What is your name?', 'Enter your name here!');
            if (person && (person != 'Enter your name here!')) {
                alert('It is good to meet you, ' + person + '!');
                //ismétlődő időzítő törlése
                //clearInterval(timerId);
                writeCookie('user_name', person, 3)
            }
        } else {
            alert('It is good to meet you, ' + user + '!');
        }
    }
    else{
        alert("Sorry, cookies aren't supported/enabled in your browser! I won't remember you later.")
    }
        document.getElementById('kep_smile').src = 'rock_smile.png';
        //idő elteltével csinál valamit
        setTimeout(lonely, 5000);
}

function lonely(){
    document.getElementById('kep_smile').src = 'rock.png';
}

function message() {
    alert("I'm your IRock pet.");
}

function resizeRock(){
    var rockWindowHeight = document.body.clientHeight;
    var rockSizeHeight = (rockWindowHeight - 100) * 0.9;
    document.getElementById('kep_smile').style.height = rockSizeHeight;
}

function pageRefresh(){
    document.getElementById('kep_smile').src = 'rock_random.png';
    alert('Wake up!');
}

function confirmLeave() {
    return '';
}