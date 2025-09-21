import data from './data.js';

const displayZone = document.querySelector('.js-problemContainer');
const searchBar = document.querySelector('.js-searchNumber');
const submitSearch = document.querySelector('.js-sumbit');
const toggleBtn = document.getElementById('toggleBtn');

const toggleId = document.getElementById('toggleId');
const toggleEnunt = document.getElementById('toggleEnunt');
const toggleExemplu = document.getElementById('toggleExemplu');
const toggleProgram = document.getElementById('toggleProgram');

// funcție pentru a scăpa caractere HTML în cod
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Funcție pentru afișarea problemei după ID
function displayProblem(id) {
  const problem = data.find(item => item.id === Number(id));
  if (!problem) {
    displayZone.innerHTML = `<p>Problema cu ID-ul ${id} nu există.</p>`;
    return;
  }

  displayZone.innerHTML = `
    <p class="problemNumber"><strong>Problema ${problem.id}</strong></p>
    <p class="enunt"><strong>Enunț:</strong> ${problem.enunt}</p>
    <p class="exemplu"><strong>Exemplu:</strong> ${problem.exemplu}</p>
    <pre class="program"><code>${escapeHTML(problem.program)}</code></pre>
  `;

  // actualizăm toggle-urile pentru noul conținut
  updateToggles();
}

// funcție pentru toggle secțiuni
function updateToggles() {
  const problemNumber = displayZone.querySelector('.problemNumber');
  const enunt = displayZone.querySelector('.enunt');
  const exemplu = displayZone.querySelector('.exemplu');
  const program = displayZone.querySelector('.program');

  toggleId.addEventListener('change', () => {
    if (problemNumber) problemNumber.style.display = toggleId.checked ? 'block' : 'none';
  });
  toggleEnunt.addEventListener('change', () => {
    if (enunt) enunt.style.display = toggleEnunt.checked ? 'block' : 'none';
  });
  toggleExemplu.addEventListener('change', () => {
    if (exemplu) exemplu.style.display = toggleExemplu.checked ? 'block' : 'none';
  });
  toggleProgram.addEventListener('change', () => {
    if (program) program.style.display = toggleProgram.checked ? 'block' : 'none';
  });

  // aplicăm starea curentă a checkbox-urilor imediat
  if (problemNumber) problemNumber.style.display = toggleId.checked ? 'block' : 'none';
  if (enunt) enunt.style.display = toggleEnunt.checked ? 'block' : 'none';
  if (exemplu) exemplu.style.display = toggleExemplu.checked ? 'block' : 'none';
  if (program) program.style.display = toggleProgram.checked ? 'block' : 'none';
}

// afișăm prima problemă implicit
displayProblem(1);

// buton submit căutare
submitSearch.addEventListener('click', () => {
  const id = searchBar.value.trim();
  if (id) displayProblem(id);
});

// Enter pentru input
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const id = searchBar.value.trim();
    if (id) displayProblem(id);
  }
});

// toggle „Ascunde TOT / Show”
toggleBtn.addEventListener('click', () => {
  const isHidden = document.body.classList.toggle('hidden');

  if (isHidden) {
    toggleBtn.textContent = 'Arata';
    toggleBtn.classList.add('show-mode'); // mai transparent
  } else {
    toggleBtn.textContent = 'Ascunde TOT';
    toggleBtn.classList.remove('show-mode'); // opac normal
  }
});

// Hamburger toggle menu
const hamburger = document.getElementById('hamburger');
const toggleMenu = document.getElementById('toggleMenu');

hamburger.addEventListener('click', () => {
  toggleMenu.classList.toggle('show');
});