function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

document.getElementById('submit').addEventListener('click', function(event){
event.preventDefault();
// read the values from the form
var name = document.getElementById('Name').value;
var phone = document.getElementById('Phone').value;
//var name = document.getElementById('Name').value;
//console.log(name);
// add validation here
//event.preventDefault();
// connect to java
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, email: phone })
};
//var url = 'http://localhost:8080/add?name=' + name + '&email=' + phone;
fetch('http://localhost:8080/add', requestOptions)
.then(response => response.json())
.then(data => {
    console.log(data);
    document.getElementById('Name').value = '';
    document.getElementById('Phone').value = '';
    document.getElementById('Message').value= '';
});
})
   