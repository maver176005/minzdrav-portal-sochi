import React, { useState } from "react";
import css from "./volunteer.module.css";
import { Modal, Button } from "antd";

export default function Volunteer() {
  const [social, setSocial] = useState(false);
  const [event, setEvent] = useState(false);
  const [patriot, setPatriot] = useState(false);
  const [ecological, setEcological] = useState(false);

  const showModalSocial = () => {
    setSocial(true);
  };
  const handleOkSocial = () => {
    setSocial(false);
  };
  const handleCancelSocial = () => {
    setSocial(false);
  };

  const showModalEvent = () => {
    setEvent(true);
  };
  const handleOkEvent = () => {
    setEvent(false);
  };
  const handleCancelEvent = () => {
    setEvent(false);
  };

  const showModalPatriot = () => {
    setPatriot(true);
  };
  const handleOkPatriot = () => {
    setPatriot(false);
  };
  const handleCancelPatriot = () => {
    setPatriot(false);
  };

  const showModalEcological = () => {
    setEcological(true);
  };
  const handleOkEcological = () => {
    setEcological(false);
  };
  const handleCancelEcological = () => {
    setEcological(false);
  };
  return (
    <div>
      <div className={css.main}>
        <div>
          <img src={"/img/vol.jpg"} alt="vol.jpg" />
          <h1 className={css.text_h1}>1.Кто может стать волонтером?</h1>
          <p className={css.text}>
            Волонтером может стать любой желающий. Для несовершеннолетних
            необходимо разрешение от родителей, а для ребят в возрасте до 14 лет
            — сопровождение официальных представителей.
          </p>
        </div>
        <div>
          <h1 className={css.text_h1}>2.Где узнать о волонтерских проектах?</h1>
          <p className={css.text}>
            Для того чтобы вступить в ряды добровольческого движения города Сочи
            вам необходимо: Позвонить по телефону 8-988-188-11-99 (Центр
            развития волонетерства города Сочи) и записаться на одну из встреч,
            которые проводятся для вновь вступивших волонтеров. Обычно они
            проходят по вторникам и четвергам. В рамках этой встречи вы
            заполните анкету, вам расскажут о направлениях волонтерского
            движения, предстоящих мероприятиях и ответят на интересующие вас
            вопросы.
          </p>
          <p className={css.text}>
            Либо Вы можете написать нам на электронную почту ump-sochi@bk.ru с
            пометкой «Хочу быть волонтером» ваши Ф.И.О и контактные данные и
            наши специалисты с вами свяжутся.
          </p>{" "}
          <p className={css.text}>
            Либо Вы можете заполнить онлайн googlе-форму
            https://forms.gle/qGzeyesktJe9RRgM8 , после чего наш специалист
            свяжется с Вами.
          </p>
        </div>

        <div className={css.direction_main}>
          <h1 className={css.text_h1}>3.Направления деятельности</h1>
          <div className={css.direction}>
            <div>
              {" "}
              <>
                <Button type="primary" onClick={showModalSocial}>
                  Социальное волонтерство
                </Button>
                <Modal
                  title="Социальное волонтерство"
                  visible={social}
                  onOk={handleOkSocial}
                  onCancel={handleCancelSocial}
                >
                  <div>
                    <h3>Социальное волонтерство</h3>
                    <p>
                      Социальное волонтерство – волонтерская (добровольческая)
                      деятельность, направленная на оказание помощи, прежде
                      всего, незащищенным слоям населения (помощь детям-сиротам,
                      деткам, имеющим различные заболевания, многодетным семьям,
                      инвалидам, пожилым одиноким людям и т.д.). Центр развития
                      волонтерства города Сочи ежегодно реализует совместные
                      партнерские проекты: Участие в благотворительных акциях
                      НКО «Радуга Сочи», работа с детками с расстройством
                      аутического спектра; организация благотворительных
                      ярмарок; участие в ежегодной краевая благотворительная
                      акция «Елка желаний»; участие в ежегодной
                      благотворительной акции «Я с тобой», направленной на
                      помощь детям, имеющим онкологические заболевания; Участие
                      в различных донорских акциях; оказание помощи после ЧС на
                      территории Краснодарского края; сюда же мы относим
                      направление забота о животных.
                    </p>
                  </div>
                </Modal>
              </>
            </div>
            <div>
              <>
                <Button type="primary" onClick={showModalEvent}>
                  Событийное волонтерство
                </Button>
                <Modal
                  title="Событийное волонтерство"
                  visible={event}
                  onOk={handleOkEvent}
                  onCancel={handleCancelEvent}
                >
                  <div>
                    <h3>Событийное волонтерство</h3>
                    <p>
                      Центром развития волонтерства города Сочи при участии
                      городских добровольцев реализуются волонтерские программы
                      более чем 100 событийных мероприятий в год, многие из
                      которых стали уже визитной карточкой волонтерской
                      деятельности в городе Сочи. А так на постоянной основе
                      добровольцы принимают участие в таких мероприятиях как:
                      Гран-при России российского этапа чемпионата мира FIA
                      «Формула 1», Кубках мира по горнолыжному спорту,
                      Чемпионате мира по санному спорту, и иным зимним видам
                      спорта, проходящим в горном кластере, полумарафоны и
                      марафоны, чемпионаты мира по боевым искусствам, матчи
                      Российской футбольной Премьер-лиги, крупные культурные
                      события и фестивали (Кинотавр, Новая волна), а также
                      форумы и конференции Основные задачи волонтерской
                      программы событийного мероприятия: помощь организаторам
                      проекта в подготовке и обеспечении мероприятия; работа со
                      зрительской аудиторией; работа с участниками мероприятия
                      (сопровождение, лингвистическая поддержка), взаимодействие
                      с представителями СМИ и пр.
                    </p>
                  </div>
                </Modal>
              </>
            </div>
            <div>
              {" "}
              <>
                <Button type="primary" onClick={showModalPatriot}>
                  Патриотическое волонтерство
                </Button>
                <Modal
                  title="Патриотическое волонтерство"
                  visible={patriot}
                  onOk={handleOkPatriot}
                  onCancel={handleCancelPatriot}
                >
                  <div>
                    <h3 className={css.text_h1}>Патриотическое волонтерство</h3>
                    <p>
                      В рамках патриотического направления городскими
                      добровольцами ведется, системна работа по данному
                      направлению. Городские волонтеры принимают участие и
                      оказывают содействие при проведении таких ежегодных
                      мероприятий, как «Свеча памяти», «День памяти и скорби»,
                      торжественные митинги, ежегодно участвуют в реализации
                      Всероссийской акции «Георгиевская ленточка». В городе Сочи
                      существует отделение всероссийской общественная
                      организация «Волонтёры Победы», занимающейся
                      патриотическим направлением, которое с радостью примет в
                      состав новых добровольцев.
                    </p>
                  </div>
                </Modal>
              </>
            </div>
            <div>
              <>
                <Button type="primary" onClick={showModalEcological}>
                  Экологическое волонтерство
                </Button>
                <Modal
                  title="Экологическое волонтерство"
                  visible={ecological}
                  onOk={handleOkEcological}
                  onCancel={handleCancelEcological}
                >
                  <div>
                    <h3>Экологическое волонтерство</h3>
                    <p>
                      Городские волонтеры оказывают огромную поддержку своему
                      родному городу, участвуя в общегородских субботниках и
                      экологических акциях. Неоднократно проводятся волонтерские
                      мероприятия по очистки городских пляжей и русел рек на
                      территории города Сочи. Также проводятся мероприятия,
                      направленные на повышение экологической культуры и
                      мотивация участия населения Краснодарского Края в
                      раздельном сборе твердых коммунальных отходов и
                      потребления биоразлагаемой тары и упаковки. Волонтерами
                      блока «Серебряный возраст» на постоянной основе
                      оказывается поддержка по уборке территорий исторически и
                      значимых объектов (музей «Дача Барсовой», сад-музей
                      «Дерево Дружбы», уголок фито-фантазии «Уголок Венчагова»).
                    </p>
                  </div>
                </Modal>
              </>
            </div>
          </div>
        </div>

        <div>
          <h1 className={css.text_h1}>Как получить личную книжку волонтёра?</h1>
          <img src={"/img/main_book.jpg"} alt="main_book.jpg" />
          <p className={css.text}>
            Центром развития волонтерства города Сочи успешно реализуется проект
            «Волонтерская книжка». Волонтерская книжка – главный документ
            российского добровольца. В ней организаторами мероприятий
            фиксируются сведения об участии волонтёра в мероприятиях и
            добровольческих проектах, количестве часов работы, поощрениях, а
            также дополнительной подготовке.
          </p>
          <h3>Для получения волонтерской книжки необходимо:</h3>
          <p className={css.text}>
            - Зарегистрироваться на сайте https://dobro.ru/ (получить
            персональный ID номер) и присоединиться к нашей организации
            (управление молодежной политики администрации города Сочи) - кнопка
            «готов помогать». Ссылка на организацию -
            https://dobro.ru/organizations/193575/info
          </p>
          <p className={css.text}>
            - Заполнить заявление о выдаче книжки и согласие на обработку
            персональных данных. (Заполняется при подачи документов в Центре
            развития волонтерства города Сочи).
          </p>
          <p className={css.text}>- Цветное фото 3х4 – 1 шт.</p>
        </div>
        <div>
          <h1 className={css.text_h1}>
            Контакты центра развития волонтерства города Сочи:
          </h1>
          <p className={css.text}>Адрес: город Сочи ул. Первомайская 26/1</p>
          <p className={css.text}>Телефон: 8-988-188-11-99</p>
          <p className={css.text}>e-mail: ump-sochi@bk.ru</p>
          <p className={css.text}>
            Официальная группа вконтакте: https://vk.com/sochi_volunteer
          </p>
          <p className={css.text}>
            Официальная страница в Инстаграмме:
            https://www.instagram.com/volunteer__sochi/
          </p>
          <p className={css.text}>
            Страница организации на dobro.ru -
            https://dobro.ru/organizations/193575/info
          </p>
        </div>
        <div>
          <iframe
            width="660"
            height="415"
            src="https://www.youtube.com/embed/BEdxJO_tSZM"
            title="Volonteer"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
