import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookMarks, readingTime }) => {
    return (
        <div className="">
            <h3 className="font-semibold text-center border-2 border-[#6047EC] text-xl w-80 py-4 rounded-lg bg-[#6047EC1A] text-[#6047EC]">Spend time on read: {readingTime}</h3>
            <div className='mt-5 pt-4 bg-[#1111110D] pl-4 rounded-xl'>
                <h3 className='text-xl font-bold text-[#111111] pb-2'>Bookmarked Blogs: {bookMarks.length}</h3>
                <div className='pb-5 pt-4'>
                    {
                        bookMarks.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
                    }
                </div>
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default BookMarks;