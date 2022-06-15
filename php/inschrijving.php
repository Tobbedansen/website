<?php
      if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        $fields = array(array("d1Voornaam", "d1Naam", "d1Email", "d1Gemeente", "d1Postcode", "d1Straat_en_nr" ,"d1Telnr", "d1Geboortedatum", "d1Geboorteplaats"),
                        array("d3Voornaam", "d3Naam", "d3Geboortedatum"),
                        array("d4Voornaam", "d4Naam", "d4Geboortedatum")
                      );
        
        for ($row=0; $row < count(fields); $row++) { 
          # code... 
         for ($col=0; $col < count(fields[$row]); $col++) {
           if ($row == 0) {
            ${$fields[$row][$col]} = $_GET[${$fields[$row][$col]}];
            echo ${$fields[$row][$col]};

           }
           ${$fields[$row][$col]} = $_GET[${$fields[$row][$col]}];
           echo '<p> ${$fields[$row][$col]} </p>';
         }
        }

        // $d1Voornaam = $_POST['voornaam'];
        // $d1Naam = $_POST['naam'];
        // $email = $_POST['email'];
        // $telefoonnr = $_POST['telefoonnr'];
        // $opmerking = $_POST['opmerking'];

        
        
        # credentials to send e-mail
        $bcc = "test@tobbedansen.be";
        $sender = "test@tobbedansen.be";
        $subject = "Inschrijving Tobbedansen 2020";


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
            return $message = "Beste $naam\r\nBij deze willen we u bevestigen dat de registratie van uw inschrijving voor tobbedansen is gelukt.\r\nOnderaan kan u al uw details terugvinden.\r\n\r\nUw inschrijving is pas volledig geregistreerd indien u het correcte bedrag overschrijft naar BE03143097784084 met vermelding 'INSCHRIJVING $naamTobbe + reglement gelezen en goedgekeurd'.\r\nPer deelenemende tobbe betaalt u  \xE2\x82\xAc4 en dan nog eens een extra \xE2\x82\xAc6 per deelnemer voor de verzekering. Voor u zal dit dus op een totaal van &euro;$totaalBedrag neerkomen.
            De donderdag of zaterdag vooraf aan Tobbedansen zal u uw persoonlijk startuur toegekend krijgen via mail.
            Uw deelname:\tDeelnemer 1:\r\n\t* $naam\r\n\t* $email";
        };
        
        $email = filter_email_header($email);

        $bericht = create_message("Jeff", "Den Toog", 40, "jef@test.com");

        $headers = "From: $sender\r\n, Bcc: $sender";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $sent = mail($email, $subject, $bericht, $headers);
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
}?>