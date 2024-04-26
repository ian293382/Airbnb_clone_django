# search python -slim-bullseye
FROM python:3.12.2-slim-bullseye

WORKDIR /usr/src/djangobnb_backend

# 每次運行都會轉成bytecode 會造成效能上影響所以不讓他生成官方環境設置
ENV PYTHONDONTWRITEBYTECODE 1

# 即時輸出 非緩衝
ENV PYTHONUNBUFFERED 1

# 更新套件列表，安裝 netcat
# 修正原來的安裝指令，確保 apt-get 正確使用
RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip
COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/djangobnb_backend/entrypoint.sh
RUN chmod +x /usr/src/djangobnb_backend/entrypoint.sh

COPY . . 

ENTRYPOINT [ "/usr/src/djangobnb_backend/entrypoint.sh" ]