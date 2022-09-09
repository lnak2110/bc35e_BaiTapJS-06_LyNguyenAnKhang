/**
 * Đầu vào:
 *  + x
 *  + n
 *  + tong = 0
 *
 * Xử lí:
 *  + Tính mũ bằng **
 *  + Tính tổng cho đến khi i = n
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnTinhTong').onclick = function () {
  // Đầu vào:
  var x = document.getElementById('x').value * 1;
  var n = document.getElementById('n').value * 1;
  var tong = 0;

  // Xử lí:
  for (var i = 1; i <= n; i++) {
    tong += tinhMu(x, i);
  }

  // Đầu ra:
  var ketQua = 'Tổng: ' + tong;
  document.getElementById('ketQua2').innerHTML = ketQua;
};

function tinhMu(x, y) {
  return x ** y;
}
