/**
 * Xử lí:
 *  + Lặp 10 lần tạo các div
 *  + Nếu div chẵn màu đỏ, div lẻ màu xanh
 *
 * Đầu ra:
 *  + Hiển thị các div
 */

document.getElementById('btnTaoDiv').onclick = function () {
  // Xử lí + Đầu ra:
  for (var i = 1; i <= 10; i++) {
    var div = document.createElement('div');
    document.getElementById('ketQua4').appendChild(div);
    if (i % 2 === 0) {
      div.style.backgroundColor = 'red';
      div.innerHTML = 'div chẵn ' + i;
    }
    if (i % 2 !== 0) {
      div.style.backgroundColor = 'blue';
      div.innerHTML = 'div lẻ ' + i;
    }
  }
};
