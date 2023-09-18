import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        
        <li className="mr-5 hover:bg-blue-700 py-1"><a href={route.path}>{route.name}</a></li>
    );
};
Link.propTypes = {
    route: PropTypes.object 
}
export default Link;