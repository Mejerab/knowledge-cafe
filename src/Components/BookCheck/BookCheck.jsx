import PropTypes from 'prop-types';
const BookCheck = ({blog, addToRead}) => {
    return (
        <div className="inline-block">
            <button onClick={() => addToRead(blog)}><img className='inline -mt-1' src="https://i.ibb.co/RPt3y4W/Frame.png}" alt="" /></button>
        </div>
    );
};

BookCheck.propTypes = {
    addToRead: PropTypes.func,
    blog: PropTypes.object
}
export default BookCheck;