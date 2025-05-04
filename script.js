function showInfo(type) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");

  if (type === "napolcom") {
    body.innerHTML = `
      <h3>NAPOLCOM Enrollment Fees</h3>
      <ul>
        <li>Regular Fee: ₱4,999</li>
        <li>Promo Fee: ₱2,999</li>
        <li>Free Scholarship: TBA</li>
      </ul>
    `;
  } else if (type === "civil") {
    body.innerHTML = `
      <h3>Civil Service Enrollment Fees</h3>
      <ul>
        <li>Regular Fee: ₱4,999</li>
        <li>Promo Fee: ₱2,999</li>
        <li>Free Scholarship: TBA</li>
      </ul>
    `;
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Optional: Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
