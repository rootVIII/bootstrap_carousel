class Carousel {
    constructor(imageLinks) {
        this.imageLinks = imageLinks;
        this.imageIndex = 2;
    }

    rotateRight() {
        if (this.imageIndex < this.imageLinks.length - 1) {
            this.imageIndex++;
            console.log(this.imageIndex);
            return this.imageLinks.slice(this.imageIndex - 2, this.imageIndex + 1);
        }
        console.log(this.imageIndex);
        return [];
    }

    rotateLeft() {
        if (this.imageIndex > 2) {
            this.imageIndex--;
            console.log(this.imageIndex);
            return this.imageLinks.slice(this.imageIndex - 2, this.imageIndex + 1);
        }
        console.log(this.imageIndex);
        return [];
    }
}

function main() {
    const links = [
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
    const carousel = new Carousel(links);

    document.getElementById('arrowLeftBtn').addEventListener('click', () => {
        let nextLeftGroup = carousel.rotateLeft();
        console.log(nextLeftGroup);
    });

    document.getElementById('arrowRightBtn').addEventListener('click', () => {
        let nextRightGroup = carousel.rotateRight();
        console.log(nextRightGroup);
    });
}

main();
