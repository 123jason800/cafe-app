import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title,imagePath,size,history,match}) => (
    <div className={'menu-item'} onClick={() => history.push(`${match.url}${title}`)}>

        <div 
        class={`menu-item-bg ${size ? size : ''}`}
        style={{
            backgroundImage: `url(${imagePath})`
        }}
        >   


            <div className="content">
              
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop Now</span>
            </div>


        </div>

    

    </div>
)

export default withRouter(MenuItem);