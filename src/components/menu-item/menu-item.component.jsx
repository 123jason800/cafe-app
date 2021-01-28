import './menu-item.styles.scss';

const MenuItem = ({title,imagePath,size}) => (
    <div className={'menu-item'}
    >
        <div 
        class={`menu-item-bg ${size ? size : ''}`}
        style={{
            backgroundImage: `url(${imagePath})`
        }}
        > 


        </div>

                
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Shop Now</span>
        </div>


    </div>
)

export default MenuItem;