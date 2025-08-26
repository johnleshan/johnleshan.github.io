// Extended DOM tests for johnleshan.github.io portfolio

function testNavigationLinks() {
  const navLinks = document.querySelectorAll('.nav-links a');
  let allLinksWork = true;
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || !document.querySelector(href)) {
      console.error(`Navigation link "${link.textContent}" does not point to a valid section.`);
      allLinksWork = false;
    }
  });
  return allLinksWork;
}

function testThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-toggle-icon');
  if (!btn || !icon) {
    console.error('Theme toggle button or icon not found.');
    return false;
  }
  const initialDark = document.body.classList.contains('dark-mode');
  btn.click();
  const toggledDark = document.body.classList.contains('dark-mode');
  btn.click();
  const revertedDark = document.body.classList.contains('dark-mode');
  return initialDark !== toggledDark && initialDark === revertedDark;
}

function testResponsive() {
  // Simulate mobile width
  const originalWidth = window.innerWidth;
  window.innerWidth = 500;
  window.dispatchEvent(new Event('resize'));
  const mobileToggle = document.getElementById('theme-toggle-mobile');
  const isMobileVisible = mobileToggle && mobileToggle.offsetParent !== null;
  window.innerWidth = originalWidth;
  window.dispatchEvent(new Event('resize'));
  return isMobileVisible;
}

function testLayout() {
  const profile = document.getElementById('profile');
  const about = document.getElementById('about');
  const experience = document.getElementById('experience');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');
  return profile && about && experience && projects && contact;
}

function testForms() {
  const forms = document.querySelectorAll('form');
  if (forms.length === 0) return true; // No forms to test
  let allFormsValid = true;
  forms.forEach(form => {
    if (!form.checkValidity()) {
      console.error('Form is invalid:', form);
      allFormsValid = false;
    }
  });
  return allFormsValid;
}

// Additional tests

function testSocialLinks() {
  const linkedin = document.querySelector('img[alt="My LinkedIn profile"]');
  const github = document.querySelector('img[alt="My Github profile"]');
  return linkedin && github;
}

function testProjectButtons() {
  const projectBtns = document.querySelectorAll('.project-btn');
  let allHaveLinks = true;
  projectBtns.forEach(btn => {
    if (!btn.onclick) {
      console.error('Project button missing onclick:', btn);
      allHaveLinks = false;
    }
  });
  return allHaveLinks;
}

function testFooterLinks() {
  const footerLinks = document.querySelectorAll('footer .nav-links a');
  let allFooterLinksWork = true;
  footerLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || !document.querySelector(href)) {
      console.error(`Footer link "${link.textContent}" does not point to a valid section.`);
      allFooterLinksWork = false;
    }
  });
  return allFooterLinksWork;
}

function testImageAlts() {
  const images = document.querySelectorAll('img');
  let allHaveAlt = true;
  images.forEach(img => {
    if (!img.alt || img.alt.trim() === '') {
      console.error('Image missing alt attribute:', img);
      allHaveAlt = false;
    }
  });
  return allHaveAlt;
}

// Run all tests and log results
function runPortfolioTests() {
  console.log('Testing navigation links:', testNavigationLinks() ? 'PASS' : 'FAIL');
  console.log('Testing theme toggle:', testThemeToggle() ? 'PASS' : 'FAIL');
  console.log('Testing responsive toggle:', testResponsive() ? 'PASS' : 'FAIL');
  console.log('Testing layout sections:', testLayout() ? 'PASS' : 'FAIL');
  console.log('Testing forms:', testForms() ? 'PASS' : 'FAIL');
  console.log('Testing social links:', testSocialLinks() ? 'PASS' : 'FAIL');
  console.log('Testing project buttons:', testProjectButtons() ? 'PASS' : 'FAIL');
  console.log('Testing footer links:', testFooterLinks() ? 'PASS' : 'FAIL');
  console.log('Testing image alt attributes:', testImageAlts() ? 'PASS' : 'FAIL');
}

window.onload = runPortfolioTests;