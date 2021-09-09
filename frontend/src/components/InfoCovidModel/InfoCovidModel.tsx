import React, { useState } from "react";
import { Modal, Button } from "antd";

export function InfoCovidModel() {
  const [infoCovid, setInfoCovid] = useState(false);
  const [Symptoms, setSymptoms] = useState(false);
  const [Risk, setRisk] = useState(false);
  const [Send, setSend] = useState(false);
  const [Protection, setProtection] = useState(false);
  const [Diagnostics, setDiagnostics] = useState(false);

  const showModalCovid = () => {
    setInfoCovid(true);
  };
  const handleOkCovid = () => {
    setInfoCovid(false);
  };
  const handleCancelCovid = () => {
    setInfoCovid(false);
  };

  const showModalSymptoms = () => {
    setSymptoms(true);
  };
  const handleOkSymptoms = () => {
    setSymptoms(false);
  };
  const handleCancelSymptoms = () => {
    setSymptoms(false);
  };

  const showModalRisk = () => {
    setRisk(true);
  };
  const handleOkRisk = () => {
    setRisk(false);
  };
  const handleCancelRisk = () => {
    setRisk(false);
  };

  const showModalSend = () => {
    setSend(true);
  };
  const handleOkSend = () => {
    setSend(false);
  };
  const handleCancelSend = () => {
    setSend(false);
  };

  const showModalProtection = () => {
    setProtection(true);
  };
  const handleOkProtection = () => {
    setProtection(false);
  };
  const handleCanceProtection = () => {
    setProtection(false);
  };

  const showModalDiagnostics = () => {
    setDiagnostics(true);
  };
  const handleOkDiagnostics = () => {
    setDiagnostics(false);
  };
  const handleCanceDiagnostics = () => {
    setDiagnostics(false);
  };
  return (
    <div>
      <div>Профилактика</div>
      <>
        <Button type="primary" onClick={showModalCovid}>
          Что следует знать о короновирусе
        </Button>
        <Modal
          title="Что следует знать о короновирусе"
          visible={infoCovid}
          onOk={handleOkCovid}
          onCancel={handleCancelCovid}
        >
          <div>
            <h3>Что такое коронавирусы?</h3>
            <p>
              Коронавирусы — это семейство вирусов, которые преимущественно
              поражают животных, но в некоторых случаях могут передаваться
              человеку. Это давно известная и изученная группа вирусов, однако,
              как и многие другие, эти вирусы достаточно быстро мутируют,
              изменяя некоторые свойства.
            </p>
            <p>
              Обычно заболевания, вызванные коронавирусами, протекают как
              привычные ОРВИ в лёгкой форме, не вызывая тяжёлой симптоматики.
              Однако бывают и тяжёлые формы, такие как ближневосточный
              респираторный синдром (Mers) и тяжёлый острый респираторный
              синдром (Sars).
            </p>
          </div>
        </Modal>
      </>

      <>
        <Button type="primary" onClick={showModalSymptoms}>
          Симптомы заболевания
        </Button>
        <Modal
          title="Симптомы заболевания"
          visible={Symptoms}
          onOk={handleOkSymptoms}
          onCancel={handleCancelSymptoms}
        >
          <div>
            <h3>Симптомы</h3>
            <ul>
              <li>Чувство усталости, разбитости, ломоты;</li>
              <li>Затруднённое дыхание;</li>
              <li>Высокая температура;</li>
              <li>Сухой кашель, боль в горле.</li>
            </ul>
            <div>
              <h3>
                Симптомы неспецифичны, то есть схожи со многими респираторными
                заболеваниями, часто имитируют обычную простуду или грипп.
              </h3>
            </div>
          </div>
        </Modal>
      </>

      <>
        <Button type="primary" onClick={showModalRisk}>
          Группа риска
        </Button>
        <Modal
          title="Группа риска"
          visible={Risk}
          onOk={handleOkRisk}
          onCancel={handleCancelRisk}
        >
          <div>
            <h3>Кто в группе риска?</h3>
            <div>
              Заразиться вирусом может каждый, в том числе и ребенок. В
              заявлении комиссии по здравоохранению Ухани говорится, что возраст
              60 самых последних случаев составляет от 15 до 88 лет. Как и в
              случае большинства других вирусных респираторных заболеваний, в
              зоне риска по развитию осложнений оказываются дети до 3 лет,
              взрослые старше 60 лет, люди с ослабленным иммунитетом, страдающие
              от хронической обструктивной болезни легких.
            </div>
          </div>
        </Modal>
      </>

      <>
        <Button type="primary" onClick={showModalSend}>
          Способы передачи короновируса
        </Button>
        <Modal
          title="Способы передачи короновируса"
          visible={Send}
          onOk={handleOkSend}
          onCancel={handleCancelSend}
        >
          <div>
            <h3>Как передаётся коронавирус?</h3>
            <div>
              Как и другие респираторные вирусы, коронавирус распространяется
              двумя путями:
            </div>
            <ul>
              <li>
                воздушно-капельным – когда на слизистую здорового человека
                попадают капли от чихания и кашля заболевшего
              </li>
              <li>
                контактным – через рукопожатие, прикосновение к дверной ручке
                или любой другой загрязненной поверхности.
              </li>
            </ul>
            <div>
              Люди заражаются, когда касаются загрязнёнными руками рта, носа или
              глаз.
            </div>
            <div>
              Изначально, текущая вспышка коронавируса произошла от животных,
              предположительно, источником стал рынок морепродуктов в Ухани, где
              шла активная торговля не только рыбой, но и такими животными, как
              сурки, змеи и летучие мыши.
            </div>
          </div>
        </Modal>
      </>

      <>
        <Button type="primary" onClick={showModalProtection}>
          Как защитить себя от заражения коронавирусом?
        </Button>
        <Modal
          title="Как защитить себя от заражения коронавирусом?"
          visible={Protection}
          onOk={handleOkProtection}
          onCancel={handleCanceProtection}
        >
          <div>
            <h2>Как защитить себя от заражения коронавирусом?</h2>
            <ul>
              <li>
                <h3>Самое главное: поддерживайте чистоту рук и поверхностей</h3>
              </li>
              <li>
                <h3>Избегайте контактов с возможным источником заражения</h3>
              </li>
              <li>
                <h3>
                  Носите с собой одноразовые салфетки и всегда прикрывайте нос и
                  рот, когда кашляете или чихаете. Обязательно утилизируйте их
                  после использования.
                </h3>
              </li>
              <li>
                <h3>
                  Ношение одноразовой маски не защитит вас от заражения, но
                  может предотвратить заражение вами других, если вы уже
                  являетесь носителем вируса.
                </h3>
              </li>
            </ul>
          </div>
        </Modal>
      </>

      <>
        <Button type="primary" onClick={showModalDiagnostics}>
          Как защитить себя от заражения коронавирусом?
        </Button>
        <Modal
          title="Как проводится диагностика коронавируса?"
          visible={Diagnostics}
          onOk={handleOkDiagnostics}
          onCancel={handleCanceDiagnostics}
        >
          <div>
            <div>
              Научными организациями Роспотребнадзора менее чем за 7 дней с
              момента появления информации о структуре генов нового коронавируса
              разработаны два варианта диагностических наборов для определения
              присутствия вируса в организме человека. Наборы основаны на
              молекулярно-генетическом методе исследования, так называемой
              полимеразной цепной реакции (ПЦР).
            </div>
            <ul>
              <div>
                Использование этого метода дает тест-системам значительные
                преимущества:
              </div>
              <li>
                Высокая чувствительность: с использованием разработанных
                тест-систем возможно обнаруживать единичные копии вирусов
              </li>
              <li>
                Удобный метод сбора материала: для диагностирования заболевания
                нет необходимости отбирать кровь, достаточно отобрать ватным
                тампоном образец из носоглотки
              </li>
              <li>
                Оперативность: результат анализа можно получить уже через 2-4
                часа
              </li>
            </ul>
          </div>
        </Modal>
      </>
    </div>
  );
}