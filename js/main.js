let lang;
let pageName;


function fetchLangText() {
    fetch("./data/"+lang+".txt")
        .then((res) => res.text())
        .then((text) => {
            let lines = text.split("\n")

            document.getElementById("label_lang").innerHTML = lines[0]
            document.getElementById("about_button").innerHTML = lines[1]
            document.getElementsByTagName("footer")[0].innerHTML = lines[2]

            let jump = 0;
            let texts = document.getElementsByClassName("text")

            switch (pageName) {
                case "Béatrice GARCIA CEGARRA": jump = 4; break;
                case "C.V. - Béatrice GARCIA CEGARRA": {

                    let downloadButton = document.getElementById("download_CV")
                    downloadButton.href = "data/CV_Béatrice_GARCIACEGARRA_RechercheStage_" + lang + ".pdf"
                    downloadButton.download="CV_BéatriceGARCIACEGARRA_" + lang

                    let tabInfo= document.getElementById("tab-info")
                    tabInfo.src = "img/TabInfo_" + lang + ".png"

                    jump = 17;
                    break;
                }
                case "Contact - Béatrice GARCIA CEGARRA": {
                    document.getElementById("button").value = lines[15]
                    jump = 8; break;
                }
                case "Portfolio - Béatrice GARCIA CEGARRA": jump = 88; break;
            }

            for(let i=0; i<texts.length; ++i) {
                texts[i].innerHTML = lines[i+jump]
            }

        })
        .catch((e) => console.error(e));
}
function changeLangListener() {
    lang = document.getElementById("select_lang").value
    fetchLangText()
    sessionStorage.setItem("lang", lang);

    /*
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set("lang", lang)
    const newRelativePathQuery = window.location.pathname +"?" + searchParams.toString()
    history.pushState(null, "", newRelativePathQuery)
     */
}
function init(){
    document.getElementById("select_lang").onchange = changeLangListener

    lang = sessionStorage.getItem("lang");
    if(lang == null) lang = "fr";
    document.getElementById("select_lang").value = lang

    fetchLangText()
}
function SetPageName() {
    pageName = document.title
}

window.onload = init
window.addEventListener('load', SetPageName, false);
