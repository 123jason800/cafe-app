import React from 'react';
import './directory.styles.scss';
import MenuItem from './../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
            {
                title: 'Drinks',
                imagePath:'https://images.unsplash.com/photo-1579466711790-7f7fd2fde2d9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=633&q=80',
                id: 1
            },
            {
                title: 'Lunch',
                imagePath:'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
                id: 2
            },
            {
                title: 'Dessert',
                imagePath:'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1270&q=80',
                id: 3
            },
            {
                title: 'Merchandise',
                imagePath:'https://images.unsplash.com/photo-1482175828271-d793f8c731b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                size:'large',
                id: 4
            },
            {
                title: 'Take Home',
                imagePath:'https://images.unsplash.com/photo-1548863227-3af567fc3b27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
                size:'large',
                id: 5
            },
        
            ]
        }
    }

    render() {
        
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherProps }) => (
                        <MenuItem key={id} {...otherProps} />
                    ))
                }
            
            
            </div>
        )
    }
}

export default Directory;