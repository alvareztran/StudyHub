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

// Auto update History Course quiz scores in sidebar if elements exist
document.addEventListener('DOMContentLoaded', () => {
  const updateLsdSidebarBadges = () => {
    // 1. Cập nhật Đề cô Xuyến (32 câu)
    const badge1 = document.getElementById('sidebar-score-badge');
    if (badge1) {
      const saved1 = localStorage.getItem('studyhub_progress_lsd_coxuyen');
      if (saved1) {
        try {
          const progress = JSON.parse(saved1);
          let correct = 0, count = 0;
          for (let k in progress) {
            count++;
            if (progress[k].isCorrect) correct++;
          }
          badge1.innerText = `${correct}/32`;
          if (count === 32) badge1.className = 'score-badge completed';
        } catch(e) {}
      }
    }

    // 2. Cập nhật 6 trang Đề cương ôn tập (mỗi trang 50 câu)
    for (let p = 1; p <= 6; p++) {
      const badgeId = p === 1 ? 'sidebar-score-badge-2' : `sidebar-score-badge-${p+1}`;
      const badge = document.getElementById(badgeId);
      if (badge) {
        const storageKey = p === 1 ? 'studyhub_progress_lsd_decuong' : `studyhub_progress_lsd_decuong_${p}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          try {
            const progress = JSON.parse(saved);
            let correct = 0, count = 0;
            for (let k in progress) {
              count++;
              if (progress[k].isCorrect) correct++;
            }
            badge.innerText = `${correct}/50`;
            if (count === 50) badge.className = 'score-badge completed';
          } catch(e) {}
        }
      }
    }

    // 3. Cập nhật 4 trang Section VIP (mỗi trang 50 câu)
    for (let v = 1; v <= 4; v++) {
      const badgeId = `sidebar-score-badge-vip${v}`;
      const badge = document.getElementById(badgeId);
      if (badge) {
        const storageKey = `studyhub_progress_lsd_vip_${v}`;
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          try {
            const progress = JSON.parse(saved);
            let correct = 0, count = 0;
            for (let k in progress) {
              count++;
              if (progress[k].isCorrect) correct++;
            }
            badge.innerText = `${correct}/50`;
            if (count === 50) badge.className = 'score-badge completed';
          } catch(e) {}
        }
      }
    }
  };
  updateLsdSidebarBadges();
});
