
import AboutUs from './About/AboutUs';
import Banner from './Banner';
import MeetTeam from './MeetTeam/MeetTeam';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <MeetTeam></MeetTeam>
        </div>
    );
};

export default Home;