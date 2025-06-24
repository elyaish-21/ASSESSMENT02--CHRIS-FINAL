function sendmail() {
    // Get the time value
    let rawTime = document.getElementById("appointmentTime").value;

    // Convert the time to 12-hour format with AM/PM
    let timeParts = rawTime.split(":");
    let hours = parseInt(timeParts[0]);
    let minutes = timeParts[1];
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)

    let formattedTime = `${hours}:${minutes} ${period}`;
    
    let parms = {
        name : document.getElementById("name").value,
        subject : document.getElementById("subject").getAttribute("value"),
        email : document.getElementById("email").value,
        date : document.getElementById("date").value,
        time : formattedTime,
    }

    emailjs.send("service_hsg4yqe", "template_69gbsmo",parms)
} 

