import PropTypes from 'prop-types';
import BookCheck from '../BookCheck/BookCheck';

const Blog = ({ blog, addToRead, markAsRead }) => {
    const {id, title, cover_img, author, released_date, readtime } = blog;
    return (
        <div className='mb-12'>
            <img className='w-[800px] rounded-lg' src={cover_img} alt="" />
            <div className='flex justify-between mt-5'>
                <div className=' flex'>
                    <img src={author.author_img} alt="" />
                    <div className='mt-2 ml-3'>
                        <h4 className='font-semibold'>{author.name}</h4>
                        <p className='text-sm text-[#11111199]'>{released_date}</p>
                    </div>
                </div>
                <div className='mt-6'>
                    <p className='text-[#11111199]'>{readtime} min read <BookCheck 
                    addToRead={addToRead}
                    blog={blog}
                    ></BookCheck></p>
                </div>
            </div>
            <h3 className='text-2xl font-bold mt-4'>{title}</h3>
            <div className='py-3'>
                <span className='text-[#11111199]  text-base mr-6'>#beginners</span>
                <span className='text-[#11111199]  text-base'>#programming</span>
            </div>
            <button onClick={() => markAsRead(id, readtime)} className='block mt-2 text-base font-semibold underline text-[#6047EC]'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addToRead: PropTypes.func,
    markAsRead: PropTypes.func
}
export default Blog;