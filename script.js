//Name typing 
const name = "Gifty Aning";
const role = "Front-end Developer";
let index = 0;
let typingInterval;

function type() {
  if (index <= name.length) {
    document.getElementById("typing").innerText = name.slice(0, index);
  } else if (index <= name.length + 2) {
    document.getElementById("typing").innerText = name;
  } else {
    const roleIndex = index - (name.length + 3); // Adjust for name length and spaces
    document.getElementById("typing").innerText = `${name}\n${role.slice(
      0,
      roleIndex
    )}`;
  }

  index++;

  if (index > name.length + role.length + 3) {
    clearInterval(typingInterval);
  }
}

typingInterval = setInterval(type, 100);



document.addEventListener("DOMContentLoaded", function () {
  var skills = document.querySelectorAll(".skill");

  skills.forEach(function (skill) {
    var skillIcon = skill.querySelector("i");
    var skillText = document.createElement("span");
    skillText.classList.add("skill-name");
    skill.appendChild(skillText); 

    skill.addEventListener("mouseenter", function () {
      var skillId = skill.getAttribute("id");
      var skillName = getSkillName(skillId);
      if (skillName) {
        skillText.textContent = skillName;
        skillIcon.style.display = "none";
      }
    });

    skill.addEventListener("mouseleave", function () {
      skillText.textContent = "";
      skillIcon.style.display = "block";
    });
  });

  // Function to get the skill name based on the ID
  function getSkillName(skillId) {
    switch (skillId) {
      case "html":
        return "HTML";
      case "css":
        return "CSS";
      case "javascript":
        return "JavaScript";
      case "react":
        return "React.js";
      default:
        return null;
    }
  }
});

//Fade-in animations
 window.addEventListener("scroll", function () {
   const fadeIns = document.querySelectorAll(".fade-in");

   fadeIns.forEach((fadeIn) => {
     if (isElementInViewport(fadeIn)) {
       fadeIn.classList.add("active");
     }
   });
 });

 function isElementInViewport(el) {
   const rect = el.getBoundingClientRect();
   return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <=
       (window.innerHeight || document.documentElement.clientHeight) &&
     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
 }

 //Slide-in right animation
window.addEventListener("scroll", function () {
  const slideIns = document.querySelectorAll(".slide-in-right");

  slideIns.forEach((slideIn) => {
    if (isElementInViewport(slideIn)) {
      slideIn.classList.add("active");
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

