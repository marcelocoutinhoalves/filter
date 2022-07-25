import Frame from '../../assets/frame.png'
import './card.css'

export const Card = (props) => {

    return (
        <div className={`card card-${props.pokemon.type.toLowerCase()}`}>
            <div className="card-header">
                <img src={Frame} alt="" srcSet="" style={{backgroundImage: `url(${props.pokemon.img})`}} />
            </div>
            <div className="card-body">
                <span>{`#${props.pokemon.number}`}</span>
                <h3>{props.pokemon.name}</h3>
                <div className={`pokemon-type pokemon-${props.pokemon.type.toLowerCase()}`}>
                    <span>{props.pokemon.type}</span>

                </div>
            </div>
        </div>
    )
}