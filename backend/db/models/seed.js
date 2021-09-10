const { connect, connection } = require("mongoose");
const Doctor = require("./doctorModel");
require("dotenv").config();

async function seed() {
  connect(
    "mongodb+srv://User1:fktrctq95@cluster0.tnp6y.mongodb.net/medPortal",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  const doctorDB = [
    {
      name: "Калинов Александр Васильевич",
      specialization: "Терапевт",
      work: ['СР - СБ: 16.00 - 20.00'],
      raiting: 4.6,
      reviews: ["быстро принимает", "настоящий профи медицины"],
    },
    {
      name: "Денисова Марина Дмитриевна",
      specialization: "Терапевт",
      work: ['ПН - СР: 09.00 - 16.00'],
      raiting: 4.8,
      reviews: ["отличный врач"],
    },
    {
      name: "Калинов Александр Васильевич",
      specialization: "Ортопед",
      work: ['ПН - ПТ: 14.00 - 18.00', 'СБ: 10.00 - 15.00'],
      raiting: 4.1,
      reviews: ["принимает долго"],
    },
    {
      name: "Миронова Снеженна Денисовна",
      specialization: "Хирург",
      work: 'ПН - ПТ: 10.00 - 14.00',
      raiting: 3.2,
      reviews: ["справку в санаторий не дает"],
    },
  ];

  await Doctor.insertMany(doctorDB);
  console.log("done seed");
  await connection.close();
}

seed();
