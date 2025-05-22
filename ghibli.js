document.addEventListener("DOMContentLoaded", () => {
    fetch("https://ghibliapi.vercel.app/films")
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("filmContainer");

        data.slice(0, 13).forEach(film => {
            const div = document.createElement("div");
            div.className = "col-md-4 mb-4";
            
            const imageMap ={
                "Castle in the Sky": "img/castle _in _the_sky.jpg",
                "Grave of the Fireflies": "img/grave_of_the _fireflies.jpg",
                "My Neighbor Totoro": "img/my_neighbor_totoro.jpg",
                "Kiki's Delivery Service": "img/kiki_delivery_service.jpg",
                "Only Yesterday": "img/only_yesterday.jpg",
                "Porco Rosso": "img/porco_rosso.jpg",
                "Pom Poko": "img/pom_poko.jpg",
                "Whisper of the Heart": "img/whisper_of_the_heart.jpg",
                "Princess Mononoke": "img/princess_mononoke.jpg",
                "My Neighbors the Yamadas": "img/my_neighbors_the_yamadas.jpg",
                "Spirited Away": "img/spirited_away.jpg",
                "The Cat Returns": "img/the_cat_returns.jpg",
                "Howl's Moving Castle": "img/howl_moving_castle.jpg"
            };
            const imagePath = imageMap[film.title] || "img/default.jpg";

            div.innerHTML =`
            <div class="card h-100 shadow">
             <img src="${imagePath}" class="card-img-top" alt="${film.title}">
             <div class="card-body">
              <h5 class="card-title">${film.title}</h5>
              <p><strong>Yönetmen:</strong>${film.director}</p>
              <p><strong>Yıl:</strong>${film.release_date}</p>
              <p class="card-text">${film.description.slice(0.250)}</p>
             </div>
            </div>
            `;
            container.appendChild(div);
        });
        
    })
    .catch(err => {
        console.error("Hata oluştu:", err);
    });
});