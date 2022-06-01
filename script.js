
import LEVELS from "./levels.js";

//Select DOM Elements
const selector = document.getElementById("selector");
const technical = document.getElementById("technical");
const repertoire = document.getElementById("repertoire");
const etudes = document.getElementById("etudes");
const earTests = document.getElementById("earTests");
const levelName = document.getElementById("level-name");


selector.addEventListener("change", showRequirements)



function showRequirements() {
    switch (selector.value) {

        case "initial":
            technical.innerHTML = "";
            repertoire.innerHTML = "";
            etudes.innerHTML = "";
            earTests.innerHTML = "";
            levelName.innerHTML = "Select a level to view requirements"
            break;

        case "prepA":
            technical.innerHTML = LEVELS.prepA.technical;
            repertoire.innerHTML = LEVELS.prepA.repertoire;
            etudes.innerHTML = LEVELS.prepA.etudes;
            earTests.innerHTML = LEVELS.prepA.earTests;
            levelName.innerHTML = "Preparatory A Piano"
            break;

        case "prepB":
            technical.innerHTML = LEVELS.prepB.technical;
            repertoire.innerHTML = LEVELS.prepB.repertoire;
            etudes.innerHTML = LEVELS.prepB.etudes;
            earTests.innerHTML = LEVELS.prepB.earTests;
            levelName.innerHTML = "Preparatory B Piano"
            break;

        case "lvl1":
            technical.innerHTML = LEVELS.lvl1.technical;
            repertoire.innerHTML = LEVELS.lvl1.repertoire;
            etudes.innerHTML = LEVELS.lvl1.etudes;
            earTests.innerHTML = LEVELS.lvl1.earTests;
            levelName.innerHTML = "Level 1 Piano"
            break;

        case "lvl2":
            technical.innerHTML = LEVELS.lvl2.technical;
            repertoire.innerHTML = LEVELS.lvl2.repertoire;
            etudes.innerHTML = LEVELS.lvl2.etudes;
            earTests.innerHTML = LEVELS.lvl2.earTests;
            levelName.innerHTML = "Level 2 Piano"
            break;

        case "lvl3":
            technical.innerHTML = LEVELS.lvl3.technical;
            repertoire.innerHTML = LEVELS.lvl3.repertoire;
            etudes.innerHTML = LEVELS.lvl3.etudes;
            earTests.innerHTML = LEVELS.lvl3.earTests;
            levelName.innerHTML = "Level 3 Piano"
            break;

        case "lvl4":
            technical.innerHTML = LEVELS.lvl4.technical;
            repertoire.innerHTML = LEVELS.lvl4.repertoire;
            etudes.innerHTML = LEVELS.lvl4.etudes;
            earTests.innerHTML = LEVELS.lvl4.earTests;
            levelName.innerHTML = "Level 4 Piano"
            break;

        case "lvl5":
            technical.innerHTML = LEVELS.lvl5.technical;
            repertoire.innerHTML = LEVELS.lvl5.repertoire;
            etudes.innerHTML = LEVELS.lvl5.etudes;
            earTests.innerHTML = LEVELS.lvl5.earTests;
            levelName.innerHTML = "Level 5 Piano"
            break;

        case "lvl6":
            technical.innerHTML = LEVELS.lvl6.technical;
            repertoire.innerHTML = LEVELS.lvl6.repertoire;
            etudes.innerHTML = LEVELS.lvl6.etudes;
            earTests.innerHTML = LEVELS.lvl6.earTests;
            levelName.innerHTML = "Level 6 Piano"
            break;

        case "lvl7":
            technical.innerHTML = LEVELS.lvl7.technical;
            repertoire.innerHTML = LEVELS.lvl7.repertoire;
            etudes.innerHTML = LEVELS.lvl7.etudes;
            earTests.innerHTML = LEVELS.lvl7.earTests;
            levelName.innerHTML = "Level 7 Piano"
            break;

        case "lvl8":
            technical.innerHTML = LEVELS.lvl8.technical;
            repertoire.innerHTML = LEVELS.lvl8.repertoire;
            etudes.innerHTML = LEVELS.lvl8.etudes;
            earTests.innerHTML = LEVELS.lvl8.earTests;
            levelName.innerHTML = "Level 8 Piano"
            break;

        case "lvl9":
            technical.innerHTML = LEVELS.lvl9.technical;
            repertoire.innerHTML = LEVELS.lvl9.repertoire;
            etudes.innerHTML = LEVELS.lvl9.etudes;
            earTests.innerHTML = LEVELS.lvl9.earTests;
            levelName.innerHTML = "Level 9 Piano"
            break;

        case "lvl10":
            technical.innerHTML = LEVELS.lvl10.technical;
            repertoire.innerHTML = LEVELS.lvl10.repertoire;
            etudes.innerHTML = LEVELS.lvl10.etudes;
            earTests.innerHTML = LEVELS.lvl10.earTests;
            levelName.innerHTML = "Level 10 Piano"
            break;
    }
}
