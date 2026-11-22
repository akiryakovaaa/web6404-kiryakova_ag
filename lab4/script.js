class FeedbackData {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.submittedAt = new Date().toLocaleString('ru-RU');
    }

    printToConsole() {
        console.log(
            `=== Новая заявка с сайта ===\n` +
            `Дата отправки: ${this.submittedAt}\n` +
            `Имя: ${this.name}\n` +
            `Email: ${this.email}\n` +
            `Сообщение: ${this.message}\n` +
            `============================`
        );
    }
}

const form = document.getElementById('feedbackForm');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('userName').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const message = document.getElementById('userMessage').value.trim();

        if (!name || !email || !message) {
            return;
        }

        const feedbackEntry = new FeedbackData(name, email, message);
        feedbackEntry.printToConsole();

        form.reset();
    });
}