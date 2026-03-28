
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".reservation_form");

  if (!form) return; // safety

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = form.querySelectorAll(".reservation_input");
    const textarea = form.querySelector("textarea");

    let name = inputs[0].value.trim();
    let phone = inputs[1].value.trim();
    let address = inputs[2].value.trim();
    let service = inputs[3].value;
    let date = inputs[4].value;
    let time = inputs[5].value;
    let message = textarea.value.trim();

    // ✅ Basic validation
    if (!name || !phone) {
      alert("Please fill Name and Phone");
      return;
    }

    let whatsappNumber = "917082764710"; // 👈 apna number daal

    let text = `New Appointment Booking:
Name: ${name}
Phone: ${phone}
Address: ${address}
Date: ${date}
Time: ${time}
Message: ${message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // ✅ Open WhatsApp
    window.open(url, "_blank");

    // ✅ Optional: form reset
    form.reset();

    // ✅ Optional: modal close (Bootstrap)
    let modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
    if (modal) {
      modal.hide();
    }

  });

});