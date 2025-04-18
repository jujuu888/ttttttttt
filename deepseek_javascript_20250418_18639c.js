// بيانات المدن (cities.json)
const cities = [
    {
        "id": 1,
        "name": "الرياض",
        "image": "images/cities/riyadh.jpg",
        "highlights": ["قصر المصمك", "وادي نمار", "المتحف الوطني"],
        "events": [
            {
                "name": "موسم الرياض",
                "date": "١ أكتوبر - ٣١ ديسمبر ٢٠٢٣",
                "image": "images/events/riyadh-season.jpg"
            }
        ],
        "restaurants": [
            {
                "name": "مطعم نجد",
                "image": "images/restaurants/najd.jpg",
                "rating": 4.8
            }
        ]
    },
    // ... بيانات جميع المدن الـ17 هنا
];

// عرض المدن
function renderCities() {
    const container = document.querySelector('.city-grid');
    let html = '';
    
    cities.forEach(city => {
        html += `
            <div class="city-card">
                <img src="${city.image}" alt="${city.name}">
                <div class="city-info">
                    <h3>${city.name}</h3>
                    <ul>
                        ${city.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', () => {
    renderCities();
});