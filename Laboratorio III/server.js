// get the client
const mysql = require('mysql2')
const express = require('express')
const bodyParser = require ('body-parser')
const bcrypt =require('bcrypt')
const cors = require('cors')

const PORT = process.env.PORT || 8000

const app = express()

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// create the connection to database
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:'1234',
  database: 'ventalibros'
})

connection.getConnection ((err, connection) => {
    if(err) throw (err)
    console.log('DB conectada exitosamente ' + connection.threadId)
})

app.listen(PORT, () => console.log( 'Server Started on PORT 8000'))

app.get('/', (req, resp) => {
    resp.send('bienvenido a mi API!');
})

console.log('Api funcionando y esperando peticiones en puerto ', PORT)

//#region GET

app.get('/usuarios', (req, resp) => {
    const sql = "SELECT * FROM usuarios";

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/libros',cors(corsOptions), (req, resp) => {
    const sql = "SELECT * FROM libros";

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/clientes', (req, resp) => {
    const sql = "SELECT * FROM clientes";

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/ventas', (req, resp) => {
    const sql = "SELECT * FROM ventas";

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/editoriales', (req, resp) => {
    const sql = "SELECT * FROM editoriales";

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/generos', (req, resp) => {
    const sql = "SELECT * FROM generos";

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})
//#endregion

//#region GET ONE

app.get('/usuarios/:id', (req, resp) => {
    const sql = "SELECT * FROM usuarios where id = " + req.params.id;

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/libros/:id', (req, resp) => {
    const sql = "SELECT * FROM libros where id = " + req.params.id;

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/clientes/:id', (req, resp) => {
    const sql = "SELECT * FROM clientes where id = " + req.params.id;

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/ventas/:id', (req, resp) => {
    const sql = "SELECT * FROM ventas where id = " + req.params.id;

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/editoriales/:id', (req, resp) => {
    const sql = "SELECT * FROM editoriales where id = " + req.params.id;

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})

app.get('/generos/:id', (req, resp) => {
    const sql = "SELECT * FROM generos where id = " + req.params.id;

    connection.query(sql, (error, results) => {
        if(error) throw error;
        if(results.length > 0){
            resp.json(results);
        } else {
            resp.send('No hay datos');
        }
    })
})
//#endregion

//#region POST

app.post('/usuarios', (req, resp) => {
    const sql = "INSERT INTO usuarios SET ?";

    const usuarioObj = {
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña: req.body.contraseña,
        acceso: req.body.acceso
    };

    connection.query(sql, usuarioObj, error => {
        if(error) throw error;
        resp.send('Usuario insertado');
    })
})

app.post('/libros', (req, resp) => {
    const sql = "INSERT INTO libros SET ?";

    const libroObj = {
        nombre: req.body.nombre,
        idGenero: req.body.idGenero,
        idEditorial: req.body.idEditorial,
        stock: req.body.stock,
        precio: req.body.precio,
        autor: req.body.autor
    };

    connection.query(sql, libroObj, error => {
        if(error) throw error;
        resp.send('Libro insertado');
    })
})

app.post('/clientes', (req, resp) => {
    const sql = "INSERT INTO clientes SET ?";

    const alumnoObj = {
        nombre: req.body.nombre,
        domicilio: req.body.domicilio
    };

    connection.query(sql, alumnoObj, error => {
        if(error) throw error;
        resp.send('Usuario insertado');
    })
})

app.post('/ventas', (req, resp) => {
    const sql = "INSERT INTO ventas SET ?";

    const alumnoObj = {
        nombre: req.body.nombre,
        domicilio: req.body.domicilio
    };

    connection.query(sql, alumnoObj, error => {
        if(error) throw error;
        resp.send('Usuario insertado');
    })
})

app.post('/editoriales', (req, resp) => {
    const sql = "INSERT INTO editoriales SET ?";

    const alumnoObj = {
        nombre: req.body.nombre,
        domicilio: req.body.domicilio
    };

    connection.query(sql, alumnoObj, error => {
        if(error) throw error;
        resp.send('Usuario insertado');
    })
})

app.post('/generos', (req, resp) => {
    const sql = "INSERT INTO generos SET ?";

    const alumnoObj = {
        nombre: req.body.nombre,
        domicilio: req.body.domicilio
    };

    connection.query(sql, alumnoObj, error => {
        if(error) throw error;
        resp.send('Usuario insertado');
    })
})

//#endregion

//#region PUT

app.put('/usuarios/:id', (req, resp) => {
    const id = req.params.id;
    const { nombre, domicilio } = req.body;

    const sql = "UPDATE usuarios SET nombre = ?, domicilio = ? WHERE id = ?";

    connection.query(sql, [nombre, domicilio, id], (error, result) => {
        if (error) throw error;
        resp.send('Usuario actualizado');
    });
});

app.put('/libeos/:id', (req, resp) => {
    const id = req.params.id;
    const { nombre, domicilio } = req.body;

    const sql = "UPDATE libeos SET nombre = ?, domicilio = ? WHERE id = ?";

    connection.query(sql, [nombre, domicilio, id], (error, result) => {
        if (error) throw error;
        resp.send('Usuario actualizado');
    });
});

app.put('/clientes/:id', (req, resp) => {
    const id = req.params.id;
    const { nombre, domicilio } = req.body;

    const sql = "UPDATE clientes SET nombre = ?, domicilio = ? WHERE id = ?";

    connection.query(sql, [nombre, domicilio, id], (error, result) => {
        if (error) throw error;
        resp.send('Usuario actualizado');
    });
});

app.put('/ventas/:id', (req, resp) => {
    const id = req.params.id;
    const { nombre, domicilio } = req.body;

    const sql = "UPDATE ventas SET nombre = ?, domicilio = ? WHERE id = ?";

    connection.query(sql, [nombre, domicilio, id], (error, result) => {
        if (error) throw error;
        resp.send('Usuario actualizado');
    });
});

app.put('/editoriales/:id', (req, resp) => {
    const id = req.params.id;
    const { nombre, domicilio } = req.body;

    const sql = "UPDATE editoriales SET nombre = ?, domicilio = ? WHERE id = ?";

    connection.query(sql, [nombre, domicilio, id], (error, result) => {
        if (error) throw error;
        resp.send('Usuario actualizado');
    });
});

app.put('/generos/:id', (req, resp) => {
    const id = req.params.id;
    const { nombre, domicilio } = req.body;

    const sql = "UPDATE generos SET nombre = ?, domicilio = ? WHERE id = ?";

    connection.query(sql, [nombre, domicilio, id], (error, result) => {
        if (error) throw error;
        resp.send('Usuario actualizado');
    });
});

//#endregion

//#region DELETE

app.delete('/usuarios/:id', (req, resp) => {
    const id = req.params.id;
  
    const sql = "DELETE FROM usuarios WHERE id = ?";
  
    connection.query(sql, [id], (error, result) => {
      if (error) throw error;
      resp.send('Usuario eliminado');
    });
});

app.delete('/libros/:id', (req, resp) => {
    const id = req.params.id;
  
    const sql = "DELETE FROM libros WHERE id = ?";
  
    connection.query(sql, [id], (error, result) => {
      if (error) throw error;
      resp.send('Libro eliminado');
    });
});

app.delete('/clientes/:id', (req, resp) => {
    const id = req.params.id;
  
    const sql = "DELETE FROM clientes WHERE id = ?";
  
    connection.query(sql, [id], (error, result) => {
      if (error) throw error;
      resp.send('Cliente eliminado');
    });
});

app.delete('/ventas/:id', (req, resp) => {
    const id = req.params.id;
  
    const sql = "DELETE FROM ventas WHERE id = ?";
  
    connection.query(sql, [id], (error, result) => {
      if (error) throw error;
      resp.send('Venta eliminada');
    });
});

app.delete('/editoriales/:id', (req, resp) => {
    const id = req.params.id;
  
    const sql = "DELETE FROM editoriales WHERE id = ?";
  
    connection.query(sql, [id], (error, result) => {
      if (error) throw error;
      resp.send('Editorial eliminado');
    });
});

app.delete('/generos/:id', (req, resp) => {
    const id = req.params.id;
  
    const sql = "DELETE FROM generos WHERE id = ?";
  
    connection.query(sql, [id], (error, result) => {
      if (error) throw error;
      resp.send('Genero eliminado');
    });
});
//#endregion


app.post('/createUser', async (req, res) => {
    const user = req.body.nombre
    const hashedPasword = await bcrypt.hash(req.body.contraseña, 10)
    const email = req.body.email
    const acceso = req.body.acceso
    dblClick.getConnection(async (err, connection) => {
        if (err) throw (err)

        const sqlSearch = 'SELECT * FROM usuarios WHERE email = ?'
        const search_query = mysql.format(sqlSearch, [email])

        const sqlInsert = 'INSERT INTO usuariarios VALUES (0,?,?,?,?)'
        const insert_query = mysql.format(sqlInsert, [user, email, hashedPasword, acceso])
        
        await connection.query(search_query, async (err, result) => {
            if (err) throw (err)
            console.log('------> Buscando Resultados')
            console.log(result.length)
            if (result.length != 0) {
                connection.release()
                console.log('-------> Usuario ya existe')
                res.sendStatus(409)
            } else {
                await connection.query(insert_query, (err, result) => {
                    connection.release()
                    if (err) throw (err)
                    console.log('--------> Nuevo Usuario Creado')
                    console.log(result.insertId)
                    res.sendStatus(201)
                })
            }
        })
    })
})

app.post('/login', async (req, res) => {
    const user = req.body.email
    const password = req.body.contraseña
    debugger
    dblClick.getConnection(async (err, connection) => {
        if (err) throw (err)
        const sqlSearch = 'SELECT * FROM usuarios WHERE email = ?'
        const search_query = mysql.format(sqlSearch, [user])
        
        await connection.query(search_query, async (err, result) => {
            if (err) throw (err)
            console.log('------> Buscando Resultados')
            console.log(result.length)
            if (result.length = 0) {
                connection.release()
                console.log('-------> El usuario no existe')
                res.sendStatus(404)
            } else {
                const hashedPasword = result[0].contraseña
                if (await bcrypt.compare(password, hashedPasword)){
                    console.log('--------> Loggin Succesfull')
                    res.send(`${user} is logged in`)
                } else {
                    console.log('--------> Password incorrecto')
                    res.send('Password incorrecto')
                }
            }
        })
    })
})

