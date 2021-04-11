/*  
💥 Title : Blog
📃 Description : This will contain the Blog News
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Row } from 'react-bootstrap';
import user1 from '../../../images/user1.png';
import user2 from '../../../images/user2.png';
import user3 from '../../../images/user3.png';
import '../../../styles/Blog.css';
import BlogCard from './BlogCard';

const blogPosts = [
    {
        name: 'Dr. Caudi',
        image: user3,
        date: '23 April 2010',
        title: '2 times of brush in a day can Keep you healthy',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste nisi eaque.',
    },
    {
        name: 'Dr. Caudi',
        image: user2,
        date: '23 April 2010',
        title: '2 times of brush in a day can Keep you healthy',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste nisi eaque.',
    },
    {
        name: 'Dr. Caudi',
        image: user1,
        date: '23 April 2010',
        title: '2 times of brush in a day can Keep you healthy',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste nisi eaque.',
    },
];

const Blog = () => (
    <>
        <div className="blog-wrapper  mt-7r">
            <div className="blogHeader">
                <h4>OUR BLOG</h4>
                <h1 style={{ fontSize: '3.6rem' }}> From Our Blog News</h1>
            </div>
        </div>
        <Row className="mt-5">
            {blogPosts.map((blog) => (
                <BlogCard data={blog} />
            ))}
        </Row>
    </>
);

export default Blog;
