const express = require('express');
const path = require('path');
const app = express();

// Configuration du moteur de vues
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



// Importation des routes
const livresRoute = require('./routes/livresRoute');
const usagersRoute = require('./routes/usagersRoute');

// Configuration des routes
app.use('/livres', livresRoute);
app.use('/usagers', usagersRoute);

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.render('menu', { title: "Page d'accueil" });
});


// Route pour quiter le site web
app.get('/quitter', (req, res) => {
    res.render('quitter', { title: "Quitter le site Web" });
});


// Gestion des erreurs 404 (routes non définies)
app.use((req, res) => {
    res.status(404).render('404', { title: "404 - Page non trouvée" });
});


// Démarrage du serveur
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});




