$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $('#studentLoginForm').on('submit', function (e) {
        e.preventDefault();
                window.location.href = 'student-dashboard.html';
    });

    $('#adminLoginForm').on('submit', function (e) {
        e.preventDefault();
               window.location.href = 'admin-dashboard.html';
    });

    $('#studentDetailsForm').on('submit', function (e) {
        e.preventDefault();
        $('#studentDetails').removeClass('hidden');
    });

    $('#searchBook').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('#bookList li').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });
});