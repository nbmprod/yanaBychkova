<?php
    
    $subject = 'Письмо от Робота!';
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $extra = $_POST['extra'];

    $message = "Яна, моя дорогая, Вам пришло следующее сообщение:\r\nИмя: $name \r\nТелефон: $tel \r\nДополнительная информация: $extra";

    $message = wordwrap($message, 70, "\r\n");

    mail('admin@yanabychkova.com', $subject, $message);

?>