const Datastore = require('nedb');
const menu = new Datastore();

const categories = [];

const beers = {
    name: 'beers',
    beers: [
        {
            name: 'Wrężel Summer Ale',
            style: 'Summer Ale',
            price: 6.00,
            src: 'https://ocen-piwo.pl/upload/a32c4fa789200bb6c10ea8e5f4467a23.png'
        },
        {
            name: 'Wrężel Vermont American IPA',
            style: 'American IPA',
            price: 8.00,
            src: 'https://ocen-piwo.pl/upload/17c0a22409e8820db0d63c0fc9f7eda0.png'
        },
        {
            name: 'Wrężel American Black Rye Ale',
            style: 'American Black Rye Ale',
            price: 9.00,
            src: 'https://ocen-piwo.pl/upload/a07a42fb5b9c4427a71d35eb006b60f3.png'
        },
        {
            name: 'Wrężel Paradise Pale Ale',
            style: 'American Pale Ale',
            price: 7.00,
            src: 'https://ocen-piwo.pl/upload/c6196dd93bb623d389f28eb1660c8815.png'
        },
        {
            name: 'Wrężel Vermont Double IPA',
            style: 'Double Vermont IPA',
            price: 9.00,
            src: 'https://ocen-piwo.pl/upload/c02d8ab3402e1ba00d1d6e850fe7de65.png'
        },
        {
            name: 'Wrężel Vanilla Milk Stout',
            style: 'Milk Stout',
            price: 7.00,
            src: 'https://ocen-piwo.pl/upload/40ff3d3ccf2d5073339df28514a36b5e.png'
        },
        {
            name: 'Wrężel DIPA',
            style: 'New Zealand Double India Pale Ale',
            price: 10.00,
            src: 'https://ocen-piwo.pl/upload/55c76fc918e3a9b0855fdb30c3aceb72.png'
        },
        {
            name: 'Wrężel Wheat India Pale Ale',
            style: 'Wheat India Pale Ale',
            price: 9.00,
            src: 'https://ocen-piwo.pl/upload/248394a1307d72108669035c22116244.png'
        }
    ]
};

const burgers = {
    name: 'burgers',
    burgers: [
        {
            name: 'Classic Burger',
            ingredients: ['beef', 'cheddar cheese', 'lettuce', 'bbq sauce'],
            price: 15.00,
            src: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Italian Burger',
            ingredients: ['beef', 'mozzarella', 'lettuce', 'tomato', 'cheddar cheese', 'mayonnaise sauce'],
            price: 19.00,
            src: 'https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Mexico Burger',
            ingredients: ['beef', 'jalapeno peppers', 'cheddar cheese', 'lettuce', 'jalapeno sauce'],
            price: 18.00,
            src: 'https://images.pexels.com/photos/552056/pexels-photo-552056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        },
        {
            name: 'Texas Burger',
            ingredients: ['beef', 'bacon', 'red onion', 'cheddar cheese', 'lettuce', 'bbq sauce'],
            price: 20.00,
            src: 'https://images.freeimages.com/images/large-previews/b4c/burger-1321842.jpg'
        }
    ]
};

const snacks = {
    name: 'snacks',
    snacks: [
        {
            name: 'Fries',
            description: 'Belgian Fries',
            price: 8.00,
            src: 'https://images.freeimages.com/images/large-previews/2b6/food-18-1323940.jpg'
        },
        {
            name: 'Chips',
            description: 'Chips made from sweet potatoes',
            price: 5.00,
            src: 'https://images.freeimages.com/images/large-previews/358/snacks-1319908.jpg'
        },
        {
            name: 'Onion Rings',
            description: 'Fried onion rings',
            price: 6.00,
            src: 'https://c1.staticflickr.com/4/3766/9327340095_ac1035db80_b.jpg'
        },
        {
            name: 'Hot Dog',
            description: 'Hot dog with a sausage',
            price: 7.00,
            src: 'https://images.freeimages.com/images/large-previews/f1f/food-19-1323934.jpg'
        }
    ]
};

categories.push(beers, burgers, snacks);

menu.insert(categories);

const express = require('express');
const app = express();
const router = express.Router();

router.get('/category', function (req, res) {
    res.json(menu.getAllData())
});

app.use('/api', router);

app.listen(process.env.port || 3001);
