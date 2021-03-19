function Links(props){
    return (
        <div>
        {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
        <h3>Links</h3>
        <a href={props.github}><p>{props.github}</p></a>
        <a href={props.linkedin}><p>{props.linkedin}</p></a>
        </div>
    );
}

export default Links;