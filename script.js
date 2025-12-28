let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
const phone = "212663028837";
document.getElementById("basic-btn").onclick = () => {
  window.open(
    `https://wa.me/${phone}?text=Hello%20coach%20I%20am%20interested%20in%20the%20Basic%20plan!`,
    "_blank"
  );
};

document.getElementById("premium-btn").onclick = () => {
  window.open(
    `https://wa.me/${phone}?text=Hello%20coach%20I%20am%20interested%20in%20the%20Premium%20plan!`,
    "_blank"
  );
};

document.getElementById("ultra-btn").onclick = () => {
  window.open(
    `https://wa.me/${phone}?text=Hello%20coach%20I%20am%20interested%20in%20the%20Ultra%20plan!`,
    "_blank"
  );
};
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  if (!form) {
    console.log("❌ Form not found: check id='contact-form'");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tyf34fi", "template_22acoeo", form)
      .then(() => {
        successMsg.style.display = "block";
        form.reset();

        setTimeout(() => {
          successMsg.style.display = "none";
        }, 3000);
      })
      .catch((err) => {
        console.log("❌ EmailJS error:", err);
      });
  });
});
