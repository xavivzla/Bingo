# BINGO KATA

## INSTALAR LAS DEPENDENCIAS

```bash
yarn
```
> or

```bash
npm i
```

## INICIAMOS EL SERVIDOR

```bash
yarn dev 
```
> or

```bash
npm run dev
```

Despues de inicar el server tenemos 4 endpoints para el **BINGO** que levantan en e puerto **8080** por defecto si quieres puedes cambiarlo creando el archivo **.env** y usando la variable **PORT=mi-puerto**


> ## Crear un carton [/api/bingo/card]
### [GET]
+ Response 200 (application/json) 
    ```JSON
    {
        "data": {
            "card": [
                [
                    5,
                    4,
                    9,
                    12,
                    15
                ],
                [
                    16,
                    17,
                    26,
                    24,
                    30
                ],
                [
                    38,
                    33,
                    "FREE",
                    41,
                    40
                ],
                [
                    57,
                    56,
                    49,
                    53,
                    52
                ],
                [
                    72,
                    61,
                    71,
                    67,
                    68
                ]
            ],
            "cardId": 3
        }
    }
    ````

> ## Sacar un número [/api/bingo/generateNum]

### [GET]
+ Response 200 (application/json) 
    ```JSON
    {
       "data": {
            "numGenerate": 40,
            "history": [
                40
            ]
        }
    }
    ```

> ## valida un carton enviando el cardId [/api/bingo/checking]

### [POST]
+ Response 200 (application/json) 
    ```JSON
    {
        "data": {
            "mensaje": "No es ganador",
            "status": false
        }
    }

    //Cuando es un carton ganador
    {
        "data": {
            "mensaje": "Si es ganador",
            "status": true,
            "logs": {
                "card": [
                    [
                        13,
                        7,
                        1,
                        2,
                        4
                    ],
                    [...]
                ],
                "callNums": [
                    29,
                    32,
                    68,
                    62,
                    27,
                    1,
                    39,
                    2,
                    37,
                    10,
                    13,
                    ...
                ]
            }
        }
    }
    ```

> ## valida todos los cartones [/api/bingo/checkings]

### [GET]
+ Response 200 (application/json) 
    ```JSON
    {
        "data": [
            {
                "cardId": 1,
                "mensaje": "No es ganador",
                "status": false
            },
            {
                "mensaje": "Si es ganador",
                "status": true,
                "logs": {
                "card": [
                    [
                        13,
                        7,
                        1,
                        2,
                        4
                    ],
                    [...]
                    ],
                    "callNums": [
                        29,
                        32,
                        68,
                        62,
                        27,
                        1,
                        39,
                        2,
                        37,
                        10,
                        13,
                        ...
                    ]
                }
            }
        ]
    }
    ```