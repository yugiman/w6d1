const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];
let divAppend = $('#items');
let price;
let names;
let disc;
$(storeItems).each(function(i){
    price = storeItems[i].price;
    names = storeItems[i].name;
    disc = storeItems[i].details;
    if (storeItems[i].inStock === true){
        $(divAppend).append(`<div class='itemDiv change'>
                                <div class='div-sub-1 sub'>
                                    <p class="text1 align1 change">$${price}</p>
                                </div>
                                <div class='div-sub-2 sub'>
                                    <p class="text1 align2 change">${names}</p>
                                </div>
                                <div class='div-sub-3 sub'>
                                    <p class="text1 align3 change">${disc}</p>
                                </div>
                            </div>`);
    }
});
let button = $('#button1');
let toggle = $('.change');
button.click(function(){
    $(toggle).toggleClass('dark');
})