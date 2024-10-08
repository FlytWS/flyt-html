<?php header('Access-Control-Allow-Origin: *'); ?>
<?php $model_id = file_get_contents('/etc/flyt/model');  ?>
<?php header('node-type: '.$model_id.''); ?>
<?php header('ip-address: '.$_SERVER['SERVER_ADDR'].''); ?>
<?php header('ip-port: '.$_SERVER['SERVER_PORT'].''); ?>
<?php $wingbits_id = file_get_contents('/etc/flyt/wingbits');  ?>
<?php header('registered-name: '.$wingbits_id.''); ?>
Congratulations. You have discovered Flyt.