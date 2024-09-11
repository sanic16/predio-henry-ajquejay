export const contactTemplate = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>
                Cotacto
            </title>
        </head>
        <body>
            <h1>
                {{name}} se ha contactado contigo
            </h1>
            <p>
                <strong>Nombre:</strong> {{name}}
                <br>
                <strong>Email:</strong> {{email}}
                <br>
                <strong>Teléfono:</strong> {{phone}}
                <br>
                <strong>Asunto:</strong> {{subject}}
            </p>
        </body>
    </html>
`;
