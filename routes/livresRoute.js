const express = require('express');
const ejs = require('ejs'); // Assurez-vous d'importer EJS si nécessaire
const router = express.Router();

// Exemple de données
const livres = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943, genre: "Conte" },
    { titre: "1984", auteur: "George Orwell", annee: 1949, genre: "Dystopie" },
    { titre: "Moby Dick", auteur: "Herman Melville", annee: 1851, genre: "Aventure" },
    { titre: "Les Misérables", auteur: "Victor Hugo", annee: 1862, genre: "Roman historique" },
    { titre: "Pride and Prejudice", auteur: "Jane Austen", annee: 1813, genre: "Roman" },
    { titre: "To Kill a Mockingbird", auteur: "Harper Lee", annee: 1960, genre: "Drame" },
    { titre: "The Great Gatsby", auteur: "F. Scott Fitzgerald", annee: 1925, genre: "Roman" },
    { titre: "War and Peace", auteur: "Léon Tolstoï", annee: 1869, genre: "Roman historique" },
    { titre: "Crime and Punishment", auteur: "Fiodor Dostoïevski", annee: 1866, genre: "Philosophique" },
    { titre: "The Catcher in the Rye", auteur: "J.D. Salinger", annee: 1951, genre: "Roman" },
    { titre: "Brave New World", auteur: "Aldous Huxley", annee: 1932, genre: "Science-fiction" },
    { titre: "The Hobbit", auteur: "J.R.R. Tolkien", annee: 1937, genre: "Fantasy" }
];

// Route pour afficher la page de gestion des livres
router.get('/', (req, res) => {
    res.render('gestionLivres', { title: "Gestion des Livres", livres });
});
module.exports = router;



