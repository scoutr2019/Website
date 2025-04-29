<?php
// Configuratie
$recipient_email = "info@tandartsswaelens.be";
$email_subject = "Nieuw bericht via contactformulier website";

// Controleer of het formulier is verzonden
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Haal de formuliergegevens op
    $name = $_POST["name"] ?? "";
    $email = $_POST["email"] ?? "";
    $phone = $_POST["phone"] ?? "";
    $message = $_POST["message"] ?? "";
    
    // Valideer de invoer
    if (empty($name) || empty($email) || empty($phone) || empty($message)) {
        echo json_encode([
            "success" => false,
            "message" => "Alle velden zijn verplicht"
        ]);
        exit;
    }
    
    // Valideer e-mailadres
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "success" => false,
            "message" => "Ongeldig e-mailadres"
        ]);
        exit;
    }
    
    // Stel de e-mailheaders in
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Stel de e-mailinhoud samen
    $email_content = "Naam: $name\n";
    $email_content .= "E-mail: $email\n";
    $email_content .= "Telefoon: $phone\n\n";
    $email_content .= "Bericht:\n$message\n";
    
    // Verzend de e-mail
    $success = mail($recipient_email, $email_subject, $email_content, $headers);
    
    // Stuur een JSON-respons terug
    if ($success) {
        echo json_encode([
            "success" => true,
            "message" => "Bericht succesvol verzonden. We nemen zo snel mogelijk contact met u op."
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw."
        ]);
    }
    exit;
}

// Als het script direct wordt geopend zonder POST-verzoek
echo "Dit script kan alleen worden gebruikt via het contactformulier.";
?>
