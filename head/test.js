const options = {
    linkSelector:
        'a[href^="' +
        window.location.origin +
        '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    plugins: [new SwupHeadPlugin()]
};

const swup = new Swup (options);