function sendEmail() {

    var getREmail=document.getElementById("toSend").value;
    var sender=document.getElementById("from").value;
    var sub=document.getElementById("subject").value;
    var body=document.getElementById("body").value;
Email.send(
    {
        Host: "smtp.gmail.com",
        Username: "sahil@binmile.com",
        Password: "Sahil@2699",
        To: getREmail,
        From: sender,
        Subject: sub,
        Body: body,  
         Attachments : [
             {
                 name : "chrome",
                 path:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fgoogle%2Bchrome%2Blogo&psig=AOvVaw2TuW1fF-D5fLBFRXmxd7XC&ust=1626512421285000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjqz4qd5_ECFQAAAAAdAAAAABAD"
             }]
    }
).then(
    message=> alert("Mail sent successfully")
); 
document.getElementById("toSend").value="";
document.getElementById("from").value="";
document.getElementById("subject").value="";
document.getElementById("body").value="";      
}