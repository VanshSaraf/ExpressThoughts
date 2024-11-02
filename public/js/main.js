document.addEventListener("DOMContentLoaded", () => {
    // Handle delete confirmation (if desired)
    document.querySelectorAll(".btn-delete").forEach(button => {
        button.addEventListener("click", (e) => {
            if (!confirm("Are you sure you want to delete this post?")) {
                e.preventDefault();
            }
        });
    });
});