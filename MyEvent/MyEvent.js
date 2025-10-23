//section 1
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCurser:true,
    spaceBetween:25,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
  });


const eventsData = [
  {
    id: 1,
    title: "Colors Festival",
    img: "Imgs/14567428_1213807811994273_119007985085151139_o.jpg",
    date: "2025-10-16",
    place: "City Center",
    category: "Culture",
    desc: "Join us and interest our music and food.",
    longdesc: "Colors fesdtival gether Family and friends",
    related: [2, 3]
  },
  {
    id: 2,
    title: "Chess",
    img: "Imgs/channels4_profile.jpg",
    date: "2025-10-20",
    place: "Youth Center",
    category: "sport",
    desc: "A friendly competition for all ages.",
    longdesc: "The Open Chess Championship welcomes all ages with professional referees and valuable prizes..",
    related: [1, 4]
  },
  {
    id: 3,
    title: "Arabic Music Night",
    img: "Imgs/syria-festival.jpg",
    date: "2025-10-18",
    place: "Town Hall",
    category: "music",
    desc: "Enjoy with the most famous local bands.",
    longdesc: "Arabic Music Night brings together authentic singing and live performances from distinguished bands.",
    related: [1]
  },
  {
    id: 4,
    title: "Science Fair",
    img: "Imgs/IMG_20250904_235129_946.jpg",
    date: "2025-10-22",
    place: "City Library",
    category: "scince",
    desc: "Fun science experiments for kids, free entry.",
    longdesc: "The Children's Science Fair aims to foster a love of exploration through interactive activities and experiments.",
    related: [2]
  }
];

// Slider 
if (document.getElementById('carousel-events')) {
  let carousel = document.getElementById('carousel-events');
  eventsData.slice(0,3).forEach((ev,i) => {
    carousel.innerHTML += `
      <div class="carousel-item ${i===0?'active':''}">
        <img src="${ev.img}" class="d-block w-100" alt="${ev.title}">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
          <h5>${ev.title}</h5>
          <p>${ev.desc}</p>
        </div>
      </div>
    `;
  });
}
// latest events
if (document.getElementById('latest-events')) {
  let grid = document.getElementById('latest-events');
  eventsData.forEach(ev => {
    grid.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card h-100">
          <img src="${ev.img}" class="card-img-top" alt="${ev.title}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${ev.title}</h5>
            <p class="card-text mb-1"><i class="bi bi-calendar"></i> ${ev.date}</p>
            <span class="badge bg-warning mb-2">${ev.category}</span>
            <p class="card-text">${ev.desc}</p>
            <a href="event.html?id=${ev.id}" class="btn btn-outline-warning mt-auto">Details</a>
          </div>
        </div>
      </div>
    `;
  });
}



// Contact section
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let alertDiv = document.getElementById("formAlert");
    if(!name || !email || !message){
      alertDiv.innerHTML = `<div class="alert alert-danger">Blease enter your name , email and your meesage</div>`;
      return;
    }
      alertDiv.innerHTML = `<div class="alert alert-success">Thanks for Contacting us</div>`;
    this.reset();
  });

