var so_nArr = []
function themSo() {
    var so_n = document.querySelector("#nhap-so-n").value * 1
    so_nArr.push(so_n)
    var phanTuMangn = so_nArr.reduce(function (phan_tu_n,number) {
        return phan_tu_n +',' + number;
    });
    document.getElementById("phan-tu-mang-n").innerText = phanTuMangn
}

// 1. Tổng số dương
function tinhTongSoDuong() {
    var tongSoduong = 0
    so_nArr.forEach(function(item) {
        if (item > 0) {
            tongSoduong += item
        }
    })
    document.getElementById("tong-so-duong").innerText = `Tổng số dương: ${tongSoduong}`
}

// 2. Đếm số dương
function demSoDuong() {
    var soLuongSoDuong = 0
    so_nArr.forEach(function(item) {
        if (item > 0) {
            soLuongSoDuong++
        }
    })
    document.getElementById("so-luong-so-duong").innerText = `Số dương: ${soLuongSoDuong}`
}

// 3. Tìm số nhỏ nhất
function timSoNhoNhat() {
    var soNhonhat = so_nArr[0]
    for (i = 0; i < so_nArr.length; i++) {
        if (soNhonhat > so_nArr[i])
        soNhonhat = so_nArr[i]
    }
    document.getElementById("so-nho-nhat").innerText = `Số nhỏ nhất: ${soNhonhat}`
}

// 4. Tìm số dương nhỏ nhất
// Cách 1:
var so_duongArr = []
function timSoDuongNhoNhat() {
    so_nArr.forEach(function(item) {
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
//     var soDuongNhoNhat = so_nArr[0]
//     var soLuongSoDuong = 0
//     so_nArr.forEach(function(item) {
//         if (item > 0) {
//             soLuongSoDuong++
//         }
//     })
//     if (soLuongSoDuong == 0) {
//         document.getElementById("so-duong-nho-nhat").innerText = `Không có số dương`
//     } else {
//         for (i = 0; i < so_nArr.length; i++) {
//             if (so_nArr[i] > 0) {
//                 if (soDuongNhoNhat > so_nArr[i]) {
//                     soDuongNhoNhat = so_nArr[i]
//                 }
//             }
//         }
//         document.getElementById("so-duong-nho-nhat").innerText = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
//     }
// }