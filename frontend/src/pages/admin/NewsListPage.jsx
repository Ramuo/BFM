import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import AdminContainer from '../../components/AdminContainer';
import Sidebar from '../../components/header/Sidebar';
import AdminHeader from '../../components/header/AdminHeader';
import Pagination from "../../components/Pagination";
import NewsTable from "../../components/NewsTable";
import {toast} from "react-toastify";
import axios from "axios";



function NewsListPage() {

    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const itemsPerPage = 5;

    useEffect(() => {
    fetchNewsData();
    }, [currentPage]);


    const fetchNewsData = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/news/newsList", {
        params: { page: currentPage + 1, pageSize: itemsPerPage },
        });
        setNewsData(response.data.news);
        console.log(response.data.news);
        setTotalPages(response.data.totalPages);
    } catch (error) {
        console.error("Error fetching news data:", error);
    }
    };

    const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    };

    return (
        <AdminContainer >
            <AdminHeader/>
            <main className="flex">
                <Sidebar/>
                <div className="mt-28 pl-32 pr-16">
                    <div className="App mt-12 mx-4">
                        <h1 className="text-3xl font-bold mb-4">BFM Info</h1>
                        <NewsTable
                        data={newsData}
                        onPageChange={handlePageChange}
                        setData={setNewsData}
                        />
                        <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
                    </div>

                </div>
            </main>
            
        </AdminContainer>
    )
}

export default NewsListPage
