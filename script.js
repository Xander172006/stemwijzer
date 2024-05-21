let questionIndex = 0;
const question = ["Nederland moet zich houden aan de nato norm 2% van bbp naar defensie",
    "kernenergie Moet gebruikt worden als deel van ons klimaatplan",
    "hbo en wo meer Nederlands talig maken (bachelor's), voor zowel de Nederlandse taal als de druk op de woningen markt.",
    "Er moet een bindend referendum komen",
    "De eu moet uitgebreid worden qua lidstaten",
    "minimum loon moet geïndexeerd worden op 60% mediaan inkomen",
    "Er moet meer belasting komen op korte afstand vluchten",
    "Vuurwerk voor particulieren moet afgeschaft worden en er moeten officiële vuurwerkshows komen in de plaats",
    "Het moet verboden worden om ras te gebruiken bij het inschatten van ricico.",
    "Er moet gestopt worden met lgbt in het onderwijs te leren.",
    "Er moeten controles komen op wat er geleerd word aan kinderen in kerken",
    "Als een vluchteling naar Nederland komt en mag blijven, moet het gezin ook naar Nederland moeten mogen komen",
    "Kinderopvang moet gratis worden",
    "Eigen risico moet worden afgeschaft bij zorgverzekeringen",
    "Accijns op benzine, diesel en gas moet minder worden",
    "Er moeten veel minder vluchtelingen naar Nederland komen",
    "Hoeveelheid vee moet heel erg omlaag"];
const partijen = ["vvd", "sp", "groenlinks", "volt", "d66", "pvdd", "sgp"];
const partijenMening = [
    ["voor", "tegen", "geen meening", "voor", "voor", "tegen", "voor"],
    ["voor", "Tegen", "geen meening", "Voor", "Voor", "Tegen", "Voor"],
    ["voor", "Voor", "Tegen", "voor", "voor", "Tegen", "geen meening"],
    ["geen meening", "Voor", "Voor", "Tegen", "Voor", "Voor", "Voor"],
    ["geen meening", "Tegen", "Voor", "voor", "Tegen", "Tegen", "Tegen"],
    ["voor", "Voor", "Tegen", "Voor", "Voor", "Voor", "Voor"],
    ["Voor", "Tegen", "Voor", "Voor", "Voor", "Voor", "Voor"],
    ["Tegen", "Tegen", "Voor", "Voor", "geen meening", "Voor", "Voor"],
    ["voor", "Voor", "Voor", "geen meening", "Voor", "Voor", "geen meening"],
    ["geen meening", "geen meening", "voor", "voor", "voor", "voor", "tegen"],
    ["voor", "voor", "tegen", "tegen", "voor", "tegen", "tegen"],
    ["tegen", "voor", "voor", "voor", "voor", "voor", "tegen"],
    ["voor", "voor", "voor", "voor", "voor", "tegen", "tegen"],
    ["tegen", "voor", "voor", "tegen", "tegen", "voor", "tegen"],
    ["voor", "voor", "tegen", "tegen", "tegen", "tegen", "voor"],
    ["voor", "neutraal", "tegen", "tegen", "tegen", "tegen", "voor"],
    ["tegen", "tegen", "voor", "tegen", "voor", "voor", "tegen"]
]
let andword = []
let partijlove = []



document.getElementById("question").innerText = question[questionIndex];
document.getElementById("seek").style.display = "none"

function awncer(i) {
    console.log("Answer chosen:", i);
    andword.push(i);
    questionIndex++;
    document.getElementById("question").innerText = question[questionIndex];

    if (questionIndex == question.length) {
        console.log("Entering enterdata()");
        enterdata();
    }
    return 0;
}

function enterdata() {
    console.log("Calculating party scores...");
    for (let i = 0; i < partijen.length; i++) {
        let iii = 0;
        console.log("outer loop")

        for (let ii = 0; ii < question.length; ii++) {
            console.log("iner loop")
            if (andword[ii] == partijenMening[ii][i]) {
                iii++;
            }
        }
        console.log(partijen[i] + ": " + iii);
        partijlove.push({ partij: partijen[i], love: iii });
    }

    partijlove.sort((a, b) => b.love - a.love);
    console.log("Party scores calculated:", partijlove);

    document.getElementById("hide").style.display = "none";
    document.getElementById("seek").style.display = "";

    for (let i = 0; i < partijen.length; i++) {
        let div = document.getElementById("seek");
        let newelement = document.createElement("p");
        newelement.textContent = partijlove[i].partij + " : " + partijlove[i].love;
        div.appendChild(newelement);
    }
}


