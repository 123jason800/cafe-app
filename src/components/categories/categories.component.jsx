import {Component} from 'react';
import items from './items.data';
import Category from '../category/category.component';
import './categories.styles.scss';


class Categories extends Component {
    constructor(props) {
        super();

        this.state = {
            categories : items
        }
    }


    render() {
        const {categories} = this.state;
        return (
            <div class="container">

                <div class="categories-container">

                    {categories.map(({id,...otherProps}) => (
                        <Category key={id} {...otherProps} />
                    ))}
                    
                </div> 
              
              
            </div>
        );
    }
}


export default Categories;