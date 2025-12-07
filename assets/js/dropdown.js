// 드롭다운 메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.site-nav .dropdown');
  
  dropdowns.forEach(function(dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    if (toggle) {
      toggle.addEventListener('click', function(e) {
        // 모바일에서만 클릭 이벤트 처리 (햄버거 메뉴가 열려있을 때)
        if (window.innerWidth <= 600) {
          e.preventDefault();
          e.stopPropagation();
          
          // 다른 드롭다운 닫기
          dropdowns.forEach(function(otherDropdown) {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove('active');
            }
          });
          
          // 현재 드롭다운 토글
          dropdown.classList.toggle('active');
        }
      });
    }
  });
  
  // 메뉴 외부 클릭 시 드롭다운 닫기
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 600) {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('active');
        });
      }
    }
  });
});

