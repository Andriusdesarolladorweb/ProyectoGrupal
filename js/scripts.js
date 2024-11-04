document.addEventListener('DOMContentLoaded', init);

function init() {
    // Asociar el evento de submit al formulario
    const commentForm = document.getElementById('commentForm');
    commentForm.addEventListener('submit', handleFormSubmit);

    // Cargar los comentarios cuando se carga la página
    loadComments();
}

async function handleFormSubmit(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();

    // Validar que los campos no estén vacíos
    if (!name || !comment) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Enviar el comentario al servidor (save_comment.php)
    const response = await submitComment({ name, comment });

    if (response.status === 'success') {
        // Si se guarda exitosamente, recargar los comentarios
        loadComments();
        document.getElementById('commentForm').reset(); // Limpiar el formulario
    } else {
        alert('Error: ' + response.message);
    }
}

async function submitComment(data) {
    try {
        const response = await fetch('save_comment.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        return await response.json(); // Convertir la respuesta en JSON
    } catch (error) {
        console.error('Error al enviar el comentario:', error);
        return { status: 'error', message: 'Error al enviar el comentario' };
    }
}

async function loadComments() {
    try {
        const response = await fetch('get_comments.php');

        if (!response.ok) {
            throw new Error('Error al cargar los comentarios');
        }

        const comments = await response.json();

        // Verificar si los comentarios son un array
        if (!Array.isArray(comments)) {
            throw new Error('La respuesta no es un array de comentarios');
        }

        // Actualizar el contador de comentarios
        updateCommentCounter(comments.length);

        // Mostrar los comentarios en la página
        displayComments(comments);
    } catch (error) {
        console.error('Error al cargar los comentarios:', error);
        document.getElementById('commentList').innerHTML = '<p>Error al cargar comentarios. Intente nuevamente.</p>';
    }
}

function updateCommentCounter(count) {
    // Actualizar el contador de comentarios
    const commentCounter = document.getElementById('commentCounter');
    commentCounter.textContent = `${count} comentarios`;
}

function displayComments(comments) {
    // Limpiar la lista de comentarios actual
    const commentList = document.getElementById('commentList');
    commentList.innerHTML = ''; // Borrar el contenido anterior

    // Recorrer cada comentario y mostrarlo
    comments.forEach(comment => {
        // Crear un div para cada comentario
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        // Crear un div para el nombre
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('comment-name');
        nameDiv.textContent = comment.name;

        // Crear un div para el comentario
        const commentTextDiv = document.createElement('div');
        commentTextDiv.textContent = comment.comment;

        // Añadir los divs al contenedor principal del comentario
        commentDiv.appendChild(nameDiv);
        commentDiv.appendChild(commentTextDiv);

        // Añadir el comentario a la lista de comentarios en el DOM
        commentList.appendChild(commentDiv);
    });
}
