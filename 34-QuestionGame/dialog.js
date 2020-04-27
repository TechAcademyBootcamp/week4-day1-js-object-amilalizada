var questions = {
    q1: ['A straight line measures 180 degrees. \n t(true) f(false)', 't'],
    q2: ['The tango originated in Argentina.. \n t(true) f(false)', 't'],
    q3: ['Veins look blue because the oxygen-depleted blood in them is blue. \n t(true) f(false)', 'f'],
    q4: ['Volleyball was invented as a game for businessmen. \n t(true) f(false)', 't'],
    q5: ['The tango originated in Argentina.. \n t(true) f(false)', 't'],
    q6: ['You dont get to 500 million friends without making a few enemies," said Barack Obama. \n t(true) f(false)', 'f'],
    q7: ['The Oscar-winning film A Beautiful Mind (2001) deals with schizophrenia. \n t(true) f(false)', 't'],
    q8: ['Spiders belong to the "insect" class of animals. \n t(true) f(false)', 'f'],
    q9: ['King Tut was one of the longest-reigning kings of ancient Egypt. \n t(true) f(false)', 'f'],
    q10: ['Death Valley is the lowest, hottest, and driest area of North America. \n t(true) f(false)', 't'],

}
var counter = 0
for (j in questions) {
    var input = prompt(questions[j][0])
        // console.log(input);
    if (input == questions[j][1]) {
        alert('correct!');
        counter++;
    } else {
        alert('wrong');
    }
}
alert(`dogru cavablar: ${counter}`);