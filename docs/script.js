// loader
//
// we load to 69%, then wait until the page
// has actually loaded, then load all the way.

const loader = document.getElementsByClassName("loader")[0];
if (loader) {
  const [messagePara, bar] = loader.children;

  const hideLoader = () => {
    loader.classList.add("vanish");
    setTimeout(() => loader.remove(), 750);
  };

  window.addEventListener('load', () => {
    bar.style.setProperty("--fullness", "100%")
    hideLoader(loader);
  });
} else {
  console.error("couldn't find loader??");
}

const body = document.body;

const chromaticAbberation = () => {
  body.style.setProperty(
    "--chromatic-abberation", 
    `${Math.round(Math.random() * 300) / 100}px`
  );
};

if (body) setInterval(chromaticAbberation, 100); 

// Tabs
const tabContent = document.getElementsByClassName("tab-content");

const showTab = (tabName) => {
  for (tab of tabContent) {
    if (tab.getAttribute("name") == tabName) 
      tab.classList.remove("hidden");
    else tab.classList.add("hidden");
  }
};

switch (window.location.hash) {
  case '#art':
    showTab("art", tabContent);
    break;
  case '':
  default:
    showTab("home", tabContent);
}
