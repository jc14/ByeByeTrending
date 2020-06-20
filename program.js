function onNodeInserted(event) {
  const element = document.querySelector('[aria-label="Timeline: Trending now"]');
  if (element !== null) {
    console.log(element);

    element.style.display = 'none';
  }
}

console.log("Bye bye trending!");

document.addEventListener('DOMNodeInserted', onNodeInserted);
