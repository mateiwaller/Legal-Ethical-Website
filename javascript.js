const cookie = document.getElementById("cookies");
document.getElementById("acceptButton").addEventListener("click", (e) => {
        e.preventDefault();
    cookie.style.display = "none";
});

//website where I got the code from: https://www.slingacademy.com/article/javascript-how-to-implement-auto-save-form/
if (document.getElementById('acceptButton'))
{
document.getElementById('patientForm').addEventListener('input', function() {
    var formData = {
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        dayBirth: document.getElementById('day_birth').value,
        monthBirth: document.getElementById('month_birth').value,
        yearBirth: document.getElementById('year_birth').value,
        dayApp: document.getElementById('day_app').value,
        monthApp: document.getElementById('month_app').value,
        yearApp: document.getElementById('year_app').value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', (event) => {
    var savedData = localStorage.getItem('formData');
    if (savedData) {
        var formData = JSON.parse(savedData);
        document.getElementById('first_name').value = formData.firstName;
        document.getElementById('last_name').value = formData.lastName;
        document.getElementById('day_birth').value = formData.dayBirth;
        document.getElementById('month_birth').value = formData.monthBirth;
        document.getElementById('year_birth').value = formData.yearBirth;
        document.getElementById('day_app').value = formData.dayApp;
        document.getElementById('month_app').value = formData.monthApp;
        document.getElementById('year_app').value = formData.yearApp;
    }
});
}

