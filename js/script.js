const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const learning = {
  topic: "JS",
  learningGoals: [
    "Build JS Programs.",
    "Feel comfortable with syntax.",
    "Remember when and how to use what.",
    "Create something cool for my personal website."
  ],
  category: "Front End Developement",
  topicImportance: "High"
};
console.log(learning);

learning.topic = "JavaScript";

learning.learningGoals.splice(1, 1);

topicElement.innerText = `✓ I'm learning ${learning.topic}.`;

topicElement.classList.remove("hide");

countElement.innerText = `✓ I have ${learning.learningGoals.length} goals.`;

countElement.classList.remove("hide");
