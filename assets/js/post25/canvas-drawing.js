// 캔버스 및 컨텍스트 설정
const drawingCanvas = document.getElementById("drawing-canvas");
const ctx = drawingCanvas.getContext("2d");

// 그림 그리기 관련 변수
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let strokeStyle = 'black';
let lineWidth = 1;
let isErasing = false;

// 스티커 관련 변수
let selectedSticker = null;

// 마우스 및 터치 이벤트 핸들러
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = getEventPosition(e);
}

function draw(e) {
    if (!isDrawing) return;
    const [x, y] = getEventPosition(e);

    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = isErasing ? 'white' : strokeStyle;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    [lastX, lastY] = [x, y];
}

function stopDrawing() {
    isDrawing = false;
}



// 이벤트 위치 계산 (마우스 및 터치 지원)
function getEventPosition(e) {
    const rect = drawingCanvas.getBoundingClientRect();
    if (e.touches) {
        return [e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top];
    } else {
        return [e.offsetX, e.offsetY];
    }
}

// 스티커 클릭 이벤트 핸들러
document.querySelectorAll('.sticker').forEach(sticker => {
    sticker.addEventListener('click', () => {
        selectedSticker = sticker.src;
    });
});

// 캔버스 클릭 이벤트 핸들러 (스티커 추가)
drawingCanvas.addEventListener('click', (e) => {
    if (selectedSticker) {
        const [x, y] = getEventPosition(e);
        const img = new Image();
        img.src = selectedSticker;
        img.onload = () => {
            ctx.drawImage(img, x - 50, y - 50, 100, 100); // 스티커 크기: 100x100
            selectedSticker = null; // 스티커 선택 상태 초기화
        };
    }
});


// 컨트롤 이벤트 핸들러
document.getElementById('line-width').addEventListener('input', (e) => {
    lineWidth = e.target.value;
});

document.getElementById('eraser').addEventListener('click', () => {
    isErasing = !isErasing;
    document.getElementById('eraser').textContent = isErasing ? '지우개 끄기' : '지우개 켜기';
});

document.getElementById('allclear').addEventListener('click', () => {
    ctx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
});


document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.color-button').forEach(btn => btn.classList.remove('selected')); // 기존에 체크되었던 색상은 해제
        this.classList.add('selected'); // 선택한건 체크표시 나오게
        strokeStyle = this.getAttribute('data-color'); // data-color 속성값으로 지정한 섹상변경
        isErasing = false;  // 지우개 모드를 해제
    });
});

// 저장 기능
function saveCanvas() {
    const link = document.createElement('a');
    link.href = drawingCanvas.toDataURL('image/png');
    link.download = 'drawing.png';
    link.click();
}

// 드래그 오버 이벤트 핸들러
function onDragOver(e) {
    e.preventDefault(); // 기본 동작 방지 (필수)
}

// 드롭 이벤트 핸들러
function onDrop(e) {
    e.preventDefault(); // 기본 동작 방지 (필수)

    // 드롭 위치 계산
    const rect = drawingCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left; // 캔버스 내부 X 좌표
    const y = e.clientY - rect.top;  // 캔버스 내부 Y 좌표

    // 드래그된 스티커의 이미지 소스 가져오기
    const stickerSrc = e.dataTransfer.getData('text/plain');

    // 스티커를 캔버스에 그리기
    if (stickerSrc) {
        const img = new Image();
        img.src = stickerSrc;
        img.onload = () => {
            ctx.drawImage(img, x - 50, y - 50, 100, 100); // 스티커 크기: 100x100
        };
    }
}

// 스티커 드래그 시작 이벤트 핸들러
function onDragStart(e) {
    // 드래그할 스티커의 이미지 소스를 저장
    e.dataTransfer.setData('text/plain', e.target.src);
}

// 스티커에 드래그 이벤트 리스너 추가
document.querySelectorAll('.sticker').forEach(sticker => {
    sticker.addEventListener('dragstart', onDragStart);
});

// 이벤트 리스너 등록
drawingCanvas.addEventListener('mousedown', startDrawing);
drawingCanvas.addEventListener('mousemove', draw);
drawingCanvas.addEventListener('mouseup', stopDrawing);
drawingCanvas.addEventListener('mouseleave', stopDrawing);

drawingCanvas.addEventListener('touchstart', startDrawing);
drawingCanvas.addEventListener('touchmove', draw);
drawingCanvas.addEventListener('touchend', stopDrawing);

// 캔버스에 드래그 앤 드롭 이벤트 리스너 추가
drawingCanvas.addEventListener('dragover', onDragOver);
drawingCanvas.addEventListener('drop', onDrop);
