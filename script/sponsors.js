const webpSponsors = [
  './sponsors/formule_5/DUBO.webp',
  './sponsors/formule_5/Garage-de-Prins-1.webp',
  './sponsors/formule_5/Heyerick-logo.webp',
  './sponsors/formule_5/Inbetween-Mailtag.webp',
  './sponsors/formule_5/RVB-CONSULT.webp',
  './sponsors/formule_5/afspanning.webp',
  './sponsors/formule_5/allvino.webp',
  './sponsors/formule_5/kvk.webp',
  './sponsors/formule_5/samyrenting-1.webp',
  './sponsors/formule_5/vanbrabandt.webp',
  './sponsors/formule_5/vantieghem-deruyck-a5-9-1.webp',
  './sponsors/formule_5/zakenkantoor-feys---de-nys.webp',
  './sponsors/formule_4/DRUKKERIJ-DE-SCHRIJVER.webp',
  './sponsors/formule_4/benoit-security-1.webp',
  './sponsors/formule_3/descamps@300x.webp',
  './sponsors/formule_2/BioSolutions-Logo.webp',
  './sponsors/formule_2/DESMET-Logo.webp',
  './sponsors/formule_2/JulieBraemBV_drukwerk-1.webp',
  './sponsors/formule_2/VF-BIKES-banner--1.webp',
  './sponsors/formule_2/deronne-logo.webp',
  './sponsors/formule_2/foodbart@300x.webp',
  './sponsors/formule_2/gliso-logo.webp',
  './sponsors/formule_2/idzi.webp',
  './sponsors/formule_2/taketheshot.webp',
  "./sponsors/formule_1/Logo---O'5-Accountancy.webp",
  './sponsors/formule_1/Logo-Bruno-1.webp',
  './sponsors/formule_1/Vitralux-1.webp',
  './sponsors/formule_1/afsluitingen-bruyneel.webp',
  './sponsors/formule_1/aminos.webp',
  './sponsors/formule_1/bakkerijLarise-1.webp',
  './sponsors/formule_1/delbaere-de-pau.webp',
  './sponsors/formule_1/elle.webp',
  './sponsors/formule_1/locatrans.webp',
  './sponsors/formule_1/logo-onze-architecten.webp',
  './sponsors/formule_1/miteq.webp',
  './sponsors/formule_1/pbm-reizen-logo.32114327.webp',
  './sponsors/formule_1/perfecta-1.webp',
  './sponsors/formule_1/pleisterwerken-lievens.webp',
  './sponsors/formule_1/ruyck-schilderwerken.webp',
  './sponsors/formule_1/sovilux-1.webp',
];
const sponsors = [
  './sponsors/formule_5/DUBO.png',
  './sponsors/formule_5/Garage-de-Prins-1.png',
  './sponsors/formule_5/Heyerick-logo.png',
  './sponsors/formule_5/Inbetween-Mailtag.jpg',
  './sponsors/formule_5/RVB-CONSULT.jpg',
  './sponsors/formule_5/afspanning.png',
  './sponsors/formule_5/allvino.png',
  './sponsors/formule_5/kvk.png',
  './sponsors/formule_5/samyrenting-1.png',
  './sponsors/formule_5/vanbrabandt.png',
  './sponsors/formule_5/vantieghem-deruyck-a5-9-1.png',
  './sponsors/formule_5/zakenkantoor-feys---de-nys.jpg',
  './sponsors/formule_4/DRUKKERIJ-DE-SCHRIJVER.jpg',
  './sponsors/formule_4/benoit-security-1.png',
  './sponsors/formule_3/descamps@300x.png',
  './sponsors/formule_2/BioSolutions-Logo.png',
  './sponsors/formule_2/DESMET-Logo.jpg',
  './sponsors/formule_2/JulieBraemBV_drukwerk-1.png',
  './sponsors/formule_2/VF-BIKES-banner--1.png',
  './sponsors/formule_2/deronne-logo.jpg',
  './sponsors/formule_2/foodbart@300x.png',
  './sponsors/formule_2/gliso-logo.jpg',
  './sponsors/formule_2/idzi.png',
  './sponsors/formule_2/taketheshot.png',
  "./sponsors/formule_1/Logo---O'5-Accountancy.PNG",
  './sponsors/formule_1/Logo-Bruno-1.png',
  './sponsors/formule_1/Vitralux-1.png',
  './sponsors/formule_1/afsluitingen-bruyneel.jpg',
  './sponsors/formule_1/aminos.PNG',
  './sponsors/formule_1/bakkerijLarise-1.png',
  './sponsors/formule_1/delbaere-de-pau.png',
  './sponsors/formule_1/elle.jpg',
  './sponsors/formule_1/locatrans.png',
  './sponsors/formule_1/logo-onze-architecten.png',
  './sponsors/formule_1/miteq.png',
  './sponsors/formule_1/pbm-reizen-logo.32114327.jpg',
  './sponsors/formule_1/perfecta-1.png',
  './sponsors/formule_1/pleisterwerken-lievens.jpg',
  './sponsors/formule_1/ruyck-schilderwerken.PNG',
  './sponsors/formule_1/sovilux-1.png',
];

let webpSupport = false;
let sponsorDiv;

const insertImages = () => {
  let html = ``;

  if (webpSupport) {
    webpSponsors.forEach((sponsor, index) => {
      html += `<img data-sizes="auto" data-src=${sponsor} class="lazyload blur-up u-1-of-3-bp3 c-sponsor" alt=${sponsor}/>`;
    });
    sponsorDiv.innerHTML = html;
  } else {
    sponsors.forEach((sponsor, index) => {
      html += `<img data-sizes="auto" data-src=${sponsor} class="lazyload blur-up u-1-of-3-bp3 c-sponsor" alt=${sponsor}/>`;
    });
    sponsorDiv.innerHTML = html;
  }

  sponsorDiv.innerHTML = html;
};

const hasWebpSupport = () => {
  let el = document.createElement('canvas');
  if (!!(el.getContext && el.getContext('2d'))) {
    // was able or not to get WebP representation
    const result = el.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    console.log(`webP support: ${result}`);
    return result;
  } else {
    // very old browser like IE8, canvas not supported
    return false;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM geladen');
  sponsorDiv = document.querySelector('.js-sponsors');
  webpSupport = hasWebpSupport();
  insertImages();
});
