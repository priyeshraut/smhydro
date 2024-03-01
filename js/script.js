// mouse right click doesn't work on website

document.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);

// Hamburger Menu

document.querySelector("body").addEventListener("mousemove", (dets) => {
  document.querySelector(".cursor").style.top = dets.y + "px";
  document.querySelector(".cursor").style.left = dets.x + "px";
});

document.querySelector(".burger").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("h-nav");
  document.querySelector(".nav-list").classList.toggle("v-class");
  document.querySelector(".rightNav").classList.toggle("v-class");
});


// Contact Form

function sendEmail() {
  const company = document.getElementById('company').value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("number").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const body =
    `<b>Company :</b> ${company}<br>
    <b>Name :</b> ${name}<br>
    <b>Phone No :</b> ${phone}<br> 
    <b>Email :</b> ${email}<br> 
    <b>Message :</b> ${message};`

  Email.send({
    SecureToken: "4cff710a-2743-4cb8-b278-887ca3e5d4fc",
    To: "priyeshraut5@gmail.com",
    From: "priyeshraut25@gmail.com",
    Subject: "Hey, you got a message",
    Body: body,
  }).then((message) =>
    alert("Thanks for contacting us! We will be in touch with you shortly.")
  );
}


