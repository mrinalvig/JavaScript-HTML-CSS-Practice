
var surveyJSON = {pages:[{name:"page1",elements:[{type:"checkbox",choices:["Cheeseburgers","Pizza","Buffalo Wings","Hot Dogs","French Fries"],name:"Which of these foods do you like?"},{type:"checkbox",choices:["Doctor Who","The Office","How I Met Your Mother","Sherlock","Lost"],name:"Which of these shows do you like?"},{type:"checkbox",choices:["PC","Console","Stupid"],name:"Are you a PC gamer, console gamer, or stupid?"},{type:"checkbox",choices:["iPhone","Android"],name:"Which phone is better?"},{type:"checkbox",choices:["Superman","Superman","....dude, its Superman"],name:"Who will win, Batman or Superman?"}]}]}

function sendDataToServer(survey) {
    survey.sendResult('09e6121f-7b12-47b2-a7a4-1638718c2e31');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").SurveyWindow({
    model: survey,
    onComplete: sendDataToServer
});