import axios from 'axios';
import BlogDetails from "./BlogDetails"
import BlogsList from "./BlogsList"

/* import Blog1Image from '../../assets/images/blog1.svg';
import Blog2Image from '../../assets/images/blog2.svg';
import Blog3Image from '../../assets/images/blog3.svg'; */
import { useEffect, useState } from "react";

/* const blogsData = [
    {
        id: '1',
        blog_image: Blog1Image,
        blog_title: 'How to increase your chance of winning Lotto?',
        blog_date: '07 | 02 | 2021',
        blog_content: `The simple answer to this is to buy a ticket and hope for the best. The reality s that no matter what lottery you play, you must be lucky for your entry to win. The odds are literally stacked against you. \n
        However, you can substantially increase the value-for-money you receive when buying lottery tickets by tracking and analysing the value shifts in the lotteries. These value shifts can be subntial week-on-week because jackpots, game rules and bonus rounds change constantly. \n
        The value-for-money of a particular lottery largely depends on several interdependent factors which include but are not limited to the cost per game, odds to win the jackpot and other divisions, the jackpot and expected shares in the jackpot. Further, lottery companies are constantly changing the rules of the game (literally) so you need to factor this in too. \n
        The observed differences in value-for money across the lotteries can be strikingly vast and these values can change daily. For example, one lottery might have the best value for money one day (20x better than the worse) but the next day it is ranked last because another lottery introduces a special bonus game, or a jackpot is won. \n
        If you are a lotto player, being aware of the best value-for-money lotteries and choosing these top ranked lotteries means you receive better lottery bang for your buck. However, if done correctly, tracking the value of different lotteries is an extremely time consuming process and is not worth the effort. That is why Lotto Logic exists. Lotto Logic does all the hard work for you by ranking the best value-for money lotteries daily.
        `,
    },
    {
        id: '2',
        blog_image: Blog2Image,
        blog_title: 'How do i win the lotto?',
        blog_date: '07 | 02 | 2021',
        blog_content: `The simple answer to this is to buy a ticket and hope for the best. The reality s that no matter what lottery you play, you must be lucky for your entry to win. The odds are literally stacked against you. \n
        However, you can substantially increase the value-for-money you receive when buying lottery tickets by tracking and analysing the value shifts in the lotteries. These value shifts can be subntial week-on-week because jackpots, game rules and bonus rounds change constantly. \n
        The value-for-money of a particular lottery largely depends on several interdependent factors which include but are not limited to the cost per game, odds to win the jackpot and other divisions, the jackpot and expected shares in the jackpot. Further, lottery companies are constantly changing the rules of the game (literally) so you need to factor this in too. \n
        The observed differences in value-for money across the lotteries can be strikingly vast and these values can change daily. For example, one lottery might have the best value for money one day (20x better than the worse) but the next day it is ranked last because another lottery introduces a special bonus game, or a jackpot is won. \n
        If you are a lotto player, being aware of the best value-for-money lotteries and choosing these top ranked lotteries means you receive better lottery bang for your buck. However, if done correctly, tracking the value of different lotteries is an extremely time consuming process and is not worth the effort. That is why Lotto Logic exists. Lotto Logic does all the hard work for you by ranking the best value-for money lotteries daily.
        `,
    },
    {
        id: '3',
        blog_image: Blog3Image,
        blog_title: 'How do jackpots work?',
        blog_date: '07 | 02 | 2021',
        blog_content: `The simple answer to this is to buy a ticket and hope for the best. The reality s that no matter what lottery you play, you must be lucky for your entry to win. The odds are literally stacked against you. \n
        However, you can substantially increase the value-for-money you receive when buying lottery tickets by tracking and analysing the value shifts in the lotteries. These value shifts can be subntial week-on-week because jackpots, game rules and bonus rounds change constantly. \n
        The value-for-money of a particular lottery largely depends on several interdependent factors which include but are not limited to the cost per game, odds to win the jackpot and other divisions, the jackpot and expected shares in the jackpot. Further, lottery companies are constantly changing the rules of the game (literally) so you need to factor this in too. \n
        The observed differences in value-for money across the lotteries can be strikingly vast and these values can change daily. For example, one lottery might have the best value for money one day (20x better than the worse) but the next day it is ranked last because another lottery introduces a special bonus game, or a jackpot is won. \n
        If you are a lotto player, being aware of the best value-for-money lotteries and choosing these top ranked lotteries means you receive better lottery bang for your buck. However, if done correctly, tracking the value of different lotteries is an extremely time consuming process and is not worth the effort. That is why Lotto Logic exists. Lotto Logic does all the hard work for you by ranking the best value-for money lotteries daily.
        `,
    },
    {
        id: '4',
        blog_image: Blog1Image,
        blog_title: 'How to increase your chance of winning Lotto?',
        blog_date: '07 | 02 | 2021',
        blog_content: `The simple answer to this is to buy a ticket and hope for the best. The reality s that no matter what lottery you play, you must be lucky for your entry to win. The odds are literally stacked against you. \n
        However, you can substantially increase the value-for-money you receive when buying lottery tickets by tracking and analysing the value shifts in the lotteries. These value shifts can be subntial week-on-week because jackpots, game rules and bonus rounds change constantly. \n
        The value-for-money of a particular lottery largely depends on several interdependent factors which include but are not limited to the cost per game, odds to win the jackpot and other divisions, the jackpot and expected shares in the jackpot. Further, lottery companies are constantly changing the rules of the game (literally) so you need to factor this in too. \n
        The observed differences in value-for money across the lotteries can be strikingly vast and these values can change daily. For example, one lottery might have the best value for money one day (20x better than the worse) but the next day it is ranked last because another lottery introduces a special bonus game, or a jackpot is won. \n
        If you are a lotto player, being aware of the best value-for-money lotteries and choosing these top ranked lotteries means you receive better lottery bang for your buck. However, if done correctly, tracking the value of different lotteries is an extremely time consuming process and is not worth the effort. That is why Lotto Logic exists. Lotto Logic does all the hard work for you by ranking the best value-for money lotteries daily.
        `,
    },
    {
        id: '5',
        blog_image: Blog2Image,
        blog_title: 'How do i win the lotto?',blog_date: '07 | 02 | 2021',
        blog_content: `The simple answer to this is to buy a ticket and hope for the best. The reality s that no matter what lottery you play, you must be lucky for your entry to win. The odds are literally stacked against you. \n
        However, you can substantially increase the value-for-money you receive when buying lottery tickets by tracking and analysing the value shifts in the lotteries. These value shifts can be subntial week-on-week because jackpots, game rules and bonus rounds change constantly. \n
        The value-for-money of a particular lottery largely depends on several interdependent factors which include but are not limited to the cost per game, odds to win the jackpot and other divisions, the jackpot and expected shares in the jackpot. Further, lottery companies are constantly changing the rules of the game (literally) so you need to factor this in too. \n
        The observed differences in value-for money across the lotteries can be strikingly vast and these values can change daily. For example, one lottery might have the best value for money one day (20x better than the worse) but the next day it is ranked last because another lottery introduces a special bonus game, or a jackpot is won. \n
        If you are a lotto player, being aware of the best value-for-money lotteries and choosing these top ranked lotteries means you receive better lottery bang for your buck. However, if done correctly, tracking the value of different lotteries is an extremely time consuming process and is not worth the effort. That is why Lotto Logic exists. Lotto Logic does all the hard work for you by ranking the best value-for money lotteries daily.
        `,

    },
    {
        id: '6',
        blog_image: Blog3Image,
        blog_title: 'How do jackpots work?',
        blog_date: '07 | 02 | 2021',
        blog_content: `The simple answer to this is to buy a ticket and hope for the best. The reality s that no matter what lottery you play, you must be lucky for your entry to win. The odds are literally stacked against you. \n
        However, you can substantially increase the value-for-money you receive when buying lottery tickets by tracking and analysing the value shifts in the lotteries. These value shifts can be subntial week-on-week because jackpots, game rules and bonus rounds change constantly. \n
        The value-for-money of a particular lottery largely depends on several interdependent factors which include but are not limited to the cost per game, odds to win the jackpot and other divisions, the jackpot and expected shares in the jackpot. Further, lottery companies are constantly changing the rules of the game (literally) so you need to factor this in too. \n
        The observed differences in value-for money across the lotteries can be strikingly vast and these values can change daily. For example, one lottery might have the best value for money one day (20x better than the worse) but the next day it is ranked last because another lottery introduces a special bonus game, or a jackpot is won. \n
        If you are a lotto player, being aware of the best value-for-money lotteries and choosing these top ranked lotteries means you receive better lottery bang for your buck. However, if done correctly, tracking the value of different lotteries is an extremely time consuming process and is not worth the effort. That is why Lotto Logic exists. Lotto Logic does all the hard work for you by ranking the best value-for money lotteries daily.
        `,
    },
]; */

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await axios.get('https://api.lottologic.org/user/viewblog');
            const blogsTemp = response.data;

            if (blogsTemp) {
                setBlogs(blogsTemp);
                setSelectedBlog(blogsTemp[0]);
            }
        }
        fetchBlogs();
    }, []);
    
    return (
        <div id="blogsSection">
            {blogs && (
                <BlogsList blogs={blogs} setSelectedBlog={setSelectedBlog} />
            )}
            {selectedBlog && (
                <BlogDetails blog={selectedBlog} />
            )}
        </div>
    );
};

export default Blogs;