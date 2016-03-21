GET /key

200 OK

{
	"status": "success",
	"data": {
		"key": ""
	},
	"message": null
}


GET /images-list?key=<string>&limit=<number>

200 OK

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

401 Unauthorized

{
  "status": "error",
  "data": null,
  "message": "Invalid key"
}


POST /image-resize

key=<string>
width=<number>
height=<number>
img=<file>

201 Created

{
  "status": "success",
  "data": {
    "link": ""
    },
  "message": null
}

400 Bad Request {
  "status": "error",
  "data": null,
  "message": "Invalid parameters"
}

401 Unauthorized

{
  "status": "error",
  "data": null,
  "message": "Invalid key"
}

