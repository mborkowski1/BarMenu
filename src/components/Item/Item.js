import React from 'react';
import styles from './Item.module.css';
import CSSModules from 'react-css-modules';

const item = props => {
    const showItem = () => {
        switch (props.category) {
            case 'beers':
                return (
                    <div className="card bg-secondary m-3 text-center" styleName="beer-card">
                        <img src={props.item.src} className="card-img-top" styleName="beer-img" alt="beer" />
                        <div className="card-body">
                            <h5 className="card-title">{props.item.name}</h5>
                            <p className="text-left">Style: {props.item.style}</p>
                        </div>
                        <div className="card-footer">
                            <span>Price: {props.item.price}$</span>
                        </div>
                    </div>
                );
            case 'burgers':
                return (
                    <div className="card bg-secondary m-3 text-center" styleName="burger-card">
                        <img src={props.item.src} className="card-img-top" styleName="burger-img" alt="burger" />
                        <div className="card-body">
                            <h5 className="card-title">{props.item.name}</h5>
                            <p className="text-left">
                                Ingredients:&nbsp;
                                {props.item.ingredients.map((ingredient, index) => {
                                    if (index !== props.item.ingredients.length - 1)
                                        return `${ingredient}, `;
                                    else
                                        return ingredient
                                })}
                            </p>
                        </div>
                        <div className="card-footer">
                            <span>Price: {props.item.price}$</span>
                        </div>
                    </div>
                );
            case 'snacks':
                return (
                    <div className="card bg-secondary m-3 text-center" styleName="snack-card">
                        <img src={props.item.src} className="card-img-top" styleName="snack-img" alt="snack" />
                        <div className="card-body">
                            <h5 className="card-title">{props.item.name}</h5>
                            <p className="text-left">Description: {props.item.description}</p>
                        </div>
                        <div className="card-footer">
                            <span>Price: {props.item.price}$</span>
                        </div>
                    </div>
                );
            default: return null
        }
    };

    return (
        showItem()
    );
};

export default CSSModules(item, styles);
