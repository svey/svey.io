<?php

$request = $_SERVER['REQUEST_URI'];

switch ($request) {

    case '':
    case '/':
        require __DIR__ . 'index.html';
        break;

    case '/about':
        require __DIR__ . 'about.html';
        break;

    default:
        http_response_code(404);
        require __DIR__ . '404.html';
        break;
}

?>