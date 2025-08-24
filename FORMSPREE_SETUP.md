# Configuration Formspree pour le formulaire de contact

## Étapes pour configurer Formspree :

### 1. Créer un compte Formspree
- Allez sur [formspree.io](https://formspree.io)
- Créez un compte gratuit
- Vérifiez votre email

### 2. Créer un nouveau formulaire
- Dans votre dashboard Formspree, cliquez sur "New Form"
- Donnez un nom à votre formulaire (ex: "Contact Site Web")
- Notez l'ID du formulaire qui sera généré (format: xqkqkqkq)

### 3. Remplacer l'ID dans le code
Dans le fichier `src/app/contact/page.tsx`, remplacez `YOUR_FORM_ID` par votre véritable ID Formspree :

```typescript
const response = await fetch('https://formspree.io/f/VOTRE_ID_ICI', {
```

### 4. Configuration des notifications
- Dans votre dashboard Formspree, allez dans les paramètres du formulaire
- Configurez l'email de destination (votre email)
- Activez les notifications par email

### 5. Test du formulaire
- Testez le formulaire en mode développement
- Vérifiez que vous recevez bien les emails de test

## Avantages de Formspree pour un déploiement statique :
- ✅ Fonctionne sans serveur
- ✅ Gratuit jusqu'à 50 soumissions/mois
- ✅ Protection anti-spam intégrée
- ✅ Notifications par email
- ✅ Interface de gestion des messages
- ✅ Compatible avec tous les hébergeurs statiques

## Alternative : Netlify Forms
Si vous déployez sur Netlify, vous pouvez aussi utiliser Netlify Forms en ajoutant `data-netlify="true"` à votre formulaire.

