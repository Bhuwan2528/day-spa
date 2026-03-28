
document.addEventListener("DOMContentLoaded", function () {

  let whatsappNumber = "917082764710"; // 👈 same number

  /* ================= APPOINTMENT FORM ================= */
  const appointmentForm = document.querySelector(".reservation_form");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const inputs = appointmentForm.querySelectorAll(".reservation_input");
      const textarea = appointmentForm.querySelector("textarea");

      let name = inputs[0].value.trim();
      let phone = inputs[1].value.trim();
      let address = inputs[2].value.trim();
      let service = inputs[3].value;
      let date = inputs[4].value;
      let time = inputs[5].value;
      let message = textarea.value.trim();

      if (!name || !phone) {
        alert("Please fill Name and Phone");
        return;
      }

      let text = `New Appointment Booking:
Name: ${name}
Phone: ${phone}
Address: ${address}
Service: ${service}
Date: ${date}
Time: ${time}
Message: ${message}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");

      appointmentForm.reset();

      let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
      if (modal) modal.hide();
    });
  }

  /* ================= CONTACT FORM ================= */
  const contactForm = document.querySelector(".contact_form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const inputs = contactForm.querySelectorAll("input");
      const textarea = contactForm.querySelector("textarea");

      let name = inputs[0].value.trim();
      let email = inputs[1].value.trim();
      let phone = inputs[2].value.trim();
      let subject = inputs[3].value.trim();
      let message = textarea.value.trim();

      if (!name || !phone) {
        alert("Please fill Name and Phone");
        return;
      }

      let text = `New Contact Message:
Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");

      contactForm.reset();
    });
  }

  /* ================= ABOUT FORM ================= */
  const aboutForm = document.querySelector(".about-form-soft");

  if (aboutForm) {
    const button = aboutForm.querySelector("button");

    button.addEventListener("click", function(e) {
      e.preventDefault();

      const inputs = aboutForm.querySelectorAll("input");
      const textarea = aboutForm.querySelector("textarea");

      let name = inputs[0].value.trim();
      let phone = inputs[1].value.trim();
      let email = inputs[2].value.trim();
      let message = textarea.value.trim();

      if (!name || !phone) {
        alert("Please fill Name and Mobile Number");
        return;
      }

      let text = `New Enquiry:
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`;

      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");

      // reset manually
      inputs.forEach(input => input.value = "");
      textarea.value = "";
    });
  }

});