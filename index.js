var mang_so_n = []
function themSo() {
    var so_n = document.querySelector("#nhap-so-n").value * 1
    mang_so_n.push(so_n)
    var sum = mang_so_n.reduce(function (phan_tu_n,number) {
        return phan_tu_n +',' + number;
    });
    document.getElementById("in-phan-tu-so-n").innerText = sum
}

