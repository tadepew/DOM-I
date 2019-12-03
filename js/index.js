const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Nav
const nav = document.querySelectorAll("nav a")
nav.forEach ((links, i) =>
  links.textContent = siteContent["nav"][`nav-item-${i+1}`]
)

const newNavLink = document.createElement('a')
newNavLink.textContent = "Help"
const parentElement = document.querySelector('nav')
parentElement.appendChild(newNavLink)

const newNavLink2 = document.createElement('a')
newNavLink2.textContent = "Home"
const parentElement2 = document.querySelector('nav')
parentElement2.prepend(newNavLink2)

const navColor = document.querySelectorAll("nav *")
navColor.forEach ( links =>
  links.style.color = "green"
)

//Cta
let elements = Object.values(siteContent["cta"]);

const cta = document.querySelectorAll(".cta-text *")
cta.forEach ((element, i) =>
  element.textContent = elements[i]
)
const h1 = document.querySelector(".cta-text h1");
h1.style.wordSpacing = "100vw"

const button = document.querySelector(".cta-text button");
button.style.borderRadius = "15px"

const img = document.querySelector("#cta-img");
img.src = siteContent["cta"]["img-src"]

//Main content top
const featuresHeader = document.querySelector(".top-content .text-content:first-of-type h4");
featuresHeader.textContent = siteContent["main-content"]["features-h4"]

const features = document.querySelector(".top-content .text-content:first-of-type p");
features.textContent = siteContent["main-content"]["features-content"]

const aboutHeader = document.querySelector(".top-content .text-content:last-of-type h4")
aboutHeader.textContent = siteContent["main-content"]["about-h4"]

const about = document.querySelector(".top-content .text-content:last-of-type p");
about.textContent = siteContent["main-content"]["about-content"]

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"]
middleImg.style.borderRadius = "15px"

//Main content bottom
const servicesHeader = document.querySelector(".bottom-content .text-content:first-of-type h4");
servicesHeader.textContent = siteContent["main-content"]["services-h4"]

const services = document.querySelector(".bottom-content .text-content:first-of-type p");
services.textContent = siteContent["main-content"]["services-content"]

const productHeader = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")
productHeader.textContent = siteContent["main-content"]["product-h4"]

const product = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
product.textContent = siteContent["main-content"]["product-content"]

const visionHeader = document.querySelector(".bottom-content .text-content:last-of-type h4")
visionHeader.textContent = siteContent["main-content"]["vision-h4"]

const vision = document.querySelector(".bottom-content .text-content:last-of-type p");
vision.textContent = siteContent["main-content"]["vision-content"]

//Contact
let val = Object.values(siteContent["contact"]);

const contact = document.querySelectorAll(".contact *")
contact.forEach ((line, i) => 
  line.textContent = val[i]
)

//Footer
const footer = document.querySelector("footer")
footer.textContent = siteContent["footer"]["copyright"]