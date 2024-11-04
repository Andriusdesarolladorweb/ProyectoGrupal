<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['name']) && isset($data['comment'])) {
    $name = $data['name'];
    $comment = $data['comment'];

    $comments = json_decode(file_get_contents('comments.json'), true) ?: [];
    $comments[] = ['name' => $name, 'comment' => $comment];

    if (file_put_contents('comments.json', json_encode($comments))) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error al guardar el comentario.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Datos no válidos.']);
}
?>