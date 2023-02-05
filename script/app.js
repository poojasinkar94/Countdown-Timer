const endDate = "5 December 2023 01:00 AM"

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date ();
    //console.log(end);
    //console.log(now);
    const diff = (end - now) / 1000;
    console.log(diff);
    //convert into days 
    input[0].value = Math.floor(diff / 3600 / 24);
    //convert into hours 
    input[1].value = Math.floor(diff / 3600) % 24;
    //convert into mins
    //console.log(diff / 60) % 60
    input[2].value = Math.floor(diff / 60) % 60;
    //convert into seconds
    //console.log(diff) % 60;
    input[3].value = Math.floor(diff) % 60;

}

//initial call
clock();

// 1 days = 24 hours
// 1 hours = 60 mins
// 60 mins = 3600 sec

setInterval(
    () => {
        clock()
    },
    1000
);
     
