let items = [
    {
        name: "Maria",
        category:  "Clothes",
        price:  20,
        image:   "https://media.discordapp.net/attachments/1019730194984091739/1051979270991392859/image.png?width=1019&height=473",
        description: "This Tesla-branded casual ensemble is a comfortable and versatile option for any casual occasion. The crew neck sweater has a simple but elegant design, with the Tesla logo on the chest. Made with a soft and warm material, this sweater is perfect to wear at any time of the day. The comfortable fabric pants are the same gray color and have a relaxed and comfortable cut. Together with the sweater, they form a timeless and comfortable outfit that adapts to any style and occasion. Do not miss the opportunity to purchase this casual set from the Tesla brand and give a sophisticated and comfortable touch to your wardrobe. You will not regret!",
        userId: "6397867bcd3d51d3279a31c6"
    },
    {
        name: "Maria",
        category:  "Clothes",
        price:  50,
        image:   "https://media.discordapp.net/attachments/1019730194984091739/1051979772714024970/image.png?width=1425&height=671",
        description: "This Tesla-branded ensemble is a timeless and versatile option for any casual or sporty occasion. The black legging has a simple but elegant design, with the Tesla logo on one of the legs. Made with a soft and comfortable material, this legging is perfect to wear at any time of the day. The brown jacket has a modern and sophisticated design, with the Tesla logo on the chest. Made from a warm and water-resistant material, this jacket is perfect for wearing in cold and wet climates. Together with the shoe, they form a cheerful and comfortable outfit that adapts to any style and occasion. Do not miss the opportunity to acquire this set of the Tesla brand and give an elegant and cheerful touch to your wardrobe.",
        userId: "6397867bcd3d51d3279a31c6"
    },
    {
        name: "Maria",
        category:  "Clothes",
        price:  120,
        image:   "https://media.discordapp.net/attachments/1019730194984091739/1051980429479137350/image.png?width=1440&height=625",
        description: "This Tesla brand sweatshirt is an essential piece for any modern and elegant wardrobe. With its simple yet sophisticated design and logo on the left arm, this tracksuit is a statement of style and elegance. Made from a warm, water-resistant material, this coverall is perfect for wearing in cold, wet climates. In addition, with its high neck and pullover design, this jumpsuit is easy to put on and take off, and is very comfortable to wear. Do not miss the opportunity to purchase this Tesla brand jumpsuit and give an elegant touch to your wardrobe. You will not regret!",
        userId: "6397867bcd3d51d3279a31c7"
    },
    {
        name: "Brand charger",
        category:  "Accesories",
        price:  30,
        image:   "https://media.discordapp.net/attachments/1019730194984091739/1051986508472651878/Sin_titulo-1.png?width=583&height=671",
        description: "This Tesla brand charger is an efficient and reliable option to charge your electric vehicle. With its simple yet elegant design and logo on the front, this charger is a statement of style and efficiency. Made of strong and durable material, this charger is capable of charging an electric vehicle in a short time. In addition, it has a Wi-Fi connection, which makes it easy to use and monitor through an application on a mobile device. Do not miss the opportunity to purchase this Tesla brand charger and keep your electric vehicle always charged and ready to use.",
        userId: "6397867bcd3d51d3279a31c7"
    },
    {
        name: "Brand charger connector",
        category:  "Accesories",
        price:  45,
        image:   "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Wall_Connector_banner_web.jpg",
        description: "This Tesla brand charger connector is an efficient and safe option to connect your electric vehicle to the charger. With its modern and sophisticated design and its logo on the front, this connector is a statement of style and efficiency. Made of strong and durable material, this connector is capable of connecting an electric vehicle to the charger in a short time. Additionally, it features an LED light and short-circuit protection, making it safe and easy to use. Do not miss the opportunity to purchase this connector for the Tesla brand charger and keep your electric vehicle always charged and ready to use.",
        userId: "6397a805768fc04ab67a420e"
    },
    {
        name: "Sneakers",
        category:  "Clothes",
        price:  20,
        image:   "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/Chill_banner_web.jpg",
        description: "These Tesla-branded sneakers are a comfortable and durable option for any casual or sporty occasion. With its modern and sophisticated design and its logo on the outer side, these shoes are a statement of style and comfort. Made from a lightweight and comfortable material, these shoes have a durable rubber sole and a cushioned insole, making them comfortable and durable. In addition, they have a timeless and versatile design that makes them suitable for any style and occasion. Do not miss the opportunity to acquire these Tesla brand shoes and give a sophisticated and comfortable touch to your wardrobe.",
        userId: "6397a805768fc04ab67a420e"
    },
    {
        name: "Carpet",
        category:  "Accesories",
        price:  20,
        image:   "https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_Floormats_banner_web.jpg",
        description: "This Tesla brand carpet is a strong and durable option to protect the interior of your electric vehicle. With its modern and sophisticated design and its logo on one end, this rug is a statement of style and protection. Made from a strong and durable material, this mat is designed to fit perfectly inside the vehicle. In addition, it has a non-slip coating and a protection against water and dirt, which makes it easy to clean and maintain. Do not miss the opportunity to acquire this Tesla brand carpet and keep the interior of your electric vehicle as new.",
        userId: "6397a805768fc04ab67a420e"
    },
]

require ('dotenv').config()
require('../../config/database')
const Item = require('../Items')

items.forEach(elemento =>{
    Item.create({
    name:elemento.name,
    category:elemento.category,
    price: elemento.price,
    image: elemento.image,
    description:elemento.description,
    userId:elemento.userId
})
})