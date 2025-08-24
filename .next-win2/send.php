<?php
// Configuration
$to_email = "tanyaartiste@gmail.com"; // Votre email de destination
$subject_prefix = "Message du site web - ";

// Vérification de la méthode POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: /contact");
    exit();
}

// Récupération des données du formulaire
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation des données
$errors = [];

if (empty($name)) {
    $errors[] = "Le nom est requis";
}

if (empty($email)) {
    $errors[] = "L'email est requis";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "L'email n'est pas valide";
}

if (empty($message)) {
    $errors[] = "Le message est requis";
}

// Si il y a des erreurs, rediriger avec les erreurs
if (!empty($errors)) {
    $error_string = implode(", ", $errors);
    header("Location: /contact?error=" . urlencode($error_string));
    exit();
}

// Protection anti-spam basique
if (strlen($message) > 5000) {
    header("Location: /contact?error=" . urlencode("Le message est trop long"));
    exit();
}

// Préparation de l'email
$subject = $subject_prefix . $name;
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Corps de l'email
$email_body = "
<html>
<head>
    <title>Nouveau message de contact</title>
</head>
<body>
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Message:</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
    <hr>
    <p><small>Message envoyé depuis le formulaire de contact du site web</small></p>
</body>
</html>
";

// Envoi de l'email
$mail_sent = mail($to_email, $subject, $email_body, $headers);

// Email de confirmation à l'expéditeur
$confirmation_subject = "Confirmation de votre message";
$confirmation_headers = "From: $to_email\r\n";
$confirmation_headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$confirmation_body = "
<html>
<head>
    <title>Confirmation de votre message</title>
</head>
<body>
    <h2>Merci pour votre message !</h2>
    <p>Bonjour $name,</p>
    <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
    <p><strong>Récapitulatif de votre message :</strong></p>
    <p>" . nl2br(htmlspecialchars($message)) . "</p>
    <hr>
    <p>Cordialement,<br>L'équipe du site</p>
</body>
</html>
";

// Envoi de l'email de confirmation
mail($email, $confirmation_subject, $confirmation_body, $confirmation_headers);

// Redirection avec succès ou erreur
if ($mail_sent) {
    header("Location: /contact?success=1");
} else {
    header("Location: /contact?error=" . urlencode("Erreur lors de l'envoi du message"));
}
exit();
?>




