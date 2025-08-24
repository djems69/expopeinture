<?php
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

try {
  $contentType = $_SERVER['CONTENT_TYPE'] ?? ($_SERVER['HTTP_CONTENT_TYPE'] ?? '');
  $data = [];
  $raw = file_get_contents('php://input');
  if (is_string($raw) && strlen($raw) > 0) {
    if (stripos($contentType, 'application/json') !== false) {
      $json = json_decode($raw, true);
      if (is_array($json)) { $data = $json; }
    } elseif (stripos($contentType, 'application/x-www-form-urlencoded') !== false) {
      parse_str($raw, $parsed);
      if (is_array($parsed)) { $data = $parsed; }
    }
    if (!$data) {
      $json2 = json_decode($raw, true);
      if (is_array($json2)) { $data = $json2; }
      else { parse_str($raw, $parsed2); if (is_array($parsed2)) { $data = $parsed2; } }
    }
  }
  if (!$data) { if (!empty($_POST)) { $data = $_POST; } elseif (!empty($_REQUEST)) { $data = $_REQUEST; } }

  $name = isset($data['name']) ? trim($data['name']) : '';
  $email = isset($data['email']) ? trim($data['email']) : '';
  $message = isset($data['message']) ? trim($data['message']) : '';
  if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['message' => 'Champs requis manquants.']);
    exit;
  }

  $to = 'tanyaartiste@gmail.com';
  $subject = 'Message from ' . $name . ' (Contact Form)';
  $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
  $fromHeader = $email !== '' ? ($name . ' <' . $email . '>') : 'no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost');
  $headers = 'From: ' . $fromHeader . "\r\n" . 'Reply-To: ' . $email . "\r\n";

  $sent = @mail($to, $subject, $body, $headers);
  if ($sent) { echo json_encode(['message' => 'Votre message a été envoyé avec succès !']); }
  else { http_response_code(500); echo json_encode(['message' => "Une erreur est survenue lors de l'envoi du message."]); }
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['message' => 'Erreur serveur.']);
}
?>



