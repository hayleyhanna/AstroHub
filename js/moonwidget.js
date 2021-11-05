(function () {
    const d = new Date().getDate();
    const m = document.querySelectorAll("#contain_moon div");
    const a = new XMLHttpRequest();//XMLHttpRequest retrieves contents of html doc and data from Url
    const url =
      "https://www.icalendar37.net/lunar/api/?lang=en&month=" +
      (new Date().getMonth() + 1) + 
      "&year=" +
    (new Date().getFullYear()) + 
      "&size=100&lightColor=rgb(245,245,245)&shadeColor=rgb(44,42,42)&LDZ=" +
      new Date(new Date().getFullYear(), new Date().getMonth(), 1) /
        1000 +
      "";
    m[1].style.height = "100px";
    a.onreadystatechange = function () {
      if (a.readyState == 4 && a.status == 200) {//if status is 200 the request has been processed successfully
        var b = JSON.parse(a.responseText);//JSON.parse takes texts and returns Javascript value if the text is a valid JSON text
        m[1].innerHTML = b.phase[d].svg;//retrieves current moon phase image
        if (typeof moon_widget_loaded == "function")
          moon_widget_loaded(b);
        m[2].innerHTML = b.phase[d].npWidget;
        m[3].innerHTML = "Next full moon<br>" + b.nextFullMoon; //displays next full moon
      }
    };
    a.open("GET", url, true);//initializes XMLHttpRequest
    a.send();//sends the request to the server
  })();