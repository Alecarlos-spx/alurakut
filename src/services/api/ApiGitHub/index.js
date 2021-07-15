import axios from 'axios';

const urlBase = 'http://api.github.com/users/';


function followersGitHub(props)  {
    const { githubUser } = props;
console.log(`${urlBase}${githubUser}/followers`)
    axios.get(`${urlBase}${githubUser}/followers`)
    .then(response => {
        const followers =  response.data;
        console.log(followers);
        const listaFavoritos = [];
        followers.map((item) => {

            return ( <li> 
                {listaFavoritos.push(item.name)}
            </li>)
        } );
        
        console.log(listaFavoritos);
    });
}


export default followersGitHub;


