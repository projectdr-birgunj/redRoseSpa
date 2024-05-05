<?<php
    $content = '';
    foreach ($_POST as $key => $value) {
        if($value){
            $content .= "<b>$key</b>: <i>$value</i>\n"
        }
    }
    if(trim($content)){
        $content = "<b>Message from site</b>\n".$content;

        $apiToken = "7020893413:AAHCXKAVyf0kf6hwmjbOm3I_fGnRlzudYy0";
        $data = [
            'chat_id' => '@redRosespa_birgunj',
            'text' => $content,
            'parse_mode' => 'HTML'
        ];
        $respose = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
    }
?>