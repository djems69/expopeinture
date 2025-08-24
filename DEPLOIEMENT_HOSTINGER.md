# Guide de déploiement sur Hostinger

## 🚀 Votre site statique est prêt !

Le build a été généré avec succès dans le dossier `.next-win2/`. Voici comment le déployer sur Hostinger :

## 📁 Fichiers à uploader

Tous les fichiers du dossier `.next-win2/` doivent être uploadés sur votre hébergement Hostinger.

### Fichiers principaux :
- `index.html` - Page d'accueil
- `404.html` - Page d'erreur 404
- `favicon.ico` - Icône du site
- Dossier `images/` - Toutes vos images
- Dossier `_next/` - Assets JavaScript/CSS optimisés
- Dossiers `a-propos/`, `contact/`, `galerie/` - Pages du site

## 🔧 Étapes de déploiement sur Hostinger

### 1. Accéder au File Manager
- Connectez-vous à votre panneau de contrôle Hostinger
- Allez dans "File Manager" ou "Gestionnaire de fichiers"

### 2. Naviguer vers le dossier public_html
- Ouvrez le dossier `public_html` (ou `www` selon votre configuration)
- C'est le dossier racine de votre site web

### 3. Uploader les fichiers
- **Option A : Upload individuel**
  - Upload tous les fichiers du dossier `.next-win2/` directement dans `public_html`
  
- **Option B : Upload en ZIP** (recommandé)
  - Compressez le contenu du dossier `.next-win2/` en ZIP
  - Upload le ZIP dans `public_html`
  - Décompressez le ZIP sur le serveur

### 4. Vérifier la structure
Votre `public_html` devrait contenir :
```
public_html/
├── index.html
├── 404.html
├── favicon.ico
├── images/
├── _next/
├── a-propos/
├── contact/
└── galerie/
```

## ⚠️ Points importants

### Configuration du script PHP
⚠️ **Votre formulaire utilise maintenant un script PHP !**

Le script `send.php` est déjà configuré pour envoyer les emails à `tanyaartiste@gmail.com`.

**Pour personnaliser :**
1. Ouvrez le fichier `send.php` dans le dossier `.next-win2/`
2. Modifiez la ligne `$to_email = "tanyaartiste@gmail.com";` avec votre email
3. Upload le fichier modifié sur Hostinger

**Fonctionnalités du script :**
- ✅ Validation des données
- ✅ Protection anti-spam basique
- ✅ Email de confirmation automatique
- ✅ Gestion des erreurs
- ✅ Redirection avec messages de succès/erreur

### Test du site
- Votre site sera accessible à votre domaine Hostinger
- Testez toutes les pages : accueil, à propos, galerie, contact
- Vérifiez que le formulaire de contact fonctionne

## 🔄 Mise à jour du site

Pour mettre à jour votre site :
1. Modifiez vos fichiers dans le projet
2. Lancez `npm run build`
3. Upload les nouveaux fichiers du dossier `.next-win2/` sur Hostinger

## 📞 Support

Si vous rencontrez des problèmes :
- Vérifiez que tous les fichiers sont bien uploadés
- Assurez-vous que la structure des dossiers est correcte
- Contactez le support Hostinger si nécessaire

## ✅ Checklist finale

- [ ] Build réussi (`npm run build`)
- [ ] Fichiers uploadés sur Hostinger
- [ ] Script PHP `send.php` configuré (email de destination)
- [ ] Site accessible en ligne
- [ ] Formulaire de contact fonctionnel
- [ ] Toutes les pages testées

🎉 **Votre site est maintenant en ligne !**
