import ContactPage from "../../ContactPage/ContactPage";
import AskQuestion from "../AskQuestion/AskQuestion";
import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import DownloadApp from "../DownloadApp/DownloadApp";
import HappyCustomers from "../HappyCustomers/HappyCustomers";
import TopDoctors from "../TopDoctors/TopDoctors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopDoctors></TopDoctors>
            <Details></Details>
            <HappyCustomers></HappyCustomers>
            <AskQuestion></AskQuestion>
            <ContactPage></ContactPage>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;