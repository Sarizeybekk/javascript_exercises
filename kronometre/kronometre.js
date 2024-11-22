let saat = 0;
let dakika = 0;
let saniye = 0;
let mSaniye = 0;

var zamanlayici = false;

function start() {
    zamanlayici= true;
    kronometre();
}

function stop() {
    zamanlayici = false;
}

function reset() {
    timer = false;
    saat = 00;
    dakika= 00;
    saniye= 00;
    mSaniye = 00;

    document.getElementById("saat").innerHTML = "00";
    document.getElementById("dakika").innerHTML = "00";
    document.getElementById("saniye").innerHTML = "00";
    document.getElementById("mSaniye").innerHTML = "00";
}

function kronometre() {
    if (zamanlayici == true) {
        mSaniye = mSaniye + 1;
        if (mSaniye == 100) {
            saniye = saniye + 1;
            mSaniye = 0;
        }
        if (saniye == 60) {
            dakika = dakika+ 1;
            saniye = 0;
        }

        if (dakika == 60) {
            saat = saat + 1;
            saniye = 0;
            dakika = 0;
        }

        let saatString = saat;
        let dakikaString = dakika;
        let saniyeString = saniye;
        let mSaniyeString = mSaniye;

        if (saat < 10) {
            saatString = "0" +saatString;
        }
        if (dakika < 10) {
            dakikaString = "0" + dakikaString;
        }
        if (saniyeString < 10) {
            saniyeString = "0" + saniyeString;
        }
        if (mSaniyeString < 10) {
            mSaniyeString = "0" + mSaniyeString;
        }

        document.getElementById("saat").innerHTML = saatString;
        document.getElementById("dakika").innerHTML = dakikaString;
        document.getElementById("saniye").innerHTML = saniyeString;
        document.getElementById("mSaniye").innerHTML = mSaniyeString;

        setTimeout("kronometre()", 10);

    }
}
