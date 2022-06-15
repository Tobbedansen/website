<?php
// Checks if form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    function post_captcha($user_response) {
        $fields_string = '';
        $fields = array('secret' => '6LdkytQUAAAAAD6fmKziC1nnOPe_ibF7Rshg_DyX', 'response' => $user_response);
        foreach ($fields as $key => $value) $fields_string.= $key . '=' . $value . '&';
        $fields_string = rtrim($fields_string, '&');
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
        curl_setopt($ch, CURLOPT_POST, count($fields));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);
        $result = curl_exec($ch);
        curl_close($ch);
        return json_decode($result, true);
    }
    // Call the function post_captcha
    $res = post_captcha($_POST['g-recaptcha-response']);
    if (!$res['success']) {
        // What happens when the CAPTCHA wasn't checked
		echo '<p>Please go back and make sure you check the security CAPTCHA box.</p><br>';
    } else {
        // If CAPTCHA is successfully completed...
        #form variables
        $voornaam = $_POST['voornaam'];
        $naam = $_POST['naam'];
        $email = $_POST['email'];
        $telefoonnr = $_POST['telefoonnr'];
        $opmerking = $_POST['opmerking'];
        $to = "test@tobbedansen.be";
        $subject = "Inschrijving Tobbedansen";
        #filters out characters from email and replaces them with spaces
        function filter_email_header($form_field) {
            return preg_replace('/[\0\n\r\|\!\/\<\>\^\$\%\*\&]+/', '', $form_field);
        }
        function create_message($naam, $naamTobbe, $totaalBedrag, $email) {
            // return $message = "Beste " . strval($d1Naam) . "\r\nBij deze willen we uw bevestigen dat de registratie van uw inschrijving voor Tobbedansen 2020 is gelukt.\r\nOnderaan kan u al uw details terugvinden.\r\n\r\nUw inschrijving is pas volledig geregistreerd indien u het correcte bedrag overschrijft naar BE03143097784084 met vermelding 'inschrijving" . strval($naamTobbe) . "+ gelezen en goedgekeurd'.\r\n
            // Per deelnemende tobbe betaalt u €4 en dan nog eens een extra €6 per deelenemer voor de verzekering. Voor u zal dit dus op een totaal van €" . strval($totaalbedrag) . " neerkomen.\r\n\r\n
            // De donderdag of zaterdag vooraf aan tobbedansen zal u uw persoonlijk startuur toegekend krijgen via mail.\r\n\r\n
            // Uw deelname:\r\n\tDeelnemer 1:\r\n\t
            // " . strval($d1Voornaam . " " . $d1Naam) ."\r\n\t" . strval($d1Email);
            // return $message = "Beste $naam
            // Bij deze willen we u bevestigen dat de registratie van uw inschrijving voor tobbedansen is gelukt.\r\nOnderaan kan u al uw details terugvinden.
            // Uw inschrijving is pas volledig geregistreerd indien u het correcte bedrag overschrijft naar BE03143097784084 met vermelding 'INSCHRIJVING $naamTobbe + reglement gelezen en goedgekeurd'.\r\nPer deelenemende tobbe betaalt u  \xE2\x82\xAc4 en dan nog eens een extra \xE2\x82\xAc6 per deelnemer voor de verzekering. Voor u zal dit dus op een totaal van \xE2\x82\xAc$totaalBedrag neerkomen.
            // De donderdag of zaterdag vooraf aan Tobbedansen zal u uw persoonlijk startuur toegekend krijgen via mail.
            // Uw deelname:\tDeelnemer 1:\r\n\t* $naam\r\n\t* $email";
            $message = "<html><body>";
            $message .= "<p>Beste $naam <br />
            Bij deze willen we u bevestigen dat de registratie van uw inschrijving voor tobbedansen is gelukt.<br />Onderaan kan u al uw details terugvinden.<br /><br />
            Uw inschrijving is pas volledig geregistreerd indien u het correcte bedrag overschrijft naar BE03143097784084 met vermelding 'INSCHRIJVING $naamTobbe + reglement gelezen en goedgekeurd'.\r\nPer deelenemende tobbe betaalt u  \xE2\x82\xAc4 en dan nog eens een extra €6 per deelnemer voor de verzekering. Voor u zal dit dus op een totaal van €$totaalBedrag neerkomen.
            De donderdag of zaterdag vooraf aan Tobbedansen zal u uw persoonlijk startuur toegekend krijgen via mail. <br /></p>";
            $message .= "</body></html>";
            return $message;

        };
        
        $email = filter_email_header($email);

        $bericht = create_message("Jeff", "Den Toog", 40, "jef@test.com");



        $headers = "From: $email\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $sent = mail($to, $subject, $bericht, $headers);
        if ($sent) {
            header("Location: ../index.html");
        } else {
?><html>
        <head>
        <title>Er ging iets mis</title>
        </head>
        <body>
        <h1>Er ging iets mis</h1>
        <p>Er ging iets mis in het proces. Probeer later opnieuw.</p>
        </body>
        </html>
        <?php
            header("Location: ../index.html");
        }
    }
} else { 
	echo "<script type='text/javascript'>alert('Vul de Captcha in!');</script>";
}?>


