const usuario = "mihai";
const password = "1234"


const usuarios = {

    login: async (req, res) => {
        try {
    
          const usuarioLogin = req.body.respuesta.usuarioLogin
          const passwordLogin = req.body.respuesta.passwordLogin
    
          
          if (usuarioLogin == usuario && passwordLogin == password) {
    
            
            res.json({
              message: "Login ok",
            });
          } else if (usuarioLogin !== usuario && passwordLogin !== password) {
            res.json({
                message: "Usuario y contraseña erroneas",
              });
          } else if (usuarioLogin !== usuario) {
            res.json({
                message: "El usuario no existe",
              });
          } else if (passwordLogin !== password) {
            res.json({
                message: "Contraseña erronea",
              });
          }
          
    
          
          
        } catch (error) {
          console.error(error);
          res.send(error);
        }
      },

};
module.exports = usuarios; 