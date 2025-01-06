function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

document.addEventListener('click', function(event) {
  const sidebar = document.getElementById('sidebar');
  const sidebarBtn = document.querySelector('.sidebar-btn');
  
  // Check if the click is outside the sidebar and sidebar button
  if (!sidebar.contains(event.target) && !sidebarBtn.contains(event.target)) {
    sidebar.classList.remove('open'); // Close sidebar by removing the 'open' class
  }
});
