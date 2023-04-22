<?php
    
    function generateFromHeader($name, $email) {
        $encodedName = '=?UTF-8?B?' . base64_encode($name) . '?=';
        return "From: $encodedName <$email>\r\n";
    }

    $to = 'admin@yanabychkova.com, bychkovnm@gmail.com, nikita7272727272@yandex.ru, bychkovnmo@outlook.com';
    $subject = 'Новая запись!';
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $extra = $_POST['extra'];

    $emailTemplate = file_get_contents('email-template.html');

    $emailBody = str_replace('{{name}}', $name, $emailTemplate);
    $emailBody = str_replace('{{tel}}', $tel, $emailBody);
    $emailBody = str_replace('{{extra}}', $extra, $emailBody);

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    $headers .= generateFromHeader('Помощник', 'vh324.timeweb.ru');

    mail($to, $subject, $emailBody, $headers);

?>