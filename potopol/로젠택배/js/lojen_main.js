
$(function(){
    var $slides=$("#top_main ul").find("li"), //모든 슬라이드 이미지 선택
        slideCount=$slides.length, //slides안에 있는 img들의 갯수확인:length
        currentIndex=0;
    /* 첫 번째 슬라이드에 페이드 인으로 표시 */
    $slides.eq(currentIndex).fadeIn(); 
    /* 다음 슬라이드 표시하는 함수 */
    function showNextSlide(){
        //다음 표시 할 슬라이드의 인텍스
        //만약, 마지막 슬라이드라면 처음으로 돌아가기
        var nextIndex=(currentIndex+1)%slideCount; // 0.1.2.3.0.1.2.3 반복만들기 , %:나머지값(1) , 
        //현재 슬라이드 페이드 아웃(숨김)
        $slides.eq(currentIndex).fadeOut();
        //다음 슬라이드 페이드 인 (표시)
        $slides.eq(nextIndex).fadeIn();
        //현재 슬라이드 인텍스를 업데이트
        currentIndex=nextIndex;
    }    
    /* 3초마다 showNextSlide() 함수를 호출 */
    setInterval(showNextSlide,3000);
});