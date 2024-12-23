import React from "react";

const BestTeachers = () => {
  const teachers = [
    {
      name: "Kanan Amirov",
      description: "Expert in Web Development, 5-6 years of teaching and mentoring students.He explains topics with such detail that there are no questions left afterward. Despite being serious during classes, he always finds common ground with students, making the learning process comfortable and productive.",
      img: "https://avatars.githubusercontent.com/u/76852149?v=4",
      url: "https://github.com/KananAmir"
    },
    {
      name: "Sunal Jabili",
      description: "Expert in Web Development, 5-6 years of teaching and mentoring students.He explains assignments better than anyone else and ensures that everyone understands the topic. If someone struggles or doesn't understand something, he is always ready to help. Even with his seriousness in teaching, he manages to connect with students, creating a friendly atmosphere.",
      img: "https://avatars.githubusercontent.com/u/56360685?v=4",
       url: "https://github.com/SunalJabili"
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">My Best Teachers</h1>
      <h4 className="text-center mb-4">The best teachers of java script</h4>
      {teachers.map((teacher, index) => (
        <div
          className={`row align-items-center mb-5 ${
            index % 2 === 0 ? "" : "flex-row-reverse"
          }`}
          key={index}
        >
          <div className="col-md-6">
            <img
              src={teacher.img}
              alt={teacher.name}
              className="img-fluid rounded-circle shadow"
            />
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h3>{teacher.name}</h3>
            <p className="text-muted">{teacher.description}</p>
            <div>              
                <a
                href={teacher.url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub
              </a>             
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestTeachers;
