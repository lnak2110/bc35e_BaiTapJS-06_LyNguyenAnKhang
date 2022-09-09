/**
 * Đầu vào:
 *  + soN
 *
 * Xử lí:
 *  + Tính giai thừa từ i = 1 => i = soN
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnGiaiThua').onclick = function () {
  // Đầu vào:
  var soN = document.getElementById('soN').value * 1;

  // Xử lí:
  var ketQua = tinhGiaiThua(soN);

  // Đầu ra:
  document.getElementById('ketQua3').innerHTML = 'Giai thừa: ' + ketQua;
};

function tinhGiaiThua(n) {
  var tich = 1;
  for (var i = 1; i <= n; i++) {
    tich *= i;
  }
  return tich;
}
