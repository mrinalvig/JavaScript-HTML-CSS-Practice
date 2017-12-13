Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

var json = {
    questions: [
        {
            type: "radiogroup",
            name: "language",
            title: "What is your favorite language to use?",
            isRequired: true,
            colCount: 10,
            choices: [
                "C++",
                "Javascript",
                "C#",
                "Python"
            ]
        },
        {
            type: "radiogroup",
            name: "gaming",
            title: "What is your favorite gaming system?",
            isRequired: true,
            colCount: 10,
            choices: [
                "PC",
                "PS4",
                "Xbox One",
                "I don't game because I'm boring"
            ]
        },
        {
            type: "radiogroup",
            name: "food",
            title: "What is your favorite kind of food?",
            isRequired: true,
            colCount: 10,
            choices: [
                "Burgers",
                "Hot Dogs",
                "Indian Food",
                "Tacos"
            ]
        },
        {
            type: "radiogroup",
            name: "logic",
            title: "Who do you think would win? Superman or Batman?",
            isRequired: true,
            colCount: 10,
            choices: [
                "Superman",
                "Superman",
                "Duh, Superman",
                "Listen...It's Superman"
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});
