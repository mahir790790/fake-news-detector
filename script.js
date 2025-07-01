function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.classList.toggle("show");
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.highlight')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }
};
