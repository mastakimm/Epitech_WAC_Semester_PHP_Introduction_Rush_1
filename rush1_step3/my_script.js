document.addEventListener("DOMContentLoaded", function() {
    const formulaire = document.querySelector('form');

    formulaire.addEventListener('submit', function(event) {
        event.preventDefault();

        const sexe = document.getElementsByName("sexe");
        let sexeSelected = false;

        for (let i = 0; i < sexe.length; i++) {
            if (sexe[i].checked) {
                sexeSelected = true;
                break;
            }
        }
        if (!sexeSelected) {
            alert("Vous devez choisir votre sexe.");
            return;
        }


        const civilite = document.getElementById("civil-select");
        if(civilite.value === ""){
            alert('Renseignez votre civilité.');
            return;
        }



        const nom = document.getElementById("nom");
        if (nom.value === "") {
            alert('Entrez votre nom.');
            return;
        }

        const emailInput = document.getElementById('email');
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailInput.value.match(emailRegex)) {
            alert('L\'adresse email n\'est pas valide.');
            return;
        }

        const numero = document.getElementById("tel");
        if (numero.value === "") {
            alert('Entrez votre numéro de téléphone.');
            return;
        }

        const website = document.getElementById("website");
        if (website.value === "") {
            alert('Entrez une URL.');
            return;
        }

        // date
        const date = document.getElementById("date_de_naissance");
        if(date.value === ""){
            alert('Renseignez votre date de naissance.');
            return;
        }

        const activite = document.querySelectorAll('input[type="checkbox"][name="activite"]');
        let activiteSelected = false;

        activite.forEach(function(activite) {
            if (activite.checked) {
                activiteSelected = true;
            }
        });

        if (!activiteSelected) {
            alert('Sélectionnez au moins une activité.');
            return;
        }

        formulaire.submit();
    });
});

window.onload = function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const champs = form.querySelectorAll('input, select, textarea');

        champs.forEach(champ => {
            if (champ.value.trim() === '') {
                champ.style.backgroundColor = 'red';
            }
        });
    });
};