// Define products as an array of objects
const products = [
    { img: "assets/product.png", title: "أقلام روكو مائية" },
    { img: "assets/product2.png", title: "شنط مدرسية أولاد" },
    { img: "assets/product3.jpg", title: "دفتر جامعي 100-200 ورقة" },
    { img: "assets/product4.jpg", title: "لوحة عد" },
    { img: "assets/product5.jpg", title: "دفتر جامعي مقسم" },
    { img: "assets/product6.jpg", title: "شنط مدرسية بنات" },
    { img: "assets/product7.jpg", title: "أقلام سبورة MAXIFLO" },
    { img: "assets/product8.jpg", title: "ألوان كريليك" }
];

// Render products
const productsList = document.getElementById("products-list");
products.forEach(product => {
    productsList.innerHTML += `
          <div class="col-md-3">
            <div class="card product-card text-center">
              <img src="${product.img}" class="card-img-top" alt="${product.title}" />
              <div class="card-body">
                <h6 class="card-title">${product.title}</h6>
              </div>
            </div>
          </div>
        `;
});

const products2 = [{ img: "assets/product9.jpg", title: "طقم أقلام مساحة" },
{ img: "assets/product10.jpg", title: "ربع يس" },
{ img: "assets/product11.jpg", title: "جزء عم" },
{ img: "assets/product12.jpg", title: "طقم مغانط 3-7-10 قطع" },
{ img: "assets/product13.jpg", title: "ألوان باستيل طباشيري" },
{ img: "assets/product14.jpg", title: "أقلام ZEBRA Sarasa" },
{ img: "assets/product15.jpg", title: "قصص مصورة" },
{ img: "assets/product16.jpg", title: "كتاب سبورتي لتعليم جدول الضرب" }];

const productsList2 = document.getElementById("products-list-2");
products2.forEach(product => {
    productsList2.innerHTML += `
          <div class="col-md-3">
            <div class="card product-card text-center">
              <img src="${product.img}" class="card-img-top" alt="${product.title}" />
              <div class="card-body">
                <h6 class="card-title">${product.title}</h6>
              </div>
            </div>
          </div>
        `;
});