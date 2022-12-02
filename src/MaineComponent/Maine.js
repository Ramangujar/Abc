import Tools from "../ToolsComponent/Tools";
import About from "../AboutComponent/About";
import Login from "../LoginComponent/Login";

function Maine() {
  return (
    <div>
      <div
        className="container-xxl"
        style={{
          backgroundColor: "#e3f2fd",
          padding: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom:"30px"
          }}
        >
          Welcome to Software Company
        </h2>
        <img
          src="assets/images/banner.jpg"
          className="img-thumbnail"
          alt="..."
          
        ></img>
        <div>
          <p
            style={{
              marginTop: "30px",
              padding: "10px",
            }}
          >
            Software is a set of computer programs and associated documentation
            and data. This is in contrast to hardware, from which the system is
            built and which actually performs the work.Software is a set of
            computer programs and associated documentation and data. This is in
            contrast to hardware, from which the system is built and which
            actually performs the work.{" "}
          </p>

          <p
            style={{
              padding: "10px",
            }}
          >
            Software is a set of computer programs and associated documentation
            and data. This is in contrast to hardware, from which the system is
            built and which actually performs the work.Software is a set of
            computer programs and associated documentation and data. This is in
            contrast to hardware, from which the system is built and which
            actually performs the work.{" "}
          </p>
        </div>
        <Tools/>
        <About/>
        <Login/>
      </div>
    </div>
  );
}

export default Maine;
