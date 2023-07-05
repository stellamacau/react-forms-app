import { Form } from "react-router-dom";
import { useLoaderData, Link, NavLink } from "react-router-dom";

const NewsListPage = () => {
  const { data } = useLoaderData();
  return (
    <ul className="list-disc ml-12 flex flex-col gap-y-1 text-xl">
      {data.map((news) => {
        return (
          <li key={news.id}>
            <Link to={`/news/${news.id}`} className="text-blue-500">
              {news.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsListPage;
