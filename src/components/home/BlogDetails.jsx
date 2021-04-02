import TopArrow from '../../assets/images/top-arrow.png';

import styles from './blogDetails.module.css';
import './BlogDetails.css';

const BlogDetails = ({ blog }) => {

    const scrollToBlogsList = () => {
        window.locoScroll.scrollTo(document.getElementById('blogsList').offsetTop - 50, 0, 0);
    }

    const divide = blog.blog_content && blog.blog_content.length > 1000;

    return (
        <section className={styles.root} id="blogContainer">
            <div className="container">
                <button className="col-md-12 d-flex justify-content-center">
                    <img src={TopArrow} alt="Back to blogs" onClick={scrollToBlogsList} />
                </button>
                <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                    <img src={blog.blog_image} alt={blog.blog_title} className={styles.blogImage} />
                    <h2 className={styles.blogTitle}>
                        {blog.blog_title}
                    </h2>
                    <hr className={styles.line} />
                    <p textsize="large" className={styles.blogDate}>
                        {blog.blog_date}
                    </p>
                    <p textsize="large" className={divide ? styles.blogTextDivided : styles.blogText}>
                        {blog.blog_content}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;