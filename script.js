const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle("open");
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes("flex")){
        this.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));

// Bazı ayarlamalar yapmak zorunda kaldım.
// Sizleri bug arama serüvenim sırasında bekletmemek için kaydı durdurdum.
// Hadi bakalım neler sorun çıkarmış...

// Sanırım live server'da bir hata oldu, ama demin gördüğünüz gibi kod çalışıyor.

// Bu yorumlu versiyonu ve orijinal versiyonu videonun açıklama kısmında paylaşacağım.

// İzlediğiniz için teşekkürler...