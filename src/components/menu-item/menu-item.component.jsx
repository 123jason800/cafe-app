import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import {removeSpace} from '../../utils';

const MenuItem = ({title,imagePath,size,history,match}) => (
    <div className={'menu-item'} onClick={() => history.push(`${match.url}${removeSpace(title)}`)}>

        <div 
        className={`menu-item-bg ${size ? size : ''}`}
        style={{
            backgroundImage: `url(${imagePath})`
        }}
        >   
            <div className="content">
                <h3 className="title">{title.toUpperCase()}</h3>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>

    

    </div>
)

export default withRouter(MenuItem);