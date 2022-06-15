const sponsors = [
  "./assets/sponsors/dubo.png",
  "./assets/sponsors/pbm-reizen.png",
  "./assets/sponsors/afspanning.png",
  "./assets/sponsors/foodbart.png",
  "./assets/sponsors/gunther_van_hoof.png",
  "./assets/sponsors/numnum.png",
  "./assets/sponsors/tiers.png",
  "./assets/sponsors/sovilux.png",
  "./assets/sponsors/Jurgen_Cluyse.png",
  "./assets/sponsors/locatrans.png",
  "./assets/sponsors/johan_de_smet.png",
  "./assets/sponsors/descamps.png",
  "./assets/sponsors/delbaere_de_pau.png",
  "./assets/sponsors/garage_dhont.jpg",
  "./assets/sponsors/steven_de_smet.png",
  "./assets/sponsors/SamyRenting.png",
  "./assets/sponsors/heyerick.png",
  "./assets/sponsors/perfecta.png",
  "./assets/sponsors/allvino.png",
  "./assets/sponsors/deprins.png",
  "./assets/sponsors/o_5accountancy.png",
  "./assets/sponsors/larise.jpg",
  "./assets/sponsors/deruyck.png",
  "./assets/sponsors/take_the_shot.PNG",
  "./assets/sponsors/degrootte.png",
  "./assets/sponsors/kvk.png",
  "./assets/sponsors/jap.png",
  "./assets/sponsors/feys-deneys.png",
  "./assets/sponsors/vitraluxlogo.png",
  "./assets/sponsors/aminos.PNG",
  "./assets/sponsors/vdc.png",
  "./assets/sponsors/bruyneel.png",
  "./assets/sponsors/julie_braem.png",
  "./assets/sponsors/ruyck_schilderwerken.PNG",
  "./assets/sponsors/vf-bikes.png",
  "./assets/sponsors/idzi.png",
  "./assets/sponsors/vanbrabandt.png",
];

let sponsorDiv;

const insertImages = () => {
  let html = ``;
  sponsors.forEach((sponsor, index) => {
    html += `<img data-sizes="auto" data-src=${sponsor} class="lazyload blur-up u-1-of-3-bp3 c-sponsor" alt=${sponsor}/>`;
  });
  sponsorDiv.innerHTML = html;
};

document.addEventListener("DOMContentLoaded", function () {
  console.info("DOM geladen");
  sponsorDiv = document.querySelector(".js-sponsors");
  insertImages();
});
