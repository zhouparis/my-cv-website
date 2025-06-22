document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-include]').forEach(el => {
    fetch(el.getAttribute('data-include'))
      .then(res => res.ok ? res.text() : Promise.reject(res.statusText))
      .then(html => { el.outerHTML = html; })
      .catch(err => console.error('Include failed:', err));
  });
});
