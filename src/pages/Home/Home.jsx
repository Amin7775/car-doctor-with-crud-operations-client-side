
import AboutUs from './About/AboutUs';
import Banner from './Banner';
import MeetTeam from './MeetTeam/MeetTeam';
import OurServices from './OurServices/OurServices';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <MeetTeam></MeetTeam>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;