// دیو های مراحل نصب و راه اندازی اپلیکیشن ساعت هوشمند در قالب یک آرایه
const steps = document.querySelector(".steps").children;

var stepsCount = steps.length;
const appPictures = document.querySelector(".app-view-pictures").children;
var appPicturesCount = appPictures.length;
const questionDivs = document.querySelector(".accordion").children;
const questionTitles = document.getElementsByClassName("question-title");
const plans = document.querySelector(".pricing").children;
var plansCount = plans.length;
const locationOverLay = document.getElementById("location-section-overlay");

for (let i=0; i < stepsCount; i++) {
  steps[i].onclick = function() {
    var index = i;
    changeIndex(index);
  }
}

function changeIndex(index) {
  for (let i=0; i < stepsCount; i++) {
      if(i !== index) {
        steps[i].classList.remove("shadowVisible")
      }
    }
  steps[index].classList.add("shadowVisible")
}

for (let i=0; i < appPicturesCount; i++) {
  appPictures[i].onclick = function() {
    if (appPictures[i].classList.contains("img-clicked")) {
      appPictures[i].classList.remove("img-clicked");
    } else {
      appPictures[i].classList.add("img-clicked")
    }
  }
}

for (let i=0; i < questionDivs.length; i++) {
  questionTitles[i].onclick = function() {
    if(questionDivs[i].classList.contains("question-open")) {
      questionDivs[i].classList.toggle("question-open");
      questionTitles[i].classList.toggle("question-title-active");
    } else {
      questionDivs[i].classList.toggle("question-open");
      questionTitles[i].classList.toggle("question-title-active");
    }
  }
}

for (let i=0; i < plansCount; i++) {
  plans[i].onclick = function() {
    var index = i;
    changePlanIndex(index);
  }
}

function changePlanIndex(index) {
  for (let i=0; i < plansCount; i++) {
      if(i !== index) {
        plans[i].classList.remove("plan-active")
      }
    }
  plans[index].classList.add("plan-active")
}

locationOverLay.onclick = function () {
  locationOverLay.style.display = "none";
}
