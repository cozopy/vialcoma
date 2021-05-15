<?php
	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$company = $_POST["company"];
	$message = $_POST["message"];

	$emailTo = "ventas@vialcoma.com.mx";
	$subject = "Nuevo comentario de " . $name . " desde la página web";

	$body = "Nombre: ";
	$body .= $name;
	$body .= "\r\n";
	 
	$body .= "Correo electrónico: ";
	$body .= $email;
	$body .= "\r\n";

	$body .= "Teléfono: ";
	$body .= $phone;
	$body .= "\r\n";

	$body .= "Empresa: ";
	$body .= $company;
	$body .= "\r\n";
	 
	$body .= "Comentario: ";
	$body .= $message;
	$body .= "\r\n";

	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/plain; charset=UTF-8" . "\r\n";
	$headers .= "From:" . $email . "\r\n";

	$success = mail($emailTo, $subject, $body, $headers);
	 
	if ($success){
		echo "success";
	}else{
		echo "invalid";
	}
?>