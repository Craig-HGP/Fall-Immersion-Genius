/*
  Genius Script (pseudo-code): Combined exercises with comment-based steps

  This file intentionally contains pseudo-code and commented guidance rather
  than full implementations. Geniuses should use the comments AS A REFERENCE to implement
  the behaviours in the classroom. The file is safe to include in a page
  — it won't throw if elements are missing.
*/

/* ---------------- Exercise #1 Counter (pseudo + small hints) ----------------
   1) Get the elements by id:
      var valueEl = document.getElementById('counter-value');
      var incBtn = document.getElementById('counter-inc');
      var decBtn = document.getElementById('counter-dec');
      var resetBtn = document.getElementById('counter-reset');

   2) Read the number:
      var n = Number(valueEl.textContent || '0');

   3) Add click listeners:
      incBtn.addEventListener('click', function () { // set new value });

   4) Update the DOM:
      valueEl.textContent = String(n);
*/


/* ---------------- Exercise #2 Dark Mode (pseudo + small hints) ----------------
   1) Find the toggle: var toggle = document.getElementById('dark-toggle');
   2) On click: if (document.documentElement.classList.contains('dark')) { remove } else { add }
   3) Save preference: localStorage.setItem('edu_dark_mode', '1');
   4) On load: read localStorage and set class accordingly
*/

/* ---------------- Exercise #3 Event Handling (pseudo + hints) ----------------
   1) var list = document.getElementById('event-list');
   2) list.addEventListener('click', function (ev) { ... });
   3) Inside handler: use a loop to walk up from ev.target to find an element with class 'item'
   4) Read attribute: var id = item.getAttribute('data-item-id');
   5) Update an output element, e.g., document.getElementById('selected-output').textContent = 'Selected: ' + id;
*/

/* ---------------- Exercise #4 Form Submission (pseudo + hints) ----------------
   1) var form = document.getElementById('sample-form');
   2) form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var name = form.elements['name'].value.trim();
        if (!name) { show message; return; }
        console.log('send', name);
        form.reset();
      });
*/

/* ---------------- Exercise #5 Modal (pseudo + hints) ----------------
   1) Add buttons like <button data-open-modal="demoModal">Open</button>
   2) On click: var id = btn.getAttribute('data-open-modal'); var modal = document.getElementById(id);
   3) To open: modal.classList.add('is-open'); modal.setAttribute('aria-hidden', 'false');
   4) To close: modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true');
 5) Close on ESC: document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') { // close } });
*/
