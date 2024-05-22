import PropTypes from 'react';

const BookMark = ({bookMark}) => {
    console.log(bookMark);
    const {title} = bookMark;
    return (
        <div className='mb-5'>
            <p className='bg-white mr-4 rounded-xl p-4'>{title}</p>
        </div>
    );
};

BookMark.propTypes = {
    bookMark: PropTypes.object
}
export default BookMark;