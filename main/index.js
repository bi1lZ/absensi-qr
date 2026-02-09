// LINK GOOGLE FORM
const formURL = "https://forms.gle/cWHwUsgX12FdijVs5";

const jamBuka = 7;   // 07.00
const jamTutup = 21; // 21.00

const status = document.getElementById("status");
const judul = document.getElementById("judul");
const qrcodeDiv = document.getElementById("qrcode");

// jika dibuka dari scan
if (window.location.search.includes("scan")) {
    cekJam();
} else {
    tampilkanQR();
}

function tampilkanQR() {
    new QRCode(qrcodeDiv, {
        text: window.location.href + "?scan=1",
        width: 200,
        height: 200
    });
}

function cekJam() {
    let now = new Date();
    let jam = now.getHours();

    judul.innerText = "Absensi Kehadiran";

    if (jam >= jamBuka && jam < jamTutup) {
        status.innerText = "Absensi dibuka, mengarahkan ke form...";
        qrcodeDiv.style.display = "none";

        setTimeout(() => {
            window.location.href = formURL;
        }, 1500);
    } else {
        status.innerText = "Absensi hanya jam 07.00 - 09.00";
        qrcodeDiv.style.display = "none";
    }

}
