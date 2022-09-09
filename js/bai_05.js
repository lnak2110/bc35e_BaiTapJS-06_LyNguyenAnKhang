/**
 * Đầu vào:
 *  + so
 *
 * Xử lí:
 *  + Số > 1 và chỉ chia hết cho 1 và chính nó là số nguyên tố
 *  + Xét i từ 2 đến căn bậc 2 của số cần xét, nếu nó chia hết cho i => số đó không phải số nguyên tố
 *
 * Đầu ra:
 *  + Hiển thị ketQua
 */

document.getElementById('btnSoNguyenTo').onclick = function () {
  // Đầu vào:
  var so = document.getElementById('so').value * 1;

  // Xử lí:
  var ketQua = '';
  for (var i = 1; i <= so; i++) {
    if (checkSoNguyenTo(i)) {
      ketQua += i + ' ';
    }
  }

  // Đầu ra:
  document.getElementById('ketQua5').innerHTML = 'Số nguyên tố: ' + ketQua;
};

function checkSoNguyenTo(n) {
  var isPrime = true;

  if (n === 1) {
    return false;
  }
  if (n === 2 || n === 3) {
    return true;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}
