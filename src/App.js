import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import FormTodo from "./components/Form/FormTodo";
import Header from "./components/Header/Header";

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
    img: "https://www.peredelka.tv/upload/resize_cache/sprint.editor/9e4/1024_768_1/img-1639995830-8326-224-vbl01626-hdr-preview-2048.jpg",
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

function App() {
  const [data, setData] = useState(shop);

  const addArray = (newObj) => {
    setData((prevObj) => {
      return [newObj, ...prevObj];
    });
  };

  return (
    <div className="App">
      <Header />
      <FormTodo pushMas={addArray} />
      <h1 className="tovar">Товары</h1>
      <div className="itemBlock">
        {data.map((el) => {
          return <Card mass={el} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
