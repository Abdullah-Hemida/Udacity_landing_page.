const myButton = document.getElementById("my__button");



let i = 0;

console.log(i);
function createContent() {
  i++;
  const section_Container = document.querySelector("#section_Container");
  // creat this piece of html that represent my section
  let html_section = `<section id="section${i}" data-nav="Section${i}" class="my-section">
                       <div class="landing__container">
                         <h2>Section ${i}</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
                         <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
                        </div>
                      </section>`;

  // add my section to specific position
  section_Container.insertAdjacentHTML("beforeend", html_section);
   createListItem(i);
}
// create new section by click add button
myButton.addEventListener("click", createContent);

function createListItem(num) {
  let section_id = `section${num}`;
  // select ul element
  const navbar__list = document.querySelector("#navbar__list");
  // creat this piece of html that represent every nav bar for every section
  let html_nav = `<li id="nav_id${num}"><a href ="#${section_id}" data-nav = "${section_id}" class="menu__link">Section ${i}</a></li>`;
  // add this li element for specific position
  navbar__list.insertAdjacentHTML("beforeend", html_nav);
  let listItems = Array.from(document.querySelectorAll(".menu__link"));
  scroll_Smothly(listItems); 
}

function scroll_Smothly(listItems) { 
  listItems.forEach((item) => {
    item.addEventListener("click" , (e) => {
      e.preventDefault();
      if(e.target.dataset.nav) {
        document
        .getElementById(`${e.target.dataset.nav}`)
        .scrollIntoView({behavior:"smooth"})
      }
    })
  })
}


// on window scroll
window.addEventListener("scroll", () => {
  const sections = Array.from(document.querySelectorAll(".my-section"));
  // loop through each section
  sections.forEach((section) => {
    // get px distance from top
    const topDistance = section.getBoundingClientRect().top;
    // if the distance to the top is between 0-100px
    if (topDistance > 0 && topDistance < 100) {
      section.classList.add("your-active-class");
      document
        .querySelector(`a[data-nav="${section.id}"]`)
        .classList.add("navbar_active");
      // otherwise, remove the class
    } else {
      section.classList.remove("your-active-class");
      document
        .querySelector(`a[data-nav="${section.id}"]`)
        .classList.remove("navbar_active");
    }
  });
});
