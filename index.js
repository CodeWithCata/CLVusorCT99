import data from './data.js';

const displayZone = document.querySelector('.js-problemContainer');
const searchBar = document.querySelector('.js-searchNumber');
const submitSearch = document.querySelector('.js-sumbit');
const searchCheckbox = document.getElementById('searchToggle');

const toggleBtn = document.getElementById('toggleBtn');
const toggleId = document.getElementById('toggleId');
const toggleEnunt = document.getElementById('toggleEnunt');
const toggleExemplu = document.getElementById('toggleExemplu');
const toggleProgram = document.getElementById('toggleProgram');

function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ------------------------
// Afișare probleme
// ------------------------
function createProblemHTML(problem) {
  const div = document.createElement('div');
  div.classList.add('problemWrapper'); // pentru toggle mai ușor
  div.innerHTML = `
    <p class="problemNumber"><strong>Problema ${problem.id}</strong></p>
    <p class="enunt"><strong>Enunț:</strong> ${problem.enunt}</p>
    <p class="exemplu"><strong>Exemplu:</strong> ${problem.exemplu}</p>
    <pre class="program"><code>${escapeHTML(problem.program)}</code></pre>
    <hr style="margin:1rem 0; border-color:#444;">
  `;
  return div;
}

function displayProblem(id) {
  const problem = data.find(p => p.id === Number(id));
  displayZone.innerHTML = '';
  if (problem) {
    displayZone.appendChild(createProblemHTML(problem));
  } else {
    displayZone.innerHTML = `<p>Problema cu ID-ul ${id} nu există.</p>`;
  }
  applyToggles();
}

function displayAllProblems() {
  displayZone.innerHTML = '';
  data.forEach(problem => displayZone.appendChild(createProblemHTML(problem)));
  applyToggles();
}

// ------------------------
// Toggle vizibilitate secțiuni
// ------------------------
function applyToggles() {
  const problemNumbers = displayZone.querySelectorAll('.problemNumber');
  const enunts = displayZone.querySelectorAll('.enunt');
  const exemple = displayZone.querySelectorAll('.exemplu');
  const programs = displayZone.querySelectorAll('.program');

  problemNumbers.forEach(p => p.style.display = toggleId.checked ? 'block' : 'none');
  enunts.forEach(p => p.style.display = toggleEnunt.checked ? 'block' : 'none');
  exemple.forEach(p => p.style.display = toggleExemplu.checked ? 'block' : 'none');
  programs.forEach(p => p.style.display = toggleProgram.checked ? 'block' : 'none');
}

// Atașăm listener o singură dată
[toggleId, toggleEnunt, toggleExemplu, toggleProgram].forEach(toggle => {
  toggle.addEventListener('change', applyToggles);
});

// ------------------------
// Search
// ------------------------
function searchProblem() {
  const id = searchBar.value.trim();
  if (id) displayProblem(id);
}

searchCheckbox.addEventListener('change', () => {
  const showSearch = searchCheckbox.checked;
  searchBar.style.display = showSearch ? 'inline-block' : 'none';
  submitSearch.style.display = showSearch ? 'inline-block' : 'none';
  if (showSearch) displayZone.innerHTML = '';
  else displayAllProblems();
});

submitSearch.addEventListener('click', searchProblem);
searchBar.addEventListener('keypress', e => {
  if (e.key === 'Enter') searchProblem();
});

// ------------------------
// Toggle „Ascunde TOT / Show”
// ------------------------
toggleBtn.addEventListener('click', () => {
  const isHidden = document.body.classList.toggle('hidden');
  toggleBtn.textContent = isHidden ? 'Arata' : 'Ascunde TOT';
  toggleBtn.classList.toggle('show-mode', isHidden);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const toggleMenu = document.getElementById('toggleMenu');
hamburger.addEventListener('click', () => toggleMenu.classList.toggle('show'));

// ------------------------
// Initial display
// ------------------------
displayAllProblems();
