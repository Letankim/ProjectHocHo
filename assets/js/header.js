
  $(document).ready(function () {
    // Chọn phần tử dropdown
    var dropdown = $(".nav-item.dropdown");

    // Xử lý sự kiện mouseenter
    dropdown.mouseenter(function () {
      // Thêm lớp 'show' để hiển thị dropdown
      $(this).addClass("show");

      // Hiển thị dropdown menu
      $(this).find(".dropdown-menu").addClass("show");
    });

    // Xử lý sự kiện mouseleave
    dropdown.mouseleave(function () {
      // Loại bỏ lớp 'show' để ẩn dropdown
      $(this).removeClass("show");

      // Ẩn dropdown menu
      $(this).find(".dropdown-menu").removeClass("show");
    });
  });
