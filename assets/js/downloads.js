document.getElementById('countermta').innerHTML = (localStorage.clickCounterMTASA ?? 0);
document.getElementById('countergta').innerHTML = (localStorage.clickCounterGTASA ?? 0);

// callback

function clickCounter(int){
    if (int == 1){
        if (localStorage.clickCounterMTASA) {
            localStorage.clickCounterMTASA = Number(localStorage.clickCounterMTASA) + 1;
        }else{
            localStorage.clickCounterMTASA = 1;
        };
        document.getElementById('countermta').innerHTML = localStorage.clickCounterMTASA;
    }else{
        if (localStorage.clickCounterGTASA) {
            localStorage.clickCounterGTASA = Number(localStorage.clickCounterGTASA) + 1;
        }else{
            localStorage.clickCounterGTASA = 1;
        };
        document.getElementById('countergta').innerHTML = localStorage.clickCounterGTASA;
    };
};