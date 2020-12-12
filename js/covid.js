const covid = document.querySelector(".js-covid");
const API_KEY_COVID =
  "ZTA0ThFuL3LhjBoSmkJi7q6KH45jxcI570l0pkn5UX20KxU0%2F3VRuNUf%2FjiK27E7BDnOuXW7JTdBd0eJiNDzdg%3D%3D";

function checkCovid() {
  /*오늘 날짜 추가 해야함 지역 어디로 들어가는 지 알아야지*/
  function getFormatDate(date) {
    var year = date.getFullYear(); //yyyy
    var month = 1 + date.getMonth(); //M
    month = month >= 10 ? month : "0" + month; //month 두자리로 저장
    var day = date.getDate(); //d
    day = day >= 10 ? day : "0" + day; //day 두자리로 저장
    return year + "" + month + "" + day; //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
  }
  var date = new Date();
  date = getFormatDate(date);

  fetch(
    "https://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${API_KEY_COVID}&pageNo=1&numOfRows=10&startCreateDt=${date}&endCreateDt=${date}",
    { credentials: "include" }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function init() {
  checkCovid();
}

init();
