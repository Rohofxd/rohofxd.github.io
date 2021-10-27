class LightboxManager {

    static showLightbox(src, w, h) {
        console.log("Showing lightbox");
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, [{
            src: src,
            w: w,
            h: h
        }], { index: 0, maxSpreadZoom: 5,  });
        gallery.init();
    }

}