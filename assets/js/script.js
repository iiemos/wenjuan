$(document).ready(function () {
  $.getJSON('/json/questions.json', function (data) {
    //   const randomIndex = Math.floor(Math.random() * data.length);
    //   const selectedSet = data[randomIndex].questions;

    data.forEach((q, index) => {
          const questionHtml = `
              <div class="question mb-5 ">
                  <h4 class="mb-4">${index + 1}. ${q.question}</h4>
                  ${q.options.map((option,idx) => `
                     <div class="radio_box custom-control custom-radio mb-3">
                        <input class="custom-control-input" type="radio" name="question${index}" value="${option}"  id="${q.id}${idx}">
                        <label class="radio_lable custom-control-label" for="${q.id}${idx}">
                             ${option}
                        </label>
                      </div>

                  `).join('')}
              </div>
          `;
          $('#questionnaire').append(questionHtml);
      });
  });

  $('#submitBtn').click(function () {
      // 处理提交的答案
      alert('问卷提交成功！');
  });
});
