
import PropTypes  from 'prop-types';

const PriceOption = ({option}) => {
const {name, price, features} = option;

    return (
        <div className='bg-green-400 text-center p-4'>
            <h2>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-3xl'>/month</span>
            </h2>
            <h4 className='text-2xl font-bold my-4'>{name}</h4>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;