document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("iletisimForm");


    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let hata = "";


        const ad = document.getElementById("ad").value.trim();
        const email = document.getElementById("email").value.trim();
        const tel = document.getElementById("tel").value.trim();
        const konu = document.getElementById("konu").value;
        const mesaj = document.getElementById("mesaj").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonRegex = /^[0-9]+$/;

        if (ad === "") {
            hata += "Ad Soyad boş bırakılamaz.\n";
        }
        if (!emailRegex.test(email)) {
            hata += "Geçerli bir e-posta adresi giriniz.\n";
        }
        if (!telefonRegex.test(tel)) {
            hata += "Telefon sadece rakamlardan oluşmalıdır.\n";
        }
        if (konu === "Konu Seçiniz..." || konu === null) {
            hata += "Bir konu seçiniz.\n";
        }
        if (mesaj === "") {
            hata += "Mesaj alanı boş bırakılamaz.\n";
        }

        if (hata !== "") {
            alert(hata);
        } else {
            form.submit();
        }

    });
});

new Vue({
    el: "#app",
    methods: {
        vueKontrol() {
            const ad = document.getElementById("ad").value.trim();
            const email = document.getElementById("email").value.trim();
            const tel = document.getElementById("tel").value.trim();
            const konu = document.getElementById("konu").value.trim();
            const mesaj = document.getElementById("mesaj").value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const telefonRegex = /^[0-9]+$/;

            let hata = "";

            if (ad === "") {
                hata += "Ad Soyad boş bırakılamaz.\n";
            }
            if (!emailRegex.test(email)) {
                hata += "Geçerli bir e-posta adresi giriniz.\n";
            }
            if (!telefonRegex.test(tel)) {
                hata += "Telefon sadece rakamlardan oluşmalıdır.\n";
            }
            if (konu === "Konu Seçiniz..." || konu === null) {
                hata += "Bir konu seçiniz.\n";
            }
            if (mesaj === "") {
                hata += "Mesaj alanı boş bırakılamaz.\n";
            }

            if (hata) {
                alert(hata);
            } else {
                alert("Doğrulama başarılı! Şimdi formu gönderebilirsiniz.");
                document.getElementById("gonderBtn").disabled = false;
            }
        }
    }
});