import {ProfileRelationsBoxWrapperStyleBox} from './style';

const ProfileRelationsBoxWrapper = (props) => {
    return (
        <ProfileRelationsBoxWrapperStyleBox>
            <h2 className="smallTitle">
            {props.titulo} ({(props.lista).length})
            </h2>
            <ul>
                {(props.lista).map((itemAtual, index) => {

                if ( index < 6){
                    return (
                            
                        <li key={itemAtual.id}>
                        <a href={`${itemAtual.url}`} >
                            <img src={itemAtual.image}/>
                            <span>{itemAtual.title}</span>
                        </a>
                        </li>
                    )
                }
                })}
            </ul>
        </ProfileRelationsBoxWrapperStyleBox>
    );
}

export default ProfileRelationsBoxWrapper;