import logo from '../assets/GloboLogo.png';

const Banner = () => {
    return (
        <header className="banner">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>Providing houses all over the world</div>
        </header>
    );
};

export default Banner;
