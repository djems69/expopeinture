# Script PHP - Formulaire de Contact

## 📧 Fonctionnement

Le script `send.php` traite l'envoi d'emails depuis votre formulaire de contact.

## ⚙️ Configuration

### Email de destination
Modifiez cette ligne dans `send.php` :
```php
$to_email = "tanyaartiste@gmail.com"; // Remplacez par votre email
```

### Préfixe du sujet
```php
$subject_prefix = "Message du site web - ";
```

## 🔒 Sécurité

### Validation des données
- ✅ Vérification que tous les champs sont remplis
- ✅ Validation du format email
- ✅ Protection contre les messages trop longs (>5000 caractères)

### Protection anti-spam
- ✅ Limitation de la taille du message
- ✅ Validation côté serveur
- ✅ Headers sécurisés

## 📨 Fonctionnalités

### 1. Email principal
- Envoyé à votre email de destination
- Contient toutes les informations du formulaire
- Format HTML avec mise en forme

### 2. Email de confirmation
- Envoyé automatiquement à l'expéditeur
- Confirme la réception du message
- Inclut un récapitulatif

### 3. Gestion des erreurs
- Redirection avec messages d'erreur
- Validation des données
- Gestion des cas d'échec

## 🚀 Déploiement

1. **Upload sur Hostinger**
   - Placez `send.php` dans le dossier `public_html`
   - Assurez-vous que PHP est activé sur votre hébergement

2. **Test du formulaire**
   - Remplissez le formulaire de contact
   - Vérifiez que vous recevez l'email
   - Vérifiez que l'expéditeur reçoit la confirmation

## 🔧 Personnalisation

### Modifier le template d'email
Vous pouvez personnaliser le contenu des emails en modifiant les variables `$email_body` et `$confirmation_body`.

### Ajouter des champs
Pour ajouter de nouveaux champs au formulaire :
1. Ajoutez le champ dans le formulaire HTML
2. Récupérez la valeur dans `send.php` avec `$_POST['nom_du_champ']`
3. Ajoutez la validation si nécessaire
4. Incluez dans le corps de l'email

## ⚠️ Troubleshooting

### L'email n'est pas reçu
- Vérifiez que PHP est activé sur Hostinger
- Vérifiez les logs d'erreur PHP
- Testez avec un email de destination différent

### Erreur de redirection
- Vérifiez que le fichier `send.php` est bien dans le bon dossier
- Assurez-vous que les permissions sont correctes (644)

### Spam détecté
- Vérifiez que l'email de destination est correct
- Ajoutez des protections anti-spam supplémentaires si nécessaire

