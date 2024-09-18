document.addEventListener('DOMContentLoaded', function() {
    let urlParams = new URLSearchParams(window.location.search);
    let address = urlParams.get('address');


    if(address){
        // Update 'iframe' src with only the address parameters
        let iframes = document.querySelectorAll('iframe');
        iframes.forEach(function(iframe) {
            let src = iframe.getAttribute('src');
            if (src) {
                let newSrc = src + "?" + address;
                iframe.setAttribute('src', newSrc);
            }
        });
    }
});
