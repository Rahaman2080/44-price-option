
import PropTypes from 'prop-types';
import Features from '../Feature/Features';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className='bg-green-400 text-center p-4 rounded-2xl shadow-2xl flex flex-col'>
            <h2>
                <span className='text-5xl font-extrabold text-purple-600'>{price}</span>
                <span className='text-3xl font-bold text-green-950'>/month</span>
            </h2>
            <h4 className='text-2xl font-bold my-4 text-purple-700'>{name}</h4>
            <h5 className='font-bold text-xl text-yellow-700'>Features:</h5>
            <div className='flex-grow my-3'>
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>
            <button className='bg-blue-700 py-1 px-3 rounded-xl text-white font-bold hover:bg-purple-700'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;