function onNodeInserted(event) {
  const element = document.querySelector('[aria-label="Timeline: Trending now"]');
  if (element !== null) {
    element.style.display = 'none';
  }
}

console.log("Bye bye trending!");

document.addEventListener('DOMNodeInserted', onNodeInserted);
