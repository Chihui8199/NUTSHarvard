<?php include "spriteController.php";?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="time.js"></script>
    <link rel="stylesheet" href="general.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Timer</title>
</head>
<body>
    <?php include 'navbar.php';?>
    <div id="timer">
        <h1 id="headline">Countdown</h1>
        <div class="timer">
      
        <div class="real-time">
            <div class="input-time">
            <div>
                <span class="labelTime">Hours:</span>
                <input type="number" class="HH" placeholder="HH" min="0" />
            </div>
            <div>
                <span class="labelTime">Minutes:</span>
                <input type="number" class="MM" placeholder="MM" value="20" min="0" />
            </div>
            <div>
                <span class="labelTime">Seconds:</span>
                <input type="number" class="SS" placeholder="SS" min="0"  />
            </div>
            </div>
            <div class="button-section">
            <button class="start-button">Start</button>
            </div>
        </div>
        </div>
        
    </div>
    <div id="spriteContainer">
        <?php if($default_value == 1){ ?>
            <img class="spriteImage"  src="./images/<?php echo $sprite[$default_sprite]['image'];?>">
        <?php } else {?>
            <img class="spriteImage" src="./images/<?php echo $sprite[$currentSprite]['image'];?>">
            <?php }; ?>
        
    </div>


   
</body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>