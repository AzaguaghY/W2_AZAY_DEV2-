const express = require('express');
const ejs = require('ejs');
const router = express.Router();

const usagers = [
    { login: "jo@gmail.com", nom: "Jo Mail", roles: ["normal", "admin", "CMS"] },
    { login: "sara@yahoo.com", nom: "Sara Doe", roles: ["normal"] },
    { login: "alex@outlook.com", nom: "Alex Smith", roles: ["admin", "editor"] },
    { login: "lina@protonmail.com", nom: "Lina Heart", roles: ["normal", "CMS"] },
    { login: "benjamin@mail.com", nom: "Benjamin King", roles: ["admin"] },
    { login: "claire@example.com", nom: "Claire White", roles: ["normal", "editor", "CMS"] }
];

// Route pour afficher la liste des usagers
router.get('/', (req, res) => {
    res.render('gestionUsagers', { usagers: usagers, title: "Gestion des Usagers" });
});

module.exports = router;


