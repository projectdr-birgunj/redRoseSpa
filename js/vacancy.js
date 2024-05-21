// import { DISCORD_WEBHOOK_URL as webhookUrl } from "../api.js";
// const DISCORD_WEBHOOK_URL = require("../api.js");
async function sendContact(ev) {
  ev.preventDefault();

  const custName = document.getElementById("name").value;
  const custPhone = document.getElementById("phone").value;
  const custAddress = document.getElementById("address").value;

  const webhookBody = {
    embeds: [
      {
        title: "Vacancy Form Submitted",
        fields: [
          { name: "Name", value: custName },
          { name: "Phone", value: custPhone },
          { name: "Adress", value: custAddress },
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
      window.location.href = "thankyou_vacancy.html";
    }, 100);
  } else {
    alert("There was an error! Try again later!");
  }
}
