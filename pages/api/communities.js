import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequests(req, res) {
    if(req. method === "POST"){
        if(
            req.body.title.length &&
            req.body.image.length &&
            req.body.link.length
        ){
            const TOKEN = '8002ef119ac3665f8af9df17ba5dbd';
            console.log(TOKEN);
            const client = new SiteClient(TOKEN);
            const registro = await client.items.create({
                itemType: "968807", // ID do model de "Community" criado pelo Dato
                title: req.body.title,
                image: req.body.image,
                link: req.body.link
            })
   
            res.json({
                data: "algum dado qqr",
                registro: registro
            })
        }
        else{
            res.json({
                data: "Falta algum campo",
            })
        }
    }
    else{
        res.json({
            data: "apenas resposta em json",
        })
    }
}