    var getLondonTime = function () {
        document.getElementById("LondonTime").innerHTML = new Date().toLocaleString("en-US", { timeZone: 'Europe/London', timeStyle:'short', hourCycle: 'h24' });
    }

    var getNewYorkTime = function () {
        document.getElementById("NewYorkTime").innerHTML = new Date().toLocaleString("en-US", { timeZone: 'America/New_york', timeStyle:'short', hourCycle: 'h24' });      
    }   

    var getTokyoTime = function () {
        document.getElementById("TokyoTime").innerHTML = new Date().toLocaleString("en-US", { timeZone: 'Asia/Tokyo', timeStyle:'short', hourCycle: 'h24' });
    }     
       
    setInterval(getLondonTime,1000);
    getLondonTime();

    LTime = new Date();
    LHour = LTime.getHours();

    if (LHour > 7 && LHour < 22) {
        document.getElementById("londonClockSVG").innerHTML = '<svg style= "width: 25px; height: 25px; padding-top: 15px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"/></svg>';
    } else {
        document.getElementById("LondonClockSVG").innerHTML = '<svg style= "width: 25px; height: 25px; padding-top: 15px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z"/></svg>';
    }

    getNewYorkTime();
    setInterval(getNewYorkTime,1000);

    var NYTime = parseInt(document.getElementById('NewYorkTime').innerHTML);

    if (NYTime > 7 && NYTime < 22) {
        document.getElementById("newYorkClockSVG").innerHTML = '<svg style= "width: 25px; height: 25px; padding-top: 15px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"/></svg>';
    } else {
        document.getElementById("newYorkClockSVG").innerHTML = '<svg style= "width: 25px; height: 25px; padding-top: 15px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z"/></svg>';
    }

    getTokyoTime();
    setInterval(getTokyoTime,1000);

    var TTime = parseInt(document.getElementById('TokyoTime').innerHTML);
    
    if (TTime > 07 && TTime < 22) {
        document.getElementById("tokyoClockSVG").innerHTML = '<svg style= "width: 25px; height: 25px; padding-top: 15px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 12v-6h-2v8h7v-2h-5z"/></svg>';
    } else {
        document.getElementById("tokyoClockSVG").innerHTML = '<svg style= "width: 25px; height: 25px; padding-top: 15px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z"/></svg>';
    }
