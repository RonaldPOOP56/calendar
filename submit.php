<?php
// Verify the hCaptcha response
$captcha_response = $_POST['h-captcha-response'];
$secret_key = 'ES_d52d9a2748e743eab8fbc19ac301e671';
$response = file_get_contents("https://hcaptcha.com/siteverify?secret=$secret_key&response=$captcha_response");
$result = json_decode($response);

if ($result->success) {
    // Captcha validation passed, process the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $event = $_POST['event'];
    $message = $_POST['message'];

    // Do something with the form data, e.g., send an email, save to a database, etc.
    echo "Form submitted successfully!";
} else {
    // Captcha validation failed
    echo "hCaptcha validation failed. Please try again.";
}
?>