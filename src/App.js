import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const shop = [
    {
      img: "https://www.topdom.ru/gallery/flats/81/3.jpg",
      title: "Комплексная отделка интерьеров ",
      text: "Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.",
    },
    {
      img: "https://www.peredelka.tv/upload/resize_cache/sprint.editor/9e4/1024_768_1/img-1639995830-8326-224-vbl01626-hdr-preview-2048.jpg",
      title: "Гардеробные",
      text: "Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.",
    },
    {
      img: "https://www.stilkuhni.ru/upload/iblock/442/%D0%9B%D0%95%D0%9E%D0%9D%D0%90%D0%A0%D0%94%D0%9E-5034-790%D1%85500%281%29.jpg",
      title: "Кухня ",
      text: "Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.",
    },
    {
      img: "https://www.antarescompany.ru/images/articles/august_2023/detskie_minimalizm.jpg",
      title: "Комплексная отделка интерьеров ",
      text: "Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.",
    },
    {
      img: "https://www.topdom.ru/gallery/flats/81/3.jpg",
      title: "Комплексная отделка интерьеров ",
      text: "Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.",
    },
    {
      img: "https://www.topdom.ru/gallery/flats/81/3.jpg",
      title: "Комплексная отделка интерьеров ",
      text: "Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.",
    },
  ];

  return (
    <div className="App">
      <Header />
      <h1 className="tovar">Товары</h1>
      <div className="itemBlock">
        {shop.map((el) => {
          return <Card mass={el} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
