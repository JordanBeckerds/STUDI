<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            text-transform: uppercase;
            font-size: 30px;
        }


        /* classes */

        .center {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            flex-direction: column;
            text-align: center;
            gap: 40px;
        }

        .display {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .background {
            display: flex;
        }

        .align {
            align-self: center;
            margin: 0px 20px 0px 20px;
        }

        .btn {
            display: flex;
            padding: 10px 10px 10px 10px;
            background-color: black;
            color: aliceblue;
            border: solid black 2px;
            border-radius: 25px;
            justify-content: center;
            align-items: center;
            width: 50px;
            box-shadow: 10px 5px red;
        }

        .btn:hover {
            cursor: pointer;
        }

        /* id */

        #background {
            height: 300px;
            width: 300px;
        }
    </style>
    <script src="main.js" defer></script>
</head>
<body class="center">
    
    <form class="display" action="" method="post">
        <label for="values">Choose a value:</label>

        <select name="values" id="values">
            <option>--Please choose an option--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        
        <input type="submit" name="submit" value="Get select values outcome">

    </form>

    <h1>
        <?php
        $text = "";
        $valeur = 0; 

        if(isset($_POST['submit'])){
            $valeur += $_POST['values'] ;
        }

        if ($valeur == 1) {
            $text = "You chose 1";
        }
        elseif ($valeur == 2) {
            $text = "You chose 2";
        }
        elseif ($valeur == 3) {
            $text = "You chose 3";
        }
        elseif ($valeur == 4) {
            $text = "You chose 4";
        }
        elseif ($valeur == 5) {
            $text = "You chose 5";
        }
        elseif ($valeur == 6) {
            $text = "You chose 6";
        }

        echo "$text";
        ?>
    </h1>

    <div class="background">
        <div class="align">
            <input type="submit" name="left" onmousedown="left()" value="<">
        </div>

        <p id="background"></p>

        <div class="align">
            <input type="submit" name="right" onmousedown="right()" value=">">
        </div>
    </div>
</body>
</html>