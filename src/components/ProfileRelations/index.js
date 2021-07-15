
    //    <h2 className="smallTitle">
    //    Pessoas da comunidades ({pessoasFavoritas.length})
    //  </h2>
    //  <ul>
    //    {pessoasFavoritas.map((itemAtual) => {
    //      return (
    //        <li key={itemAtual}>
    //          <a href={`/users/${itemAtual}`}>
    //            <img src={`https://github.com/${itemAtual}.png`}/>
    //            <span>{itemAtual}</span>
    //          </a>
    //        </li>
    //      )
    //    })}
    //  </ul>

import {ProfileRelationsBoxWrapperStyleBox} from './style';

const ProfileRelationsBoxWrapper = (props) => {
    return (
        <ProfileRelationsBoxWrapperStyleBox>
            <h2 className="smallTitle">
            {props.titulo} ({(props.lista).length})
            </h2>
            <ul>
                {(props.lista).map((itemAtual, index) => {
                return (
                            
                            <li key={itemAtual.id}>
                            <a href={`${itemAtual.url}`} >
                                <img src={itemAtual.image}/>
                                <span>{itemAtual.title}</span>
                            </a>
                            </li>
                        
                    
                )
                })}
            </ul>
        </ProfileRelationsBoxWrapperStyleBox>
    );
}

export default ProfileRelationsBoxWrapper;