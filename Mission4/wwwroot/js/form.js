$('#calculate').click(function() 
{
    // pull inputs and assign to variables and adjust the weights
    let assignments = (parseFloat($('#assignments').val()) * .5);
    let projects = (parseFloat($('#projects').val())* .1);
    let quizzes = (parseFloat($('#quizzes').val()) *.1);
    let midterm = (parseFloat($('#midterm').val()) *.1);
    let final = (parseFloat($('#final').val()) *.1);
    let intex = (parseFloat($('#intex').val()) * .1);

    // total all the grades
    let score = assignments + projects + quizzes + midterm + final + intex
    let total = 100

    // calculate total percent and initialize letter grade
    let percent = Math.round((score / total) * 100)
    let letterGrade = ''

    // assign letter grades to percentage thresholds
    if (percent >= 94) {
        letterGrade = 'A'
    }
    else if (percent >= 90) {
        letterGrade = 'A-'
    }
    else if (percent >= 87) {
        letterGrade = 'B+'
    }
    else if (percent >= 84) {
        letterGrade = 'B'
    }
    else if (percent >= 80) {
        letterGrade = 'B-'
    }
    else if (percent >= 77) {
        letterGrade = 'C+'
    }
    else if (percent >= 74) {
        letterGrade = 'C'
    }
    else if (percent >= 70) {
        letterGrade = 'D+'
    }
    else if (percent >= 67) {
        letterGrade = 'D'
    }
    else if (percent >= 64) {
        letterGrade = 'D-'
    }
    else { letterGrade = 'F' }

    // create the output format and sent it as an html result
    result = ('Letter Grade: ' + letterGrade + '\n Percentage: ' + percent + '%')
    $('#output').html(result);
})



