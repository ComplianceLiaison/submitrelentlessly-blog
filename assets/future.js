   const messages = [
    "We fixed the courts. We raised the floor. We got better childcare and fewer billionaires.",
    "People don’t go bankrupt over insulin here. Weird, right?",
    "We unfucked campaign finance. Voting’s easy. Oligarchs are nervous.",
    "Housing is treated like a right. Landlords are mostly quiet now.",
    "Prisons are smaller. Libraries are bigger.",
    "We regulate tech now. The internet still sucks, but not as badly.",
    "EPA has teeth again. Air tastes like sky, not sulfur.",
    "The minimum wage has a comma in it. Wild.",
    "Everyone has healthcare. No more GoFundMe co-pays.",
    "We passed the ERA. About damn time.",
    "Teachers are paid more than hedge fund analysts. That one took a minute.",
    "Books are back in schools and libraries. Even the spicy ones O_O",
    "Public transit runs on time. (There's public transit here!).",
    "We made compliance our weapon. Bureaucracy, our battlefield.",
    "Your relentless submissions saved lives. Maybe not today, but soon.",
    "Nobody's making bank off climate collapse anymore.",
    "Unions? Thriving. Strike pay? Generous. Starbucks? Unionized.",
    "Student debt relief? Done. Future generations don’t start adulthood in chains.",
    "We’re not perfect — but we’re free.",
    "We can watch the news without crushing existential dread.",
    "FOIA requests don’t get ghosted anymore. Transparency actually means something.",
    "Social Security is solvent. Boomers and Zoomers can both chill.",
    "Kids learn history. All of it. Even the parts that make you wince.",
    "We have universal pre-K and nobody calls it Marxist.",
    "ICE doesn’t raid hospital waiting rooms anymore.",
    "Corporations pay taxes now. Like, actual taxes.",
    "The DMV runs smoother than most tech startups.",
    "No more billion-dollar weather disasters every two weeks.",
    "We stopped letting cable lobbyists write telecom policy.",
    "We have a Department of Don’t Be An Asshole. It's busy, but effective.",
    "The richest woman on Earth is a retired teacher.",
    "We use environmental impact scores like we used to use credit scores.",
    "The term 'civic hobbyist' is now a compliment.",
    "We replaced culture wars with actual culture. And snacks.",
    "Nobody hoards insulin. Or baby formula. Or voting machines.",
    "We banned algorithmic cruelty. The trolls retired.",
    "Election Day is a holiday. Oh, and we can afford housing!",
    "Kids don't fear active shooter drills — they have band practice instead.",
    "Public meetings don’t start with prayer. They start with data.",
    "When things go wrong, someone takes responsibility. There are apologies. Forgiveness is extended. It's like, so mature and vulnerable and shit.",
    "You're here because someone didn't quit. Be that someone for someone else.",
     "The news doesn't cause immediate existential panic. Actually, neither does waking up.",
    "Your cats are proud. They may never say it, but they know you're relentless.",
    "Even your whimsical bathroom painting of a walrus is impressed. It nods approvingly every time you walk by.",
    "Your pet rock applied for nonprofit status. It’s starting a civic engagement group in your honor.",
    "People are actually considering having children again- because they don't need to worry about the world they are bringing those children into.",
    "Your future grandchildren tell stories about how you weaponized copy/paste.",
    "One day your great-great-nibling will learn about your efforts and say, 'Damn. They submitted relentlessly.'"

];

  let i = new Date().getDate() % messages.length; // Default to daily rotation
  const messageEl = document.getElementById("future-message");
  const buttonEl = document.getElementById("another-message");
  const dateEl = document.getElementById("future-date");

  function showMessage(index) {
    messageEl.innerHTML = messages[index];
  }

  function getRandomIndex(exclude) {
    let j;
    do {
      j = Math.floor(Math.random() * messages.length);
    } while (j === exclude);
    return j;
  }

  function getRandomFutureDate() {
    const today = new Date();
    const yearsToAdd = Math.floor(Math.random() * 80) + 5; // 5–84 years
    const future = new Date(today.getFullYear() + yearsToAdd, today.getMonth(), today.getDate());
    return future.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }

  showMessage(i);
  if (dateEl) dateEl.textContent = getRandomFutureDate();

  if (buttonEl) {
    buttonEl.addEventListener("click", () => {
      i = getRandomIndex(i);
      showMessage(i);
      if (dateEl) dateEl.textContent = getRandomFutureDate();
    });
  }
