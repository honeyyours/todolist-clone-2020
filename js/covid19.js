var xhr = new XMLHttpRequest();
var url =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson"; /*URL*/
var queryParams =
  "?" +
  encodeURIComponent("ServiceKey") +
  "=" +
  "ZTA0ThFuL3LhjBoSmkJi7q6KH45jxcI570l0pkn5UX20KxU0%2F3VRuNUf%2FjiK27E7BDnOuXW7JTdBd0eJiNDzdg%3D%3D"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
queryParams +=
  "&" +
  encodeURIComponent("startCreateDt") +
  "=" +
  encodeURIComponent("20200410"); /**/
queryParams +=
  "&" +
  encodeURIComponent("endCreateDt") +
  "=" +
  encodeURIComponent("20200410"); /**/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    );
  }
};

xhr.send("");
