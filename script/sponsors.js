const sponsors = [
  './sponsors/formule_5/DUBO.png',
  './sponsors/formule_5/Garage-de-Prins-1.png',
  './sponsors/formule_5/Heyerick-logo.png',
  './sponsors/formule_5/Inbetween-Mailtag.jpg',
  './sponsors/formule_5/afspanning.png',
  './sponsors/formule_5/allvino.png',
  './sponsors/formule_5/karper.jpeg',
  './sponsors/formule_5/RVB-CONSULT.jpg',
  './sponsors/formule_5/kvk.png',
  './sponsors/formule_5/samyrenting-1.png',
  './sponsors/formule_5/vanbrabandt.png',
  './sponsors/formule_5/vantieghem-deruyck-a5-9-1.png',
  './sponsors/formule_5/zakenkantoor-feys---de-nys.jpg',
  './sponsors/formule_5/Logo_NATLOT_CMYK_Baseline_Horiz.jpg',
  './sponsors/formule_4/DRUKKERIJ-DE-SCHRIJVER.jpg',
  './sponsors/formule_4/LogoDansaertPark_DRUK_CMYK_300dpi[1122].jpg',
  './sponsors/formule_4/benoit-security-1.png',
  './sponsors/formule_3/descamps@300x.png',
  './sponsors/formule_3/logo_alain_JAP-(1).jpg',
  './sponsors/formule_2/BioSolutions-Logo.png',
  './sponsors/formule_2/DESMET-Logo.jpg',
  './sponsors/formule_2/GuntherVanHof.jpg',
  './sponsors/formule_2/JulieBraemBV_drukwerk-1.png',
  './sponsors/formule_2/Jurgen-Cluyse-1.png',
  './sponsors/formule_2/VF-BIKES-banner--1.png',
  './sponsors/formule_2/deronne-logo.jpg',
  './sponsors/formule_2/foodbart@300x.png',
  './sponsors/formule_2/gliso-logo.jpg',
  './sponsors/formule_2/idzi.png',
  './sponsors/formule_2/sofre.jpg',
  './sponsors/formule_2/taketheshot.png',
  "./sponsors/formule_1/Logo---O'5-Accountancy.PNG",
  './sponsors/formule_1/Logo-Bruno-1.png',
  './sponsors/formule_1/afsluitingen-bruyneel.jpg',
  './sponsors/formule_1/bram-berlez.jpg',
  './sponsors/formule_1/locatrans.png',
  './sponsors/formule_1/pbm-reizen-logo.32114327.jpg',
  './sponsors/formule_1/delbaere-de-pau.png',
  './sponsors/formule_1/Vitralux-1.png',
  './sponsors/formule_1/logo-onze-architecten.png',
  './sponsors/formule_1/aminos.PNG',
  './sponsors/formule_1/bakkerijLarise-1.png',
  './sponsors/formule_1/perfecta-1.png',
  './sponsors/formule_1/ruyck-schilderwerken.PNG',
  './sponsors/formule_1/sovilux-1.png',
  './sponsors/formule_1/pleisterwerken-lievens.jpg',
  './sponsors/formule_1/mct.png',
  './sponsors/formule_1/elle.jpg',
];
let sponsorDiv;

const insertImages = () => {
  let html = ``;
  sponsors.forEach((sponsor, index) => {
    html += `<img data-sizes="auto" data-src=${sponsor} class="lazyload blur-up u-1-of-3-bp3 c-sponsor" alt=${sponsor}/>`;
  });
  sponsorDiv.innerHTML = html;
};

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM geladen');
  sponsorDiv = document.querySelector('.js-sponsors');
  insertImages();
});
