const mainKor = `
    <div class="centered-content">
        <div class="error-number">404</div>
        <div class="error-message">President not found</div>
        <div class="description">
            죄송합니다. 요청하신 대통령을 찾을 수 없습니다.<br>
            대한민국 제20대 대통령 윤석열은 2025년 4월 4일에 파면되었습니다.<br>
            아래 링크를 클릭하여 자세한 내용을 확인해보세요.<br>
        </div>
        <div>
            <button type="button" id="more-link">
                더 알아보기
            </button>
        </div>
        <br>
        <div class="description">
            <button type="button" id="plz-vote">
                혹시 다음 대통령을 찾고 계신가요?
            </button>
        </div>
    </div>
    <div class="credit-button">
        <button type="button" id="credit" onclick="window.open('https://www.github.com/125ryun')">
            개발자 사이트 및 문의
        </button>
    </div>
`;

const moreKor = `
    <div class="back-link-button">
        <button type="button" id="back-link">
            뒤로가기
        </button>
    </div>
    <div class="centered-content">
        <div class="info-link-button">
            <button type="button" id="court" onclick="window.open('https://ecourt.ccourt.go.kr/coelec/websquare/websquare.html?w2xPath=/ui/coelec/dta/casesrch/EP4100_M01.xml&eventno=2024%ED%97%8C%EB%82%988')">
                헌법재판소 사건 정보
            </button>
        </div>
        <div class="info-link-button">
            <button type="button" id="mbc" onclick="window.open('https://youtube.com/shorts/UjHT4xBxYIo?si=pmFPUGY_gNEjX1wj')">
                선고 하이라이트 (MBC)
            </button>
        </div>
        <div class="info-link-button">
            <button type="button" id="mbc" onclick="window.open('https://youtu.be/GoAVYTCGKTE?si=3GEM_ZR6HyDYbxT8')">
                선고 풀영상 (MBC)
            </button>
        </div>
        <div class="info-link-button">
            <button type="button" id="yeonhap" onclick="window.open('https://www.yna.co.kr/view/AKR20250404066754004')">
                보도자료 (연합뉴스)
            </button>
        </div>
    </div>
`;

const plzvoteKor = `
    <div class="back-link-button">
        <button type="button" id="back-link">
            뒤로가기
        </button>
    </div>
    <div class="centered-content">
        <div class="plzvote-text">
            다가오는 대한민국 제21대 대통령 선거에 <br>
            여러분의 소중한 한 표를 행사해 주세요. <br>
            <br>
            대통령 선거는 파면으로부터 60일 이내에 <br>
            즉, 6월 3일 이전에 실시됩니다.
        </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language || navigator.userLanguage; // 브라우저 언어 가져오기
  const content = document.getElementById("content");

  if (userLang.startsWith("ko")) {
      content.innerHTML = mainKor;
  } else {
      content.innerHTML = mainEng;
  }

  document.addEventListener("click", function (event) {
    if (event.target.id === "back-link") {
        event.preventDefault();
        content.innerHTML = mainKor;
    } else if (event.target.id === "more-link") {
        event.preventDefault();
        content.innerHTML = moreKor;
    } else if (event.target.id === "plz-vote") {
        event.preventDefault();
        content.innerHTML = plzvoteKor;
        }
  });
  
});