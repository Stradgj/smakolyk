
import pinkCake1 from './pics/cake1.jpg'
import pinkCake2 from './pics/cake2.jpg'
import pinkCake3 from './pics/cake3.jpg'
import pinkCake4 from './pics/cake4.jpg'
import sampleCake1 from './pics/cake5.jpg'
import sampleCake2 from './pics/cake6.jpg'
import sampleCake3 from './pics/cake7.jpg'
import contactsCake from './pics/cake8.jpg'
import fruits from "./pics/fruits.jpg"
import chocolate from "./pics/chocolate.jpg"
import cream from "./pics/cream.jpg"
import nuts from "./pics/nuts.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

function Header(){
    return <header>
        <div className="header__container-large">
            <h1 className="header">Smakolyk 🎂</h1>
        </div>
    </header>
}

function Main(){
    return<>
    <Hero/>
    <Toppings/>
    <Samples/>
    <Testimonials/>
    <Cta/>
    </>
}
function Footer(){
    return <section className="footer">
        <h2>Слава україні 💙💛</h2>
    </section>
}

function Hero(){
    return <section className="hero__container-medium">
        <article className="hero-text-block">
            <h2 className="hero-title">Роблю торти на замовлення</h2>
            <p className="hero-text">
                🍰 Шалено смачні та неперевершено ніжні торти чекають на вас у нашій кондитерській! Насолоджуйтеся кожним
                кушем найвишуканіших смаків, які ми створюємо з любов'ю та професіоналізмом.</p>
            <p className='hero-text'> Наші торти - це справжня втілення унікальних рецептів та найвишуканіших
                інгредієнтів. Від класичних шедеврів до авторських створінь на замовлення - ми готові задовольнити смак
                кожного гурмана.</p>
        </article>
        <div className="hero-pictures-block">
            <div className="hero-picture">
                <img src={pinkCake1} alt="pretty pink cake"/>
            </div>
            <div className="hero-picture">
                <img src={pinkCake2} alt="pretty pink cake"/>
            </div>
            <div className="hero-picture">
                <img src={pinkCake3} alt="pretty pink cake"/>
            </div>
            <div className="hero-picture">
                <img src={pinkCake4} alt="pretty pink cake"/>
            </div>
        </div>
    </section>
}

function Toppings() {
    return <section className="toppings__container">
        <h1 className='toppings-header'>Toppings</h1>
        <ul className='toppings-block'>
            <Topping pic={nuts} topping="Горішки"/>
            <Topping pic={chocolate} topping="Шоколад"/>
            <Topping pic={cream} topping="Крем"/>
            <Topping pic={fruits} topping="Фрукти"/>
        </ul>
    </section>
}

function Samples() {
    return <section className="samples__container-medium">
        <h2 className="samples-title">My works</h2>
        <div className="samples-block">
            <Sample pic={sampleCake1} name ='Шоколадний торт'>Заворожуюча комбінація ніжності тіста та декадентського крему створює справжню симфонію смаку. Кожен шматочок - це подорож у світ неперевершеного задоволення. </Sample>
            <Sample pic={sampleCake2} name ='Голубий торт'>Заворожуюча комбінація ніжності тіста та декадентського крему створює справжню симфонію смаку. Кожен шматочок - це подорож у світ неперевершеного задоволення. </Sample>
            <Sample pic={sampleCake3} name ='Червоний торт'>Заворожуюча комбінація ніжності тіста та декадентського крему створює справжню симфонію смаку. Кожен шматочок - це подорож у світ неперевершеного задоволення. </Sample>
        </div>
    </section>
}

function Testimonials(props) {
    return <section className="testimonials__container-medium">
        <h1 className="testimonials-title">Testimonials</h1>
        <div className='testimonials-content'>
            <div className="testimonials-text-block"><p className="testimonials-text">Враження наших клієнтів - наше найцінніше нагородження! Дозвольте поділитися з вами витонченими враженнями від наших тортів:</p></div>
            <TestimonialSlider/>
        </div>

    </section>
}

function Cta() {
    return <section className="cta__container-medium">
        <div className="cta">
            <article className="cta-text-block">
                <h2 className="cta-title">Бажаете зробити замовлення?</h2>
                <p className="cta-text">Дзвоніть за номером <a className="cta-link"
                                                               href="tel:+380XXXXXXXXX">+380XXXXXXXXX</a></p>
                <p className="cta-text">Пишіть у соц мережі <a className="cta-link" href="https://t.me/Ник">Telegram</a> або <a
                    className="cta-link"  href="ссылка на инсту">Instagram</a></p>

            </article>
            <div className="cta-picture-block">
                <img className='cta-picture' src={contactsCake}/>
            </div>
        </div>
    </section>
}

function Topping(props){
    return <li className='topping'>
            <img src={props.pic} alt={props.topping}/>
            <div className="effect-to-top">
                <h3>{props.topping}</h3>
            </div>
        </li>
}

function Sample(props){
    return <article className="sample">
        <div className="sample-picture-block">
            <img src={props.pic} className="sample-picture"/>
        </div>
        <div className="sample-text-block">
            <h3 className='sample-name'>{props.name}</h3>
            <p className='sample-text'>{props.children}</p>
        </div>
    </article>
}

function Testimonial(props) {
    return <div className="testimonial">
        <div className="testimonial-title">{props.title}</div>
        <blockquote className="testimonial-text">{props.children}</blockquote>
        <address className="testimonial-author">{props.name}</address>
    </div>
}
function TestimonialSlider() {
    var settings = {
        className: "slider",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        fade: true,
        pauseOnFocus:true,
        pauseOnHover: true,
        centerPadding: "10px",
        arrows: false,
        dots: true,
        accessibility: false
    };
    return (
        <Slider {...settings}>
            <Testimonial title = "Дуже смачний торт!" name = "Олена, м. Київ">Цей торт - просто диво! Кожен шматочок - це справжній екстаз для смакових рецепторів. Ніжний бісквіт і неперевершений крем створюють гармонійний ансамбль смаку. Це було справжнє відкриття для наших гостей і мене особисто. Вражаюче смачно і естетично виглядає! Найкращий вибір для особливих моментів</Testimonial>
            <Testimonial title = "Цей торт - чиста магія!!" name = "Віталій, м. Львів">Спробувавши його, я відчував, як розквітають всі мої смакові рецептори. Вишуканий смак і чудовий дизайн роблять його ідеальним вибором для будь-якого свята.</Testimonial>
            <Testimonial title = "Не можу втриматися від висловлення вдячності за цей торт!" name = "Анастасія,  м. Дніпро">Він став справжньою зіркою на моєму дні народження. Легкий бісквіт і неперевершений крем - це те, що робить його неперевершеним.</Testimonial>
            <Testimonial title = "Найсмачніший торт у моєму житті!" name = " Дмитро, м. Харків">Подарував його своїй дівчині на річницю, і ми обидва були вражені його чарівністю. Справжній десертний шедевр!</Testimonial>
        </Slider>
    );
}
export default App;
