import '../styles/background.css'
import Header from "./Header";
import PhoneNumber from './PhoneNumber';
import star from '../images/star.svg'
import heroImage from '../images/hero_image.png'

function Home() {
    return (
        <section className="background">
            <video className='background-video'  autoPlay muted loop>
                <source 
                    src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
                    type="video/mp4"
                />
            </video>
            <div className='overlay'>
                <Header />
                <div className='heading'>
                    <div className='heading-content'>
                        <strong>NX Wave.</strong> The next-gen credit card for those who love rewards
                        <div className='heading-sub-content'>
                            <p>1% Cashback5x <img src={star} /> RewardsZero <img src={star} /> Forex Markup</p>
                        </div>
                        <PhoneNumber />
                    </div>
                    <div className='heading-image'>
                        <img src={heroImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;