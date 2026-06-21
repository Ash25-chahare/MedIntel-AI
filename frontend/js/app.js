// Smart Reminder Modal Functions
function triggerReminderModal() {
    const modal = document.getElementById('reminderModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('reminderModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Chart.js Visualizations (Only runs if charts exist on the page)
document.addEventListener('DOMContentLoaded', () => {
    
    const weeklyCtx = document.getElementById('weeklyChart');
    if (weeklyCtx) {
        new Chart(weeklyCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Adherence %',
                    data:,
                    backgroundColor: '#188B8D'
                }]
            }
        });
    }

    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Atorvastatin', 'Metformin', 'Lisinopril'],
                datasets: [{
                    data:,
                    backgroundColor: ['#1A5F96', '#188B8D', '#A8E6CF']
                }]
            }
        });
    }
});
