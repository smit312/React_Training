import "./App.css";

function App() {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let date = d.getDate();
  let month = monthNames[d.getMonth()];
  let year = d.getFullYear();
  var dayName = days[d.getDay()];

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <div className="date">
            <h1 className="date-size">{date}</h1>
            <p className="month-size">{month}</p>
            <p className="left">{year}</p>
            <p className="dname">{dayName}</p>
          </div>

          <p className="forpadding1">
            {" "}
            Buy a new sweatshirt <i class="fas fa-bell"></i>
          </p>
          <p className="forpadding1">
            Begin promotional phase <i class="fas fa-bell"></i>
          </p>

          <div className="normallist">
            <p className="forpadding">Read an article</p>
            <p className="forpadding">Try not fall asleep</p>
            <p className="forpadding">Watch 'Sherlock'</p>
            <p className="forpadding">Begin QA for product</p>
            <p className="forpadding">Go for a walk</p>
          </div>
          <div className="plus">
            <p>+</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
