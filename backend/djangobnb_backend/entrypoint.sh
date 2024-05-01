#!/bin/sh

# 檢查環境變數 DATABASE 是否設為 'postgres'
if [ "$DATABASE" = "postgres" ] 
then
    echo "Check if database is running..."

    # 檢查 SQL 服務是否在運行
    while ! nc -z $SQL_HOST $SQL_PORT; do
        sleep 0.1
    done

    echo "The database is up and running :-D"
fi

# 執行 Django 資料庫遷移 不然每次都得關機migrateions 不如打上去讓他主動偵查
python manage.py makemigrations
python manage.py migrate

# 執行額外的命令
exec "$@"
