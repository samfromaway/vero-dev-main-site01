const projects = [
  {
    id: 1,
    title: 'How To Medellin',
    desc:
      'This is a project which includes a database fetched directory and a fully functional real estate listing site.',
    img: '/project-images/howtomedellin01.png',
    icn: '/project-images/Icons02-HTM.png',
    link: 'https://www.how-to-medellin.com/',
    category: 'webDesign',
  },
  {
    id: 2,
    title: 'This Porfolio',
    desc:
      'This portfolio is entirely made with HTML5, CSS3 and Javascript. See more on GitHub.',
    img: '/project-images/portfolio01.png',
    icn: '/project-images/Icons02-Portfolio.png',
    link: 'https://github.com/samfromaway/portfolio03',
    category: 'webDesign',
  },
  {
    id: 3,
    title: 'How To Expat',
    desc:
      'This projects is for a business that needs a website which is quick to build and with fast loading times.',
    img: '/project-images/how-to-expat01.png',
    icn: '/project-images/Icons02-HTE.png',
    link: 'https://www.how-to-expat.com/',
    category: 'webDesign',
  },
  {
    id: 4,
    title: 'How To Expat',
    desc:
      'Different marketing sources were used in this business to generate a turnover of more than $30k in the first 12 months.',
    img: '/project-images/how-to-expat01.png',
    icn: '/project-images/Icons02-HTE-S.png',
    link: 'https://www.how-to-expat.com/',
    category: 'marketing',
  },
  {
    id: 5,
    title: 'BIBUS',
    desc:
      'Content writing and online marketing was a crucial part of this business marketing strategy to generate leads.',
    img: '/project-images/bibus01.png',
    icn: '/project-images/icons02-BIBUS.png',
    link: 'https://www.bibus.ch/',
    category: 'marketing',
  },
  {
    id: 6,
    title: 'Silverback Blog',
    desc:
      'In the first year, this blog reached more than 30k sessions only with SEO (no ppc).',
    img: '/project-images/traveling-silverback01.png',
    icn: '/project-images/Icons02-Silverback.png',
    link: 'blog01.html',
    category: 'marketing',
  },
  {
    id: 7,
    title: 'Product Portfolio',
    desc:
      'This website lists industrial products. It was important to have a clean and modern design to gain the trust of new clients.',
    img: '/project-images/fluidtechnik01.png',
    icn: '/project-images/Icons02-HTM.png',
    link: 'blog01.html',
    category: 'webDesign',
  },
  {
    id: 7,
    title: 'Engineer Website',
    desc:
      'This website is a knowledge base for Engineers in German speaking countries and containes more than 40 pages.',
    img: '/project-images/pneumatikinfo01.png',
    icn: '/project-images/Icons02-HTM.png',
    link: 'blog01.html',
    category: 'webDesign',
  },
];

// filtered array
const designProjects = projects.filter(designProjectFilter).slice(0, 3);
const marketingProjects = projects.filter(marketingProjectFilter).slice(0, 3);

// filtered categories
function designProjectFilter(projects) {
  return projects.category === 'webDesign';
}

function marketingProjectFilter(projects) {
  return projects.category === 'marketing';
}

//initial load
window.onload = () => {
  loadProjectData(projects);
};

// clickevent
const clickerFn1 = function () {
  loadProjectData(designProjects);
  loadSectionDesign();
};

const clickerFn2 = function () {
  loadProjectData(marketingProjects);
  loadSectionMarketing();
};

// load Section
const scrollPosition02 = document.getElementById('title07');
const scrollBehavior01 = 'smooth';
const fadeAfterClickTime = 500;
const fadeAfterClickOpacity = 0.3;

// behaviour
function loadSectionDesign() {
  // fade of pictures in menu
  $('#card-image01').fadeTo(fadeAfterClickTime, fadeAfterClickOpacity);
  $('#card-image02').fadeTo(fadeAfterClickTime, 1);
  appearSection();
}

function loadSectionMarketing() {
  // fade of pictures in menu
  $('#card-image02').fadeTo(fadeAfterClickTime, fadeAfterClickOpacity);
  $('#card-image01').fadeTo(fadeAfterClickTime, 1);
  appearSection();
}
//appear of section
function appearSection() {
  $('#section04').addClass('appear');
  scrollPosition02.scrollIntoView({
    behavior: scrollBehavior01,
  });
}

//tablecontentload
function loadProjectData(projects) {
  const projectData = document.getElementById('projectData');
  let dataHtml = '';

  for (let project of projects) {
    dataHtml += `
        <div class="card03">
        <div class=" hoveranim01p imgglow01">
          <a href=${project.link} target="blank">
            <img
              class="card03-img hoveranim01c"
              alt=${project.title}
              src=${project.img}
            />
          </a>
        </div>
        <img
          class="icons02"
          alt=${project.title}
          src=${project.icn}
        />
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
        <a href=${project.link} target="blank" class="button"
          >More</a>
      </div>`;
  }

  projectData.innerHTML = dataHtml;
}

const btnchooseCategory01 = document.getElementById('btnchooseCategory01');
const btnchooseCategory02 = document.getElementById('btnchooseCategory02');
const imgchooseCategory01 = document.getElementById('card-image01');
const imgchooseCategory02 = document.getElementById('card-image02');

btnchooseCategory01.addEventListener('click', clickerFn1);
imgchooseCategory01.addEventListener('click', clickerFn1);
btnchooseCategory02.addEventListener('click', clickerFn2);
imgchooseCategory02.addEventListener('click', clickerFn2);
