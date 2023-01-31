import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'
const key = "disjids"

const app = express()
app.use(express.json())
app.use(cors())

const credentials = {
    email: 'contato@type.dev.br',
    senha: '123456'
}

app.post('/auth', (req, res) => {
    const { email, senha } = req.body;
    if (email === credentials.email && senha === credentials.senha) {
        return res.status(200).json({
            
            token: jwt.sign({ 
                

                email,
                role: 'admin'
            }, key)


        })
    }
    
    return res.status(401).json({
        Erro: 'nos dados de autenticação'
     })
})
app.listen(3000, () => console.log('Running on port 3000!'))