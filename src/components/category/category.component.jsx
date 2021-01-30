import './category.styles.scss';


const Category = ({id, title, items}) => (
    
    <div className="category-section">
        <h3 class="section-title">{title.toUpperCase()}</h3>
        <div className="items">
       
            {
                items.map(({ id, imagePath, title, price },i) => {
                    if (i < 4) {
                        return (
                            <div key={id} className="item" >
                                <div 
                                className="item-card" 
                                style={{
                                    background: `url(${imagePath})`,
                                    height: '300px',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
            
                                }}>
                                    <h3 className="item-title">{title}</h3>
                                    <div className="item-overlay">
                                    <h3 className="item-price">${price.toFixed(2)}</h3> 
                                        <button className="item-btn icon-caddie-shopping-streamline"></button>
                                    </div>
                                </div>
                            </div>)
                        }
                })
            }
        </div>
    </div>
);


export default Category;