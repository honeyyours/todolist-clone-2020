/* Javascript 샘플 코드 */

var xhr = new XMLHttpRequest();
var url =
  "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson"; /*URL*/
/*http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson*/
var queryParams =
  "?" +
  encodeURIComponent("ServiceKey") +
  "=" +
  "WsbdlD4bVjOHZQtGeljfoG7SS%2BrxvZe1%2FpR0bd5WzlpAQNpwAjhgNafGIy7RLvDt%2FsAAA4C%2FhvQpyjek8yxrHg%3D%3D"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("10"); /**/
queryParams +=
  "&" +
  encodeURIComponent("startCreateDt") +
  "=" +
  encodeURIComponent("20201111"); /**/
queryParams +=
  "&" +
  encodeURIComponent("endCreateDt") +
  "=" +
  encodeURIComponent("20201211"); /**/
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
