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
