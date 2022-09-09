/**
 * Đầu vào:
 *  + tong = 0;
 *  + n = 1;
 *
 * Xử lí:
 *  + tong += n cho đến khi tong <= 10000 (tăng n thêm 1 mỗi lần lặp)
 *
 * Đầu ra:
 *  + Hiển thị ketQua (n - 1)
 */

document.getElementById('btnKetQua').onclick = function () {
  // Đầu vào:
  var tong = 0;
  var n = 1;

  // Xử lí:
  while (tong <= 10000) {
    tong += n;
    n++;
  }

  // Đầu ra:
  var ketQua = 'Số nguyên dương nhỏ nhất: ' + (n - 1);
  document.getElementById('ketQua1').innerHTML = ketQua;
};
