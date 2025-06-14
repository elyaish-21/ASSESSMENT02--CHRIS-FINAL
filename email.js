function sendmail() {
    let parms = {
        name : document.getElementById("name").value,
        title : document.getElementById("purpose").value,
        email : document.getElementById("email").value,
        date : document.getElementById("date").value,
        time : document.getElementById("time").value,
    }

    emailjs.send("service_y86bxdq", "template_x4imddo",parms)
} 

