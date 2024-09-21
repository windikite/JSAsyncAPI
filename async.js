import public_key from "/keys.js";

async function getCharacterData() {
    const response = await fetch(
         `https://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
    );
    const fetched_data = await response.json();
    return fetched_data;
}

const character = [];

const carousel = document.getElementById("carousel-container");
const indicators = document.getElementById("indicators");

document.addEventListener("DOMContentLoaded", async () => {
    const characterData = await getCharacterData();
    let count = 0;
    let y = await characterData.data.results.forEach((x) => {
        let new_character = {
            name: x.name
        };
        let new_slide = document.createElement("div");
        let new_img = document.createElement("img");
        let bio_section = document.createElement("div");
        let character_name = document.createElement("h5");
        let character_blurb = document.createElement("p");
        let new_button = document.createElement("button");
        new_slide.classList.add("carousel-item");
        new_slide.classList.add("mx-auto");
        if (count == 0){
        new_slide.classList.add("active");
        }
        new_img.classList.add("d-block");
        new_img.classList.add("w-10");
        new_img.classList.add("mx-auto");
        new_img.src = x.thumbnail.path + "." + x.thumbnail.extension;
        bio_section.classList.add("carousel-caption");
        bio_section.classList.add("d-none");
        bio_section.classList.add("d-md-block");
        bio_section.classList.add("bg-dark");
        bio_section.classList.add("rounded");
        bio_section.classList.add("border");
        bio_section.classList.add("border-warning");
        character_name.innerHTML = x.name;
        if(x.series.items.length > 0){
            character_blurb.innerHTML = "As appears in: " + x.series.items[0].name;
            new_character["recent series"] = x.series.items[0].name
        };
        new_button.type = "button";
        new_button.setAttribute("data-bs-slide-to", count + 1);
        new_button.setAttribute("data-bs-target", "#carouselExampleCaptions");
        indicators.appendChild(new_button);
        bio_section.appendChild(character_name);
        bio_section.appendChild(character_blurb);
        new_slide.appendChild(bio_section);
        new_slide.appendChild(new_img);
        carousel.appendChild(new_slide);
        console.log(new_character);
        character.push(new_character);
        count++
    });
});