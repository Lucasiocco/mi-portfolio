<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Recibir los datos JSON
$data = json_decode(file_get_contents('php://input'), true);

// Validar datos
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    echo json_encode(['success' => false, 'message' => 'Todos los campos son requeridos']);
    exit;
}

// Validar email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

// Configuración del email
$to = "lucas.nahuel.iocco@gmail.com"; // Cambia esto por tu email
$subject = "Nuevo mensaje de contacto: " . $data['subject'];

$message = "Nombre: " . htmlspecialchars($data['name']) . "\n";
$message .= "Email: " . htmlspecialchars($data['email']) . "\n";
$message .= "Asunto: " . htmlspecialchars($data['subject']) . "\n\n";
$message .= "Mensaje:\n" . htmlspecialchars($data['message']);

// Headers
$headers = "From: " . $data['email'] . "\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar email
try {
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito']);
    } else {
        throw new Exception('Error al enviar el email');
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>