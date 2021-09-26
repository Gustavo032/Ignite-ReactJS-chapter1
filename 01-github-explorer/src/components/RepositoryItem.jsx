

export function RepositoryItem (props){
    return(
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'Default'}</p>

            <a href={props.repository?.link ?? '#'}>Acesse o Repositório</a>
        </li>
    );
}