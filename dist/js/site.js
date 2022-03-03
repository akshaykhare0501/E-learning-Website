
let questions = [
  {
    id: 1,
    question: "If cost of 15 eggs be 75 rupees, then find out the cost of 5 dozen eggs.",
    answer: "300",
    options: [
      "300",
      "400",
      "500",
      "600"
    ]
  },
  {
    id: 2,
    question: "A stationer buys diaries at 75 rupees per dozen and sells them at 15 rupees<br> per piece. What is the profit?",
    answer: "105",
    options: [
      "100",
      "75",
      "110",
      "105"
    ]
  },

   {
    id: 3,
    question: "Find the product of place value and face value of 5 in 65231",
    answer: "25000",
    options: [
      "28000",
      "25000",
      "27000",
      "26000"
    ]
  },

   {
    id: 4,
    question: "A train runs with a speed of 200 km/hour. What will be its speed in m/sec?",
    answer: "55.55 m/sec",
    options: [
      "66.68 m/sec",
      "55.55 m/sec",
      "20 m/sec",
      "44.44 m/sec"
    ]
  },
  {
    id: 5,
    question: "On selling an article for Rs. 240, a trader loses 4%. In order to gain 10 % <br>he must sell that article for",
    answer: "Rs. 275",
    options: [
      "Rs. 275",
      "Rs.340",
      "Rs. 320",
      "Rs. 264"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 5;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h4>Q${count + 1}. ${questions[count].question}</h4>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
