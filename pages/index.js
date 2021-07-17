
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';

import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `



function ProfileSidebar(props) { 
  return(
    <Box as="aside">
    <img src={`https://github.com/${props.githubUser}.png`} style={{borderRadius: '8px'}}/>
    <hr/>
    <a className="boxLink" href={'https://github.com/${props.githubUser}'}>
      @{props.githubUser}
    </a>
    <hr/>
    <AlurakutProfileSidebarMenuDefault />
  </Box>
)};



export default function Home() {
  const urlBase = 'https://api.github.com/users/';
  const githubUser = 'alecarlos-spx';
  const [ seguidores, setSeguidores ] = useState([]);

  const [ listaFavoritos, setListaFavoritos ] = useState([]);


  const [ comunidades, setComunidades ] = useState([{
    id: '32q43214124231423242142',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    url: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  },{
    id: '3451341242142421424234423546',
    title: 'Bom dia grupo',
    image:'https://picsum.photos/200/300',
    url: 'https://picsum.photos/200/300',
  }]);

  useEffect(() => {
    axios.get(`${urlBase}${githubUser}/followers`)
      .then(response => {
        let followers = [];
        
        response.data.map((item) => {
          followers.push({
              id: item.id,
              title: item.login,
              image: `https://github.com/${item.login}.png`,
              url: `https://github.com/${item.login}`,
            });
          });

          setSeguidores(...seguidores, followers);
        }).catch(error => console.error(error));
      }, []);

  useEffect(() => {
    axios.get(`${urlBase}${githubUser}/following`)
      .then(response => {
        let following = [];
        
        response.data.map((item) => {
          following.push({
              id: item.id,
              title: item.login,
              image: `https://github.com/${item.login}.png`,
              url: `https://github.com/${item.login}`,
            });
          });

          setListaFavoritos(...listaFavoritos, following);
        }).catch(error => console.error(error));
      }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
            <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              //e.target.title.value
              
              const dadosDoForm = new FormData(e.target);

              const comunidade = {
                id: new Date().toISOString(),
                title : dadosDoForm.get('title'),
                image : dadosDoForm.get('image'),
                url: dadosDoForm.get('image'),
              }

              setComunidades([...comunidades, comunidade]);
              e.target.title.value = '';
              e.target.image.value = '';
             
              //comunidades.push()
            } }>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="text"
                />
              </div>
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper lista={comunidades} titulo='Comunidades'/>
          <ProfileRelationsBoxWrapper lista={listaFavoritos} titulo='Pessoas da comunidade'/>
          <ProfileRelationsBoxWrapper lista={seguidores} titulo='Seguidores'/>
        </div>
      </MainGrid>
    </>
  )
}
