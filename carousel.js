class Carousel {
    constructor() {
        this.imageLinks = null;
        this.imageIndex = 0;
    }

    setImageLinks() {
        // Store 1-many anchor/image links here:
        this.imageLinks = [
            {
                anchorlink: 'https://www.links.cafe',
                imageLink: 'https://www.links.cafe/static/og.jpg',
            }, {
                anchorlink: 'https://www.github.com/rootVIII',
                imageLink: 'https://avatars.githubusercontent.com/u/30498791?v=4',
            }, {
                anchorlink: 'https://www.google.com',
                imageLink: 'https://www.google.com/logos/doodles/2021/winter-2021-northern-hemisphere-6753651837109164-2xa.gif',
            }, {
                anchorlink: 'https://www.google.com',
                imageLink: 'https://www.google.com/logos/doodles/2018/teachers-day-2018-turkey-5701910244884480-2xa.gif',
            }, {
                anchorlink: 'https://www.google.com',
                imageLink: 'https://www.google.com/logos/doodles/2017/celebrating-mensch-argere-dich-nicht-5985613537869824.2-2xa.gif',
            }, {
                anchorlink: 'https://www.google.com',
                imageLink: 'https://www.google.com/logos/doodles/2021/summer-2021-southern-hemisphere-6753651837109165-2xa.gif',
            }, {
                anchorlink: 'https://www.google.com',
                imageLink: 'https://www.google.com/logos/doodles/2021/georges-seurats-162nd-birthday-6041111272357888-2xa.gif',
            }, {
                anchorlink: 'https://www.google.com',
                imageLink: 'https://www.google.com/doodles/teachers-day-2021-november-24',
            },
        ];
    }

    rotateRight() {
        // get next (just one)
    }

    rotateLeft() {
        // get next (just one)
    }
}

function main() {
    const carousel = new Carousel();
    carousel.setImageLinks();
}

main();
