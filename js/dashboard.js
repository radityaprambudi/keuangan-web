if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html";
}

const form = document.getElementById("form-transaksi");
const daftar = document.getElementById("daftar-transaksi");
const saldoDisplay = document.getElementById("saldo");

let transaksi = JSON.parse(localStorage.getItem("transaksi")) || [];

function render() {
    daftar.innerHTML = "";
    let saldo = 0;

    transaksi.forEach((t, i) => {
        const li = document.createElement("li");
        li.textContent = `${t.jenis} - ${t.keterangan} - Rp${t.jumlah}`;
        daftar.appendChild(li);

        saldo += t.jenis === "pemasukan" ? +t.jumlah : -t.jumlah;
    });

    saldoDisplay.textContent = saldo;
    localStorage.setItem("transaksi", JSON.stringify(transaksi));
}

form.onsubmit = function (e) {
    e.preventDefault();
    const jenis = document.getElementById("jenis").value;
    const keterangan = document.getElementById("keterangan").value;
    const jumlah = document.getElementById("jumlah").value;

    transaksi.push({ jenis, keterangan, jumlah});
    render();
    form.reset();
};

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}

render();