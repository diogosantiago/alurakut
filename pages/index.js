import MainGrid from "../src/components/MainGrid"
import Box from "../src/components/Box"
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from "../src/lib/AlurakutCommons"
import { useEffect, useState } from "react";
import BoxWrapper from "../src/components/BoxWrapper";

function ProfileSideBar(props){
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>@{props.githubUser}</a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault />
    </Box>);
}

export default function Home() {
  const githubUser = "diogosantiago"; // omariosouto jujunegreiros peas
  const [pessoasFavoritas, setPessoasFavoritas] = useState([])
  const [comunidades, setComunidades] = useState([
    {id: new Date().toISOString(), title: "Eu odeio acordar cedo", image: "http://alurakut.vercel.app/capa-comunidade-01.jpg", link: "https://www.orkut.br.com/MainCommunity?cmm=10000"},
    {id: new Date().toISOString(), title: "Alura", image: "https://www.alura.com.br/assets/img/alura-share.1617727198.png", link: "https://www.alura.com.br/"},
    {id: new Date().toISOString(), title: "Pentagrama", image: "https://pentagrama.com.br/img/favicon.png", link: "https://www.pentagrama.com.br/"},
    {id: new Date().toISOString(), title: "Wtennis", image: "https://mediacdn.wtennis.com.br/catalog/product/cache/2/image/265x/9df78eab33525d08d6e5fb8d27136e95/m/i/mizuno_wave_prophecy_x_ag_13_1018075_4.jpg", link: "https://www.wtennis.com.br/"},
    {id: new Date().toISOString(), title: "Copa BH Kart", image: "http://www.copabhkart.com.br/wp-content/uploads/2020/12/cropped-logo-2.png", link: "http://www.copabhkart.com.br/"},
  ])

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/following`).then(response => {
      return response.json();
    }).then(data => {
      // const pessoas = data.map(elemento => elemento.login )
      const pessoas = data.map(elemento => {
        console.log(elemento);
        return {id: elemento.login, title: elemento.login, image: `https://github.com/${elemento.login}.png`, link: elemento.html_url};
      } );
      console.log(pessoas);
      setPessoasFavoritas(pessoas);
    })
  }, [])

  function handleForm(e){
    e.preventDefault();
    const dadosdoForm = new FormData(e.target);
    const comunidade = {
      id: new Date().toISOString(),
      title: dadosdoForm.get('title'),
      image: dadosdoForm.get('image')+"?"+new Date().toISOString(),
    }

    setComunidades([...comunidades, comunidade]);
  }

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{gridArea: "profileArea"}}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleForm}>
            <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?" name="title" aria-label="Qual vai ser o nome da sua comunidade?" type="text" />
              </div>
              <div>
                <input placeholder="Coloque uma URL para usarmos de capa" name="image" aria-label="Coloque uma URL para usarmos de capa" type="text" defaultValue="http://picsum.photos/200/300" />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
        <BoxWrapper title="Pessoas da Comunidade" list={pessoasFavoritas} />
        <BoxWrapper title="Comunidades" list={comunidades} />
        </div>
      </MainGrid>
    </>
  )
  
}
