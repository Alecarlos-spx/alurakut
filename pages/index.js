
import React, { useState } from 'react';

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


  const pessoasFavoritas = [{
    id: 1,
    title: 'filipedeschamps',
    image: 'https://github.com/filipedeschamps.png',
    url: 'https://github.com/filipedeschamps'
  },
  {
    id: 2,
    title: 'omariosouto',
    image: 'https://github.com/omariosouto.png',
    url: 'https://github.com/omariosouto',
  },
  {
    id: 3,
    title: 'peas',
    image: 'https://github.com/peas.png',
    url: 'https://github.com/peas',
  },
  {
    id: 4,
    title: 'rafaballerini',
    image: "https://github.com/rafaballerini.png",
    url: 'https://github.com/rafaballerini',
  },
  {
    id: 5,
    title: 'marcobrunodev',
    image: "https://github.com/marcobrunodev.png",
    url: 'https://github.com/marcobrunodev',
  },
  {
    id: 6,
    title: 'felipefialho',
    image: "https://github.com/felipefialho.png",
    url: 'https://github.com/felipefialho',
  }];

  //const comunidades = ['alurakut'];
  const githubUser = 'alecarlos-spx';

  const urlBase = 'https://api.github.com/users/';
  let listaFavoritos =  [];

  //console.log(`${urlBase}${githubUser}/followers`);

//  function followersGitHub(props)  {
//   const { githubUser } = props;
//   axios.get(`${urlBase}${githubUser}/followers`)
//   .then(response => {
//     const followers =  response.data;
//       followers.map((item) => {
//         this.listaFavoritos.push(item.login);
//       } );
//       console.log(followers);
//       return followers;
//     }).catch(error => console.error(error));

// }
  

  

    
  //  let pessoasFavoritas = (followersGitHub({githubUser}));

  // console.log(pessoasFavoritas);
  // console.log(listaFavoritos);
  
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
          <ProfileRelationsBoxWrapper lista={pessoasFavoritas} titulo='Pessoas da comunidades'/>
     
      
        </div>
      </MainGrid>
    </>
  )
}
