(async (f, o, r, m, s) => {
  m = o.getElementsByTagName("head")[0];
  s = o.createElement("script");
  s.async = 1;
  s.src = r;
  s.onload = async () => {
    let v="ZGV2LTI4MTQtMTE5Ni0xMTEz-id";
    let d = decodeURIComponent(decodeURIComponent(v.split('-')[0]));
    let r = window.atob(d);
    var data = await f.wg.init("forms", r.split("-")[0], r.split("-")[1], r.split("-")[2], `forms/${r.split("-")[3]}/embed`, { width: "1200px", height: "750px" }, "widget", v.split("-")[1]);
  };
  m.appendChild(s);
  console.log("verified by script")
})(window, document, "https://infinity-public-js.500apps.com/widget.min.js");
