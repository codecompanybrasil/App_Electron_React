<?php
    require_once "vendor/autoload.php";
    require __DIR__ . "/Db.php";

    // include __DIR__ . "/router.php";

    use Bramus\Router\Router;
    // use Db;

    $router = new Router();
    $db = new Db();

    $router->get("/", function() {
        echo "hehe";
    });

    $router->get("/users", function() use ($db) {
        $users = $db->getAllUsers();
        echo json_encode($users);
    });

    $router->run();
?>