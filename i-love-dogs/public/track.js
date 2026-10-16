// Call / directions click tracking. No analytics tag is installed yet; this
// queues events on window.dataLayer (and gtag, if one is ever added) so a
// future GA4/GTM container picks them up without touching page markup.
(function () {
  document.addEventListener("click", function (e) {
    var link = e.target.closest && e.target.closest("a[data-track]");
    if (!link) return;
    var data = {
      event: "cta_click",
      cta_type: link.getAttribute("data-track"),
      cta_location: link.getAttribute("data-where"),
      page: location.pathname,
    };
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(data);
    } catch {
      // never let tracking break a call link
    }
    try {
      if (typeof window.gtag === "function") {
        window.gtag("event", "cta_click", {
          cta_type: data.cta_type,
          cta_location: data.cta_location,
          page: data.page,
        });
      }
    } catch {
      // never let tracking break a call link
    }
  });
})();
