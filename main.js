// Função para adicionar uma tarefa à lista
function addTask(taskName) {
    const listItem = $("<li>").text(taskName);
    listItem.click(function () {
        $(this).toggleClass("completed");
    });
    $("#task-list").append(listItem);
}

// Manipular o envio do formulário
$("#task-form").submit(function (event) {
    event.preventDefault(); // Impedir o comportamento padrão de envio do formulário
    const taskName = $("#task-input").val();
    if (taskName.trim() !== "") {
        addTask(taskName);
        $("#task-input").val(""); // Limpar o campo de entrada
    }
});