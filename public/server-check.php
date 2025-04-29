<?php
// Server configuratie check voor Tandarts Swaelens website

$results = array(
    'php_version' => PHP_VERSION,
    'server_software' => $_SERVER['SERVER_SOFTWARE'],
    'document_root' => $_SERVER['DOCUMENT_ROOT'],
    'server_protocol' => $_SERVER['SERVER_PROTOCOL'],
    'request_time' => date('Y-m-d H:i:s', $_SERVER['REQUEST_TIME']),
    'https' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'Ja' : 'Nee',
    'gd_support' => extension_loaded('gd') ? 'Ja' : 'Nee',
    'mail_function' => function_exists('mail') ? 'Beschikbaar' : 'Niet beschikbaar'
);

header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Server Check - Tandarts Swaelens</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #0891b2;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
        }
        .success {
            color: green;
        }
        .warning {
            color: orange;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <h1>Server Configuratie Check</h1>
    <p>Dit bestand controleert of de server correct is geconfigureerd voor de Tandarts Swaelens website.</p>
    
    <table>
        <tr>
            <th>Instelling</th>
            <th>Waarde</th>
        </tr>
        <?php foreach($results as $key => $value): ?>
        <tr>
            <td><?php echo ucwords(str_replace('_', ' ', $key)); ?></td>
            <td><?php echo $value; ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
    
    <h2>Email Test</h2>
    <p>Klik op de knop hieronder om te testen of de server emails kan versturen:</p>
    
    <?php
    if(isset($_POST['test_email'])) {
        $to = "webmaster@example.com"; // Vervang dit door een echt email adres
        $subject = "Test Email van Tandarts Swaelens Website";
        $message = "Dit is een test email om te controleren of de server correct is geconfigureerd voor het versturen van emails.";
        $headers = "From: webmaster@example.com";
        
        if(mail($to, $subject, $message, $headers)) {
            echo '<p class="success">Test email is verzonden! Controleer de inbox.</p>';
        } else {
            echo '<p class="error">Er is een probleem opgetreden bij het versturen van de test email.</p>';
        }
    }
    ?>
    
    <form method="post">
        <button type="submit" name="test_email" style="padding: 10px 15px; background-color: #0891b2; color: white; border: none; cursor: pointer;">
            Verstuur Test Email
        </button>
    </form>
    
    <p><a href="/" style="color: #0891b2;">Terug naar de homepage</a></p>
</body>
</html>
