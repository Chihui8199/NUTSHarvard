<?php $sprite = array();
$sprite['Nyan'] = 'nyancat.gif';
$sprite['Piplup'] = 'piplup_sprite_animated.gif';
$sprite['Chimchar'] = 'chimchar_sprite_animated.gif';
$sprite['Turtwig'] = 'turtwig_sprite_animated.gif';
// add base health to sprite
foreach ($sprite as $key => $value) {
    $sprite[$key] = array('health' => 100, 'image' => $value);
}


$default_value = 1;
$default_sprite = 'Nyan';
if(isset($_GET['sprite'])){
    $default_value = 0;
    $currentSprite = $_GET['sprite'];
    echo $currentSprite;
    if(isset($_POST['sprite_health'])){
        $currentSprite = $sprite['Nyan'];
        $sprite_health = $_POST['sprite_health'];
        $sprite[$currentSprite]['health'] -= $sprite_health;
        echo 'test';
        // echo json_encode(array('sprite_health' => $sprite[$currentSprite]['health']));
    }
    
    

}







?>