var mang_SoN = []
function themSo() {
    var so_n = document.querySelector("#nhap-so-n").value * 1
    mang_SoN.push(so_n)
    document.getElementById("phan-tu-mang-n").innerHTML = mang_SoN
}

// 1. Tổng số dương
function tinhTongSoDuong() {
    var tongSoduong = 0
    mang_SoN.forEach(function(item) {
        if (item > 0) {
            tongSoduong += item
        }
    })
    document.getElementById("tong-so-duong").innerText = `Tổng số dương: ${tongSoduong}`
}

// 2. Đếm số dương
function demSoDuong() {
    var soLuongSoDuong = 0
    mang_SoN.forEach(function(item) {
        if (item > 0) {
            soLuongSoDuong++
        }
    })
    document.getElementById("so-luong-so-duong").innerText = `Số dương: ${soLuongSoDuong}`
}

// 3. Tìm số nhỏ nhất
function timSoNhoNhat() {
    var soNhonhat = mang_SoN[0]
    for (i = 0; i < mang_SoN.length; i++) {
        if (soNhonhat > mang_SoN[i])
        soNhonhat = mang_SoN[i]
    }
    document.getElementById("so-nho-nhat").innerText = `Số nhỏ nhất: ${soNhonhat}`
}

// 4. Tìm số dương nhỏ nhất
// Cách 1:
var so_duongArr = []
function timSoDuongNhoNhat() {
    mang_SoN.forEach(function(item) {
        if (item > 0) {
            so_duongArr.push(item)
        }
    })
    if (so_duongArr.length == 0) {
        document.getElementById("so-duong-nho-nhat").innerText = `Không có số dương`
    } else {
        var soDuongNhoNhat = so_duongArr[0]
        for (i = 0; i < so_duongArr.length; i++) {
            if (soDuongNhoNhat > so_duongArr [i]) {
                soDuongNhoNhat = so_duongArr [i]
            }
        }
        document.getElementById("so-duong-nho-nhat").innerText = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
    }
}

// Cách 2:
// function timSoDuongNhoNhat() {
//     var soDuongNhoNhat = mang_SoN[0]
//     var soLuongSoDuong = 0
//     mang_SoN.forEach(function(item) {
//         if (item > 0) {
//             soLuongSoDuong++
//         }
//     })
//     if (soLuongSoDuong == 0) {
//         document.getElementById("so-duong-nho-nhat").innerText = `Không có số dương`
//     } else {
//         for (i = 0; i < mang_SoN.length; i++) {
//             if (mang_SoN[i] > 0) {
//                 if (soDuongNhoNhat > mang_SoN[i]) {
//                     soDuongNhoNhat = mang_SoN[i]
//                 }
//             }
//         }
//         document.getElementById("so-duong-nho-nhat").innerText = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
//     }
// }

// 5. Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    var soChanCuoiCung = -1
    for (i = 0; i < mang_SoN.length; i++) {
        if (mang_SoN[i] % 2 == 0) {
            soChanCuoiCung = mang_SoN[i]
        }
    }
    if (soChanCuoiCung == -1) {
        document.getElementById("so-chan-cuoi-cung").innerText = `-1`
    } else {
        document.getElementById("so-chan-cuoi-cung").innerText = `Số chẵn cuối cùng: ${soChanCuoiCung}`
    }
}

// 6. Đổi chỗ
function doiCho() {
    var soViTri1 = document.getElementById("so-vi-tri-1").value * 1
    var soViTri2 = document.getElementById("so-vi-tri-2").value * 1
    var giaTri1 = mang_SoN[soViTri1]
    var giaTri2 = mang_SoN[soViTri2]
    mang_SoN[soViTri1] = giaTri2
    mang_SoN[soViTri2] = giaTri1
    // var mangnSauKhiDoi = mang_SoN.reduce(function (phan_tu_n,number) {
    //     return phan_tu_n +',' + number;
    // });
    document.getElementById("doi-cho").innerHTML = `Mảng sau khi đổi: ${mang_SoN}`
}

// 7. Sắp xếp tăng dần
function sapXepTangDan() {
    mang_SoN.sort(function(a, b){return a - b})
    document.getElementById("sap-xep-tang-dan").innerHTML = mang_SoN
}

// 8. Tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
    var mang_SoNguyenTo = []
    for (i = 0; i < mang_SoN.length; i++) {
        var check = 1
        if (mang_SoN[i] > 1) {
            for (a = 2; a < mang_SoN[i] - 1; a++) {
                if (mang_SoN[i] % a == 0) {
                    check = 0
                }
            }
            if (check == 1) {
                mang_SoNguyenTo.push(mang_SoN[i])
            }
        }
    }
    
    if (mang_SoNguyenTo.length == 0) {
        document.getElementById("so-nguyen-to-dau-tien").innerText = `-1`
    } else {
        var soNguyenToDauTien = mang_SoNguyenTo[0]
        document.getElementById("so-nguyen-to-dau-tien").innerText = `Số nguyên tố đầu tiên: ${soNguyenToDauTien}`
    }
}

var mang_SoNguyen = []
// 9. Đếm số nguyên
function themSoMangNguyen() {
    var phanTuMangNguyen = document.getElementById("nhap-de-dem-so-nguyen").value * 1
    mang_SoNguyen.push(phanTuMangNguyen)
    document.getElementById("phan-tu-mang-so-nguyen").innerHTML = mang_SoNguyen
}

function demSoNguyen() {
    var soLuongSoNguyen = 0
    mang_SoNguyen.forEach(function(item) {
        if (Number.isInteger(item) == true) {
            soLuongSoNguyen++
        }
    })
    document.getElementById("so-nguyen").innerText = `Số lượng số nguyên: ${soLuongSoNguyen}`
}

// 10. So sánh số lượng số âm và dương
function soSanhAmDuong() {
    var soLuongSoDuong_mangn = 0
    var soLuongSoAm_mangn = 0
    mang_SoN.forEach(function(item) {
        if (item > 0) {
            soLuongSoDuong_mangn++
        }
        if (item < 0) {
            soLuongSoAm_mangn++
        }
    })
    if (soLuongSoDuong_mangn > soLuongSoAm_mangn) {
        document.getElementById("so-sanh-so-am-duong").innerText = `Số dương > Số âm`
    } else if (soLuongSoDuong_mangn < soLuongSoAm_mangn) {
        document.getElementById("so-sanh-so-am-duong").innerText = `Số Âm > Số dương`
    } else {
        document.getElementById("so-sanh-so-am-duong").innerText = `Số dương = Số âm`
    }
}