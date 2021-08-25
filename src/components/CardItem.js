import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
    {/*Cards.js에서 입력된 값을 이용하여 props.000을 통해 알맞은 값 화면에 표시*/ }
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Travel" className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
