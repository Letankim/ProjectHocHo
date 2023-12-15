document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("toggleButton");
    var content = document.getElementById("content");
  
    button.addEventListener("click", function() {
      content.classList.toggle("collapsed");
  
      if (content.classList.contains("collapsed")) {
        button.innerHTML = "Mở rộng";
      } else {
        button.innerHTML = "Thu gọn";
      }
    });
  });
  document.getElementById("toggleButton1").addEventListener("click", function() {
    var op1 = document.querySelector(".op-1");
    var op2 = document.querySelector(".op-2");
    var op3 = document.querySelector(".op-3");
    var opSecond = document.querySelector(".op-second");
  
   
    op1.classList.toggle("collapsed");
    op2.classList.toggle("collapsed");
    op3.classList.toggle("collapsed");
  
    opSecond.classList.toggle("collapsed");
  
    this.textContent = opSecond.classList.contains("collapsed") ? "Xem thêm" : "Ẩn đi";
  });