<?php
    
    $to = 'admin@yanabychkova.com';
    $subject = 'Письмо от Робота!';
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $extra = $_POST['extra'];

    // Read the email template from the file
    $emailTemplate = file_get_contents('email-template.html');

     // Replace the placeholders with the user data
     $emailBody = str_replace('{{name}}', $name, $emailTemplate);
     $emailBody = str_replace('{{tel}}', $tel, $emailBody);
     $emailBody = str_replace('{{extra}}', $extra, $emailBody);
 
     // Set up the email headers
     $headers = 'MIME-Version: 1.0' . "\r\n";
     $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
     $headers .= 'From: Robot <robot@example.com>' . "\r\n";

    // $message = "Яна, моя дорогая, Вам пришло следующее сообщение:\r\nИмя: $name \r\nТелефон: $tel \r\nДополнительная информация: $extra";

    // $message = wordwrap($message, 70, "\r\n");

    // Send the email
    mail($to, $subject, $emailBody, $headers);

?>