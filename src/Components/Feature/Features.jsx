import PropTypes  from 'prop-types';
import {BsPatchCheckFill} from 'react-icons/bs'

const Features = ({feature}) => {
    return (
            <p className='text-left px-3 flex items-center gap-2 text-purple-700 font-bold'><BsPatchCheckFill className='text-blue-700'></BsPatchCheckFill> {feature}</p>
    );
};

Features.propTypes = {
    feature: PropTypes.string
}
export default Features;