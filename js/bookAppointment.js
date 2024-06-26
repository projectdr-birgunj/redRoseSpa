// import { DISCORD_WEBHOOK_URL as webhookUrl } from "../api.js";
// const DISCORD_WEBHOOK_URL = require("../api.js");
const date = new Date();
var today = date.toLocaleDateString("en-CA", { timeZone: "Asia/Kathmandu" });
console.log(today);
document.getElementById("date").setAttribute("min", today);
async function sendContact(ev) {
  ev.preventDefault();

  const custName = document.getElementById("name").value;
  const custPhone = document.getElementById("phone").value;
  const custEmail = document.getElementById("email").value;
  const custService = document.getElementById("service").value;
  const appointmentDate = document.getElementById("date").value;
  const appointmentTime = document.getElementById("time").value;

  const webhookBody = {
    embeds: [
      {
        title: "Booking Form Submitted",
        fields: [
          { name: "Name", value: custName },
          { name: "Phone", value: custPhone },
          { name: "Email", value: custEmail },
          { name: "Service", value: custService },
          { name: "Date", value: appointmentDate },
          { name: "Time", value: appointmentTime },
        ],
      },
    ],
  };

  //   const webhookUrl = getEnvVar("wenUrl");

  const webhookUrl = my_config.DISCORD_WEBHOOK_URL;
  //console.log(webhookUrl);
  //   const webhookUrl = process.env.MY_ENV_VAR;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(webhookBody),
  });

  if (response.ok) {
    setTimeout(() => {
      window.location.href = "../thankyou.html";
    }, 100);
  } else {
    alert("There was an error! Try again later!");
  }
}
