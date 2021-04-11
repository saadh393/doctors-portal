/*  
💥 Title : BlogCard
📃 Description : BLog Card
✍ Author : Saad Hasan
⌚ Date : 11/ April/ 2021 
*/

/*  🔥 React Dependencies 🔥 */
import { Card, Col } from 'react-bootstrap';
import '../../../styles/Blog.css';

const BlogCard = ({ data }) => {
    const { name, date, image, title, des } = data;
    return (
        <>
            <Col>
                <Card className="authorCard">
                    <div className="author-info">
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <small>{date}</small>
                        </div>
                    </div>
                    <div className="mt-4 author-content">
                        <h3>{title}</h3>
                        <p className="mt-4">{des}</p>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default BlogCard;
