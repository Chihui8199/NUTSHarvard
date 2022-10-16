<?php $sprite = array();
$sprite['Nyan'] = 'nyancat.gif';
$sprite['Piplup'] = 'piplup_sprite_animated.gif';
$sprite['Chimchar'] = 'chimchar_sprite_animated.gif';
$sprite['Turtwig'] = 'turtwig_sprite_animated.gif';



$default_value = 1;
$default_sprite = 'Nyan';
if(isset($_GET['sprite'])){
    $default_value = 0;
    $currentSprite = $_GET['sprite'];

}





?>