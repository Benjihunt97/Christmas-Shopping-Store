$(document).ready(() => {

    // products
    let products = [
        {
            img: 'https://icodethis.com/images/iCodeMas/tree.png',
            title: 'Christmas Tree',
            price: 19.99,
            category: 'decoration green',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/gift.png',
            title: 'Gift box',
            price: 9.99,
            category: 'gift red white',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/gingerbread_cookie.png',
            title: 'Ginderbread Man',
            price: 12.99,
            category: 'cookie brown',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/snowflake.png',
            title: 'Snowflake',
            price: 4.99,
            category: 'decoration white',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/star_cookie.png',
            title: 'Star cookie',
            price: 12.99,
            category: 'cookie brown',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/santa_hat.png',
            title: 'Santa Hat',
            price: 39.99,
            category: 'decoration red white',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/candy_cane.png',
            title: 'Candy Cane',
            price: 8.99,
            category: 'decoration red white',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/snowman_deco.png',
            title: 'Snowman Decoration',
            price: 39.99,
            category: 'decoration white',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/christmas_sock.png',
            title: 'Christmas Red Socks',
            price: 9.99,
            category: 'cloths red',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/red_ribbon.png',
            title: 'Red Ribbin',
            price: 9.99,
            category: 'decoration red',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/tree_cookie.png',
            title: 'Christmas Tree Cookie',
            price: 13.99,
            category: 'cookie',
        },
        {
            img: 'https://icodethis.com/images/iCodeMas/christmas_ball.png',
            title: 'Christmas Ball',
            price: 4.99,
            category: 'decoration',
        }
    ];

    products.forEach((item, index) => {
        let card = `
            <div class="product-item">
                <img src="${item.img}" alt="" class="product-img">
                <div class="product-text">
                    <h1 class="product-title">${item.title}</h1>
                    <p class="product-price">£${item.price}</p>
                    <button class="add-item">
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        `;

        $('.product-container').append(card);
    });

});