import { Lia500Px } from "react-icons/lia";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news);
    
    return (
        <div>
              <h2 className="font-semibold mb-3">Dragon News Home</h2>
              <p className="text-gray-400 text-sm"></p>{news.length} News Found in This Category
              <div>
                    {
                        news.map(singLeNews=> <NewsCard key={singLeNews._id} news={singLeNews}></NewsCard>)
                    }
              </div>
        </div>
    );
};

export default CategoryNews;