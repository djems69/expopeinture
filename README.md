# Tany'Art - Galerie d'Art

Site web de galerie d'art pour Tany'Art.

## Déploiement sur GitHub Pages

### Étapes pour déployer :

1. **Pousser le code sur GitHub** :
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Activer GitHub Pages** :
   - Allez dans les paramètres de votre repository GitHub
   - Scrollez jusqu'à la section "Pages"
   - Dans "Source", sélectionnez "Deploy from a branch"
   - Choisissez la branche "gh-pages" et le dossier "/ (root)"
   - Cliquez sur "Save"

3. **Le déploiement automatique** :
   - Chaque fois que vous poussez du code sur la branche `main`
   - GitHub Actions va automatiquement :
     - Installer les dépendances
     - Construire le projet
     - Déployer sur GitHub Pages

### Structure du projet :
- `src/app/` : Pages Next.js
- `public/images/` : Images de la galerie
- `.github/workflows/` : Configuration du déploiement automatique

### Commandes locales :
```bash
npm run dev    # Développement local
npm run build  # Construction pour production
npm run export # Export statique
```

Le site sera accessible à l'adresse : `https://[votre-username].github.io/[nom-du-repo]`
