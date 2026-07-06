from pyscript import display
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# NumPy로 배열 생성
array = np.array([1, 2, 3, 4, 5])
targetArray = np.array([2, 8, 4, 10, 6])
display(f"array 배열: {array}", target="text1")
display(f"targetArray 배열: {targetArray}", target="text2")

# 배열 연산
display(f"array - targetArray 연산: {array - targetArray}", target="ArrayOperations1")
display(f"targetArray - array 연산: {targetArray - array}", target="ArrayOperations2")

# 첫 번째 그래프 그리기
plt.figure()  # 새로운 Figure 생성
plt.plot(array)
plt.title("first graph: array")
display(plt, target="graph1")

# 두 번째 그래프 그리기
plt.figure()  # 새로운 Figure 생성
plt.plot(targetArray)
plt.title("second graph: targetArray")
display(plt, target="graph2")

# Pandas로 데이터프레임 생성
data = {'이름': ['Alice', 'Bob', 'Charlie'], '나이': [25, 30, 35]}
df = pd.DataFrame(data)
display("Pandas 데이터프레임:",  target="csv-text")
display(df, target="csv")
