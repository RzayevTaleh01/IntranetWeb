document.querySelectorAll(".nav-item").forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelectorAll(".nav-item")
      .forEach((e) => e.classList.remove("active"));
    this.classList.add("active");
  })
);

//Add a new input fields

const input_fields = document.querySelectorAll(".input-fields");
const add_phone_field = document.querySelector(".add-phone-field");
const add_email_field = document.querySelector(".add-email-field");

add_phone_field.onclick = function (e) {
  e.preventDefault();
  input_fields[0].innerHTML += `
  <div class="new-field">
  <label for="">Telefon</label>
  <input type="text" name="" id="">
</div>`;
  if (input_fields[0].children.length === 3) {
    add_phone_field.setAttribute("disabled", true);
  }
};

add_email_field.onclick = function (e) {
  e.preventDefault();
  input_fields[1].innerHTML += `
  <div class="new-field email-field">
  <label for="">E-mail</label>
  <input type="text" name="" id="">
</div>`;
  if (input_fields[1].children.length === 3) {
    add_email_field.setAttribute("disabled", true);
  }
};


// Validator

const form = document.querySelector(".other-info"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email");

// Email Validtion
function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); 
  }
  emailField.classList.remove("invalid"); 
}


// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  checkEmail();


  emailInput.addEventListener("keyup", checkEmail);

  if (
    !emailField.classList.contains("invalid")
  ) {
    location.href = form.getAttribute("action");
  }
});
