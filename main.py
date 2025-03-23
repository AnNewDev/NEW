# Câu 1
A = [3, 7, 2, 9, 5]
max_value = A[0]

for i in range(1, len(A)):
    if A[i] > max_value:
        max_value = A[i]

for k in range(len(A)):
    if A[k] == max_value:
        print("Giá trị lớn nhất là:", max_value, "Chỉ số là", k)

# Câu2
# Hàm đếm số ký tự là chữ số
def dem_chu_so(xau):
    dem = 0
    for ky_tu in xau:
        if ky_tu.isdigit():
            dem += 1
    return dem

# Nhập xâu từ bàn phím
xau = input("Nhập xâu: ")

# Gọi hàm và in kết quả
so_chu_so = dem_chu_so(xau)
print("Tổng số ký tự là chữ số:", so_chu_so)