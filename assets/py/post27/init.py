from pyscript import display
from datetime import datetime

# 간단한 로그
print("안녕하세요, PyScript입니다!")

# 오늘 날짜 보이게
now = datetime.now()
display("오늘 날짜")
display(now.strftime("%m/%d/%Y, %H:%M:%S"))

display("")
display("----------------------------------")

# 간단한 계산
display("간단한 계산")
result = 5 * 10
display(f"5 x 10 = {result}")

display("")
display("----------------------------------")
