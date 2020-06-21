function onNodeInserted(event) {
  const element = document.querySelector('[aria-label="Timeline: Trending now"]');
  if (element !== null) {
    element.style.display = 'none';
  }

  if (hasUpdated === false) {
    const elements = document.querySelector('article').querySelectorAll('span');

    console.log('Has updated was false!');
    for (let i = 0; i < elements.length; i++) {
      elements[i].innerText = elements[i].innerText.replace('Trump', 'Stupid Little Twat');
    }
    console.log("Updated text");

    hasUpdated = true;
  }
}

let hasUpdated = false;
console.log("Bye bye trending!");

document.addEventListener('DOMNodeInserted', onNodeInserted);
