/* StudyHub Theme Manager (Unified Light/Dark Mode) */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Determine if current page is the landing page
  const isLandingPage = document.body.classList.contains('landing-page');

  // Helper to get active theme
  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('studyhub-theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Default theme mapping
    return isLandingPage ? 'dark' : 'light';
  };

  // Apply theme to body
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      if (isLandingPage) {
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.add('dark-theme');
      }
    } else {
      if (isLandingPage) {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    }
  };

  // Toggle theme action
  const toggleTheme = () => {
    const currentTheme = getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('studyhub-theme', newTheme);
    applyTheme(newTheme);
  };

  // Initialize theme on page load
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Bind click listener
  toggleBtn.addEventListener('click', toggleTheme);
});
