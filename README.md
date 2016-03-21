# resize-Image-api
API для изменения размера изображений.

## Получение ключа
Для работы с API нужно получить ключ (token) который нужно прикреплять к каждому запросу к API.
Метод получения ключа:

```javascript
GET /key

status 200

{
    "status": "success",
    "data": {
        "key": ""
    },
    "message": null
}
```

## Получение списка ранее загруженых изображений
Метод вернет массив объектов изображений в котором будет ссылка на измененное изображение и его размеры width и height.

```javascript 
GET /images-list?key

status 200

{
  "status": "success",
  "data": {
    "images": [
        {
            "url": "",
            "width": "",
            "height": ""
        }
    ]
  },
  "message": null
}
```

## Изменения размера изображения
Метод ожидает данные в формате "multipart/form-data".
В ответ возвращает ссылку на измененное изображение.

```javascript
POST /image-resize

Обязательные параметры:
    @key
    @width
    @height
    @img

201 Created

{
  "status": "success",
  "data": {
    "link": ""
    },
  "message": null
}
```

## Ошибки
Вслучае не валидного запроса API ответит:

```javascript
status 400

{
  "status": "error",
  "data": null,
  "message": "Invalid parameters"
}
```
Если произошла какая то ошибка на сервере:

```javascript
status 500

{
  "status": "error",
  "data": null,
  "message": "Internal server error"
}
```
Ошибка авторизации - если не передан ключ или ключ не валидный: 
```javascript
status 401

{
  "status": "error",
  "data": null,
  "message": "Invalid key"
}
```