const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website inquiry: ${data.get("topic")}`);
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\\nEmail: ${data.get("email")}\\nTopic: ${data.get("topic")}\\n\\nMessage:\\n${data.get("message")}\\n\\nPlease note: This inquiry was prepared through the website demo.`
  );
  document.getElementById("formNote").textContent = "Your email application should open with the inquiry prepared. Review it and send it to contact the firm.";
  window.location.href = `mailto:info@bohnlawfirm.com?subject=${subject}&body=${body}`;
});
