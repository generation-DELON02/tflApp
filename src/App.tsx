// import { greet } from "./utils/greet";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import data from "./data.js"



function App(): JSX.Element {
  interface places {
    title: number;
    place: string;
    countryName: string;
    locationURL: string;
    location: string;
    mainImage: string;
    descrptImage: string;
    width: number;
    height: number;
    info: string;
  }

  return (
    <>
      <PageHeader />
        {data.map((obj) => (
          <div className="data" key={obj.title}>
            {obj.place}
            <br />
            {obj.countryName}
            <a href={obj.locationURL}>{obj.location}</a>
            <br />
            <img src= {obj.mainImage.image} alt={obj.mainImage.descrptImage} width={obj.mainImage.width}  height={obj.mainImage.height}/>
            <hr />
            <br />
            {obj.info}
          </div>
        ))}
      <PageFooter />
    </>
  );
}



export default App;
