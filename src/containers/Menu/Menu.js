import React, {Component} from 'react';
import axios from 'axios';
import Item from '../../components/Item/Item';
import styles from './Menu.module.css';
import './Menu.css';
import CSSModules from 'react-css-modules';

class Menu extends Component {
    state = {
        categories: [],
        actualChoseCategory: ''
    };

    componentDidMount() {
        axios.get('/api/category').then(res => {
            this.setState({ categories: res.data })
        });
    }

    chooseCategory(categoryName) {
        this.setState({actualChoseCategory: categoryName})
    };

    render() {
        const items = () => {
            const category = this.state.categories.find(value => value.name === this.state.actualChoseCategory);

            switch (this.state.actualChoseCategory) {
                case 'beers':
                    return category.beers.map((beer, index) => <Item item={beer} category={this.state.actualChoseCategory} key={index}/>);
                case 'burgers':
                    return category.burgers.map((burger, index) => <Item item={burger} category={this.state.actualChoseCategory} key={index}/>);
                case 'snacks':
                    return category.snacks.map((snack, index) => <Item item={snack} category={this.state.actualChoseCategory} key={index}/>);
                default: return <p className="lead font-weight-bold">Any category hasn't been selected</p>
            }
        };

        const categories = this.state.categories.map((category, index) => {
            return <button className="list-group-item text-capitalize w-auto p-2 m-2 rounded-lg list-group-item-action text-white" styleName="category-button" onClick={() => this.chooseCategory(category.name)} key={index} data-toggle="list">{category.name}</button>
        });

        return (
            <section className="container-fluid py-3">
                <h1 className="text-center">Menu</h1>
                <div className="row my-3 justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 px-3">
                        <div className="list-group flex-sm-row justify-content-center align-items-center">
                            {categories}
                        </div>
                    </div>
                </div>

                <div className="row m-3 justify-content-center">
                    <div className="d-flex flex-column flex-sm-row justify-content-center flex-wrap">
                        {items()}
                    </div>
                </div>
            </section>
        );
    }
}

export default CSSModules(Menu, styles);
