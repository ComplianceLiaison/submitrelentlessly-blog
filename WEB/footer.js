<script> document.addEventListener('DOMContentLoaded', () => {
  const id = window.location.pathname.replace(/^\/+/g, '').replace(/\/$/, '');
const reformRoots = [
  'civil-liberties', 'justice', 'democracy', 'economic-equity',
  'education', 'environmental-justice', 'food', 'health-care',
  'oversight', 'housing', 'immigration', 'judicial', 'labor', 'social-justice'
];

const path = window.location.pathname.replace(/^\/+/, '').toLowerCase();
const isSubmissionPage = reformRoots.some(root => path.startsWith(root + '/'));

  const storageKey = 'submittedReforms';
  const trackerStateKey = 'trackerWidgetState';
  const swStateKey = 'submissionWidgetState';
  const submitted = JSON.parse(localStorage.getItem(storageKey) || '[]');

  if (isSubmissionPage) {
    const hasSubmitted = submitted.includes(id);
    const container = document.createElement('div');
    container.id = 'submission-widget';
    container.innerHTML = `
      <div class="sw-inner ${hasSubmitted ? 'submitted' : ''} ${localStorage.getItem(swStateKey) === 'collapsed' ? 'collapsed' : ''}">
        <button id="sw-toggle">${hasSubmitted ? '✅ You’ve submitted this reform' : '📝 Mark this as submitted'}</button>
        <div class="sw-collapse">&times;</div>
      </div>
    `;
    document.body.appendChild(container);

    const btn = document.getElementById('sw-toggle');
  	const wrapper = document.getElementById('submission-widget');


    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      let updated = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));
      if (!updated.has(id)) {
        updated.add(id);
        wrapper.classList.add('submitted');
        btn.textContent = '✅ You’ve submitted this reform';
        const messages = [
          "Regulatory Payload Delivered 🚀",
          "Resistance Achieved 💥",
          "Civic Hack Deployed 🛠️",
          "You Did a Governance! 🗳️",
          "Congrats. You’re a civic legend! 👑",
          "Democracy Nudged ✅"
        ];
        showToast(messages[Math.floor(Math.random() * messages.length)], '#2e7d32');
      } else {
        updated.delete(id);
        wrapper.classList.remove('submitted');
        btn.textContent = '📝 Mark this as submitted';
        showToast('Submission undone ❌', '#b71c1c');
      }
      localStorage.setItem(storageKey, JSON.stringify([...updated]));
      updateSitewideTracker();
    });

  const collapseBtn = container.querySelector('.sw-collapse');
collapseBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  wrapper.classList.toggle('collapsed');  // ✅ correct target
  localStorage.setItem(swStateKey, wrapper.classList.contains('collapsed') ? 'collapsed' : 'open');
  
    });
   wrapper.addEventListener('click', () => {
  if (wrapper.classList.contains('collapsed')) {
    wrapper.classList.remove('collapsed');
    localStorage.setItem(swStateKey, 'open');
  }
});


  }

 const tracker = document.createElement('div');
tracker.id = 'sitewide-tracker';
tracker.innerHTML = `
  <div class="tracker-box">
    <div id="tracker-count"></div>
    <div id="tracker-message"></div>
    <div class="tracker-prompt"><b>Want to submit another?</b></div>
    <button id="surprise-btn">🎲 Surprise Me</button>
    <div class="tracker-total">107 pre-written submissions available</div>
    <div class="tracker-collapse">&times;</div>
  </div>
`;
document.body.appendChild(tracker);
updateSitewideTracker();


  const trackerState = localStorage.getItem(trackerStateKey);
  if (trackerState === 'collapsed') tracker.classList.add('collapsed');

  document.getElementById('surprise-btn').addEventListener('click', surpriseMe);
  document.querySelector('.tracker-collapse').addEventListener('click', (e) => {
    e.stopPropagation();
    tracker.classList.toggle('collapsed');
    localStorage.setItem(trackerStateKey, tracker.classList.contains('collapsed') ? 'collapsed' : 'open');
  });

  tracker.addEventListener('click', () => {
    if (tracker.classList.contains('collapsed')) {
      tracker.classList.remove('collapsed');
      localStorage.setItem(trackerStateKey, 'open');
    }
  });

  const footerUpdate = document.createElement('div');
  footerUpdate.id = 'last-updated-tracker';
  footerUpdate.textContent = '📅 Site last updated: 2025-05-14';
  document.body.appendChild(footerUpdate);
});

function updateSitewideTracker() {
  const submitted = JSON.parse(localStorage.getItem('submittedReforms') || '[]');
  const count = submitted.length;
  const countEl = document.getElementById('tracker-count');
  const msgEl = document.getElementById('tracker-message');
  if (countEl) countEl.textContent = `📬 You’ve submitted ${count} reform${count !== 1 ? 's' : ''}`;
  if (msgEl) msgEl.textContent = getGamifiedMessage(count);
}

function getGamifiedMessage(count) {
  if (count === 0) return "⏳ Submitting one reform takes less than 2 minutes—and could save us from living in a totalitarian state.";
  if (count <= 5) return "🍼 Relentless civic noob, but you're getting the hang of it.";
  if (count <= 10) return "🛼 On a roll, Civic Hall Monitor...but you could be more relentless.";
  if (count <= 20) return "🐱 I'm setting such a relentless example for my cats.";
  if (count <= 40) return "🧩 Paperwork pro. You’re making a relentless dent.";
  if (count <= 60) return "📈 Relentless overachiever. Someone put this person on a panel.";
  if (count <= 80) return "🏛️ Form-filing legend. The clerks whisper your name 'The Relentless One'.";
  if (count <= 100) return "📜 Relentless royalty. You’re in the 100 Club.";
  return "👑 Whoa. You're basically the mayor of something.";
}

function showToast(message, color = '#c62828') {
  const toast = document.createElement('div');
  toast.className = 'submission-toast';
  toast.textContent = message;
  toast.style.backgroundColor = color;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('visible');
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 500);
    }, 2500);
  }, 100);
}

const allReformsList = [
  "civil-liberties/roe-v-wade",
  "civil-liberties/metadata-privacy",
  "civil-liberties/era-certification",
  "civil-liberties/federal-lgbtq-rights",
  "civil-liberties/gender-affirming-care",
  "civil-liberties/trans-rights",
  "economic-equity/fair-use-credit",
  "economic-equity/capital-gains-timing",
  "economic-equity/home-sale-tax-reform",
  "economic-equity/securities-transparency",
  "economic-equity/startup-stock-reform",
  "economic-equity/capital-gains-harmonization",
  "economic-equity/estate-tax-reform",
  "economic-equity/social-security-cap",
  "economic-equity/ein-identity-reform",
  "economic-equity/hedge-fund-loopholes",
  "economic-equity/digital-market-integrity",
  "democracy/ballot-dark-money",
  "democracy/voting-rights-restoration",
  "democracy/electoral-college-certification",
  "democracy/voter-access-preclearance",
  "democracy/redistricting-integrity",
  "democracy/presidential-eligibility",
  "democracy/corporate-personhood",
  "civil-liberties/alien-enemies-act",
  "economic-equity/foreign-investment-loopholes",
  "economic-equity/stealth-acquisitions",
  "environmental-justice/public-lands",
  "health-care/streamlining-performance-reporting",
  "health-care/excepted-service-emergency-pay-band",
  "health-care/realign-regional-operations",
  "health-care/consolidate-rulemaking-procedures",
  "health-care/revise-premerger-notification",
  "health-care/rethink-vertical-ownership",
  "health-care/rescind-confidentiality-allowances",
  "environmental-justice/repatriate-ancestral-lands",
  "oversight/rescind-meta-oversight-authority",
  "health-care/push-back-pharma-price-gouging",
  "health-care/end-pharma-price-gouging",
  "health-care/mental-health-access-expansion",
  "health-care/restore-universal-public-healthcare",
  "health-care/strengthen-fda",
  "health-care/oversee-ldts",
  "health-care/fda-efficiency",
  "oversight/merit-based-white-house-roles",
  "oversight/merit-based-senior-executives",
  "oversight/merit-based-presidential-fellows",
  "oversight/executive-branch-merit-hiring",
  "health-care/fdamoney",
  "health-care/fdastaffcap",
  "health-care/device-safety",
  "oversight/ban-insider-trading-congress",
  "democracy/age-limits",
  "democracy/voters-fire-congress",
  "democracy/term-limits-congress",
  "democracy/congress-fire-congress",
  "democracy/limit-executive-orders",
  "oversight/restore-faa-funding",
  "oversight/faa-money",
  "oversight/faa-staffing",
  "oversight/net-neutral-free-press",
  "justice/qualified-immunity",
  "justice/cash-bail",
  "justice/assets",
  "justice/private-prisons",
  "justice/mandatory-minimums",
  "economic-equity/family-farming",
  "economic-equity/corporate-mergers",
  "economic-equity/antitrust-enforcement",
  "economic-equity/predatory-lending",
  "economic-equity/antitrust-abuse",
  "education/fund-public-schools",
  "education/scam-colleges",
  "education/spend-on-students",
  "education/student-loans",
  "education/crt-science",
  "education/indoctrination",
  "environment/strengthen-epa",
  "environment/climate-accountability",
  "environment/rigged-markets",
  "environment/pollution-exemptions",
  "environmental-justice/pollution-zoning",
  "food/junk",
  "oversight/defense-spending",
  "housing/affordability",
  "housing/fema-zoning",
  "housing/affordability-2",
  "housing/transit",
  "housing/rent-hikes",
  "housing/price-fixing",
  "social-justice/snappy",
  "economic-equity/utility-disconnection",
  "social-justice/safety-net",
  "labor/minimum-wage",
  "labor/workplace-safety",
  "labor/mandatory-arbitration",
  "labor/overtime",
  "labor/unions",
  "judicial/grow-supreme",
  "judicial/supreme",
  "immigration/daca",
  "immigration/public-charge",
  "immigration/everify",
  "immigration/guest-worker",
  "oversight/femafunding",
  "oversight/firethem",
  "health-care/fundmedicaid"
];

function surpriseMe() {
  const submitted = JSON.parse(localStorage.getItem("submittedReforms") || "[]");
  const unsubmitted = allReformsList.filter(slug => !submitted.includes(slug));
  if (!unsubmitted.length) {
    alert("🎉 You’ve already submitted every reform! That’s heroic.");
    return;
  }
  const randomSlug = unsubmitted[Math.floor(Math.random() * unsubmitted.length)];
  window.location.href = `/${randomSlug}`;
}
  </script>
