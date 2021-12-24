class Carousel {
    constructor(imageLinks) {
        this.imageLinks = imageLinks;
        this.imageIndex = 2;
    }

    getCurrentSelection() {
        return this.imageLinks.slice(this.imageIndex - 2, this.imageIndex + 1);
    }

    rotateRight() {
        if (this.imageIndex < this.imageLinks.length - 1) {
            this.imageIndex++;
            return this.getCurrentSelection();
        }
        return [];
    }

    rotateLeft() {
        if (this.imageIndex > 2) {
            this.imageIndex--;
            return this.getCurrentSelection();
        }
        return [];
    }
}

function main() {
    // Add 3 or more links/images below:
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
            imageLink: 'https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-coding-2017-6753651837108765-2xa.gif',
        },
    ];

    const updateUI = ((updatedLinks) => {
        for (const [index, linkPair] of updatedLinks.entries()) {
            document.getElementById(`anchor-${index}`).href = linkPair.anchorlink;
            document.getElementById(`img-${index}`).src = linkPair.imageLink;
        }
    });

    const carousel = new Carousel(links);

    document.getElementById('arrowLeftBtn').addEventListener('click', (ev) => {
        ev.preventDefault();
        updateUI(carousel.rotateLeft());
    });

    document.getElementById('arrowRightBtn').addEventListener('click', (ev) => {
        ev.preventDefault();
        updateUI(carousel.rotateRight());
    });
}

main();
