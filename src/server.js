const express = require ('express');
const routes = require('./routes/vinoRouter.js');
const server = express();
server.use(express.json());
server.use('/tiposvino', routes);

server.listen (4000,() => {
    console.log ('Port 4000 activated')
})




























//MODIFY ONE ARTICLE
// server.put ('/tipos/:id', (req, res) => {
//     // Desestructurar el objeto
//     const {tipo_vino} = req.body;
//     const id = parseInt(req.params.id);
//     const sql = 'UPDATE tipos_vinos SET tipo_vino=? WHERE id=?';
//     connection.query (sql, [tipo_vino,id], (error, result, fields) => {
//         if(error) {
//             console.log(error.message);
//         } else {
//             console.log(result);
//             res.send(result);
//         }
//     })
// })

//DELETE ONE ARTICLE
// server.delete ('/tipos/:id', (req, res) => {
//     // Desestructurar el objeto
//     const {tipo_vino}= req.body;
//     const id = parseInt(req.params.id);
//     const sql = 'DELETE FROM tipos_vinos WHERE id=?';
//     connection.query (sql, [id], (error, result, fields) => {
//         if(error) {
//             console.log(error.message);
//         } else {
//             console.log(result);
//             res.send(result);
//         }
//     })
// })

// Test