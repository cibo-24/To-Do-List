var taskCount = 0; // Görev sayacı

function addTask() {
    var taskInput = document.getElementById("task");
    var taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        var list = document.getElementById("list");

        // Yeni liste öğesi oluştur
        var listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.style.fontWeight = "bold";
        listItem.innerText = "To-Do List: " + taskValue;

        // Clear butonu oluştur
        var clearButton = document.createElement("button");
        clearButton.classList.add("btn", "btn-outline-info");
        clearButton.style.fontWeight = "bold";
        clearButton.innerText = "Clear";

        // Clear butonuna tıklandığında görevi sil
        clearButton.addEventListener("click", function () {
            list.removeChild(listItem);
        });

        // Liste öğesine Clear butonunu ekle
        listItem.appendChild(clearButton);

        // Liste öğesini listeye ekle
        list.appendChild(listItem);

        taskInput.value = "";

        showNotification("Listeye eklendi");

        taskCount++; // Görev sayacını artır
    } else {
        alert("Boşluğu doldurun");
    }
}

function showNotification(message) {
    var notification = document.getElementById("notification");
    notification.innerHTML = message;
    notification.style.display = "block";

    setTimeout(function () {
        notification.style.display = "none";
    }, 2000);
}