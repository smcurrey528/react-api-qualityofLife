import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.jsx";
// import Categories from './Components/Categories.jsx';
import CityImage from './Components/CityImage'

class App extends Component {
 constructor(props) {
  super(props)
  this.state = {
    summary: '',
    score: '',
    value: '',
    categories: [],
    location: '',
    init: true,



  }
 }

 getData() {
    let url =`https://api.teleport.org/api/urban_areas/slug:${this.state.value}/scores/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        console.log('this is from getData', data.categories)
        this.setState(prevState => ({
          summary: data.summary,
          scoreTotal: Math.floor(data.teleport_city_score),
          name: data.categories.name,
          score: data.categories.score_out_of_10,
          value: '',


        }),

        )
      })
    }

 getAPI() {
    let url =`https://api.teleport.org/api/urban_areas/slug:${this.state.value}/images/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        console.log('this is from CityImage', data)
         this.setState(prevState => ({
        image: data.photos[0].image.web,

        }),

        )
       })
    }

  onInput(e) {
    this.setState({
      value: e.target.value
    })
  }

    onEnter(e) {
      e.preventDefault()
      this.getData()
      this.getAPI()
    }


  render() {

    let description = this.state.summary;
    let cityName = this.state.value;

    return (
      <div className="App">
      <header>
      <Nav/>
       <img src="https://i.imgur.com/yxCvhFE.png" alt='background sunset'/>

      </header>

        <section>
       <h1> Pick A City </h1>
        </section>
      <form>
            <input
            value={this.state.value}
            onChange={(e) => this.onInput(e)}
            placeholder="Enter city name here..."
            />
         <button
            onClick={(e) => this.onEnter(e)}> SUMBIT
          </button>
     </form>

 <form>
     <select onChange={(e) => this.onInput(e)}
            onClick={(e) => this.onEnter(e)}>
  <option   value="aarhus">Aarhus</option><option value="adelaide">Adelaide</option><option value="albuquerque">Albuquerque</option><option value="almaty">Almaty</option><option value="amsterdam">Amsterdam</option><option value="anchorage">Anchorage</option><option value="andorra">Andorra</option><option value="ankara">Ankara</option><option value="asheville">Asheville</option><option value="asuncion">Asuncion</option><option value="athens">Athens</option><option value="atlanta">Atlanta</option><option value="auckland">Auckland</option><option value="austin">Austin</option><option value="baku">Baku</option><option value="bali">Bali</option><option value="baltimore">Baltimore</option><option value="bangkok">Bangkok</option><option value="barcelona">Barcelona</option><option value="beijing">Beijing</option><option value="beirut">Beirut</option><option value="belfast">Belfast</option><option value="belgrade">Belgrade</option><option value="belize-city">Belize City</option><option value="bengaluru">Bengaluru</option><option value="bergen">Bergen</option><option value="berlin">Berlin</option><option value="bern">Bern</option><option value="bilbao">Bilbao</option><option value="birmingham">Birmingham</option><option value="birmingham-al">Birmingham, AL</option><option value="bogota">Bogota</option><option value="boise">Boise</option><option value="bologna">Bologna</option><option value="bordeaux">Bordeaux</option><option value="boston">Boston</option><option value="boulder">Boulder</option><option value="bozeman">Bozeman</option><option value="bratislava">Bratislava</option><option value="brighton">Brighton</option><option value="brisbane">Brisbane</option><option value="bristol">Bristol</option><option value="brno">Brno</option><option value="brussels">Brussels</option><option value="bucharest">Bucharest</option><option value="budapest">Budapest</option><option value="buenos-aires">Buenos Aires</option><option value="buffalo">Buffalo</option><option value="cairo">Cairo</option><option value="calgary">Calgary</option><option value="cambridge">Cambridge</option><option value="cape-town">Cape Town</option><option value="caracas">Caracas</option><option value="cardiff">Cardiff</option><option value="casablanca">Casablanca</option><option value="charleston">Charleston</option><option value="charlotte">Charlotte</option><option value="chattanooga">Chattanooga</option><option value="chennai">Chennai</option><option value="chiang-mai">Chiang Mai</option><option value="chicago">Chicago</option><option value="chisinau">Chisinau</option><option value="christchurch">Christchurch</option><option value="cincinnati">Cincinnati</option><option value="cleveland">Cleveland</option><option value="cluj-napoca">Cluj-Napoca</option><option value="cologne">Cologne</option><option value="colorado-springs">Colorado Springs</option><option value="columbus">Columbus</option><option value="copenhagen">Copenhagen</option><option value="cork">Cork</option><option value="curitiba">Curitiba</option><option value="dallas">Dallas</option><option value="dar-es-salaam">Dar es Salaam</option><option value="delhi">Delhi</option><option value="denver">Denver</option><option value="des-moines">Des Moines</option><option value="detroit">Detroit</option><option value="doha">Doha</option><option value="dresden">Dresden</option><option value="dubai">Dubai</option><option value="dublin">Dublin</option><option value="dusseldorf">Dusseldorf</option><option value="edinburgh">Edinburgh</option><option value="edmonton">Edmonton</option><option value="eindhoven">Eindhoven</option><option value="eugene">Eugene</option><option value="florence">Florence</option><option value="florianopolis">Florianopolis</option><option value="fort-collins">Fort Collins</option><option value="frankfurt">Frankfurt</option><option value="fukuoka">Fukuoka</option><option value="gaillimh">Galway</option><option value="gdansk">Gdansk</option><option value="geneva">Geneva</option><option value="gibraltar">Gibraltar</option><option value="glasgow">Glasgow</option><option value="gothenburg">Gothenburg</option><option value="grenoble">Grenoble</option><option value="guadalajara">Guadalajara</option><option value="guatemala-city">Guatemala City</option><option value="halifax">Halifax</option><option value="hamburg">Hamburg</option><option value="hannover">Hannover</option><option value="havana">Havana</option><option value="helsinki">Helsinki</option><option value="ho-chi-minh-city">Ho Chi Minh City</option><option value="hong-kong">Hong Kong</option><option value="honolulu">Honolulu</option><option value="houston">Houston</option><option value="hyderabad">Hyderabad</option><option value="indianapolis">Indianapolis</option><option value="innsbruck">Innsbruck</option><option value="istanbul">Istanbul</option><option value="jacksonville">Jacksonville</option><option value="jakarta">Jakarta</option><option value="johannesburg">Johannesburg</option><option value="kansas-city">Kansas City</option><option value="karlsruhe">Karlsruhe</option><option value="kathmandu">Kathmandu</option><option value="kiev">Kiev</option><option value="kingston">Kingston</option><option value="knoxville">Knoxville</option><option value="krakow">Krakow</option><option value="kuala-lumpur">Kuala Lumpur</option><option value="kyoto">Kyoto</option><option value="lagos">Lagos</option><option value="la-paz">La Paz</option><option value="las-palmas-de-gran-canaria">Las Palmas de Gran Canaria</option><option value="las-vegas">Las Vegas</option><option value="lausanne">Lausanne</option><option value="leeds">Leeds</option><option value="leipzig">Leipzig</option><option value="lille">Lille</option><option value="lima">Lima</option><option value="lisbon">Lisbon</option><option value="liverpool">Liverpool</option><option value="ljubljana">Ljubljana</option><option value="london">London</option><option value="los-angeles">Los Angeles</option><option value="louisville">Louisville</option><option value="luxembourg">Luxembourg</option><option value="lviv">Lviv</option><option value="lyon">Lyon</option><option value="madison">Madison</option><option value="madrid">Madrid</option><option value="malaga">Malaga</option><option value="malmo">Malmo</option><option value="managua">Managua</option><option value="manchester">Manchester</option><option value="manila">Manila</option><option value="marseille">Marseille</option><option value="medellin">Medellin</option><option value="melbourne">Melbourne</option><option value="memphis">Memphis</option><option value="mexico-city">Mexico City</option><option value="miami">Miami</option><option value="milan">Milan</option><option value="milwaukee">Milwaukee</option><option value="minneapolis-saint-paul">Minneapolis-Saint Paul</option><option value="minsk">Minsk</option><option value="montevideo">Montevideo</option><option value="montreal">Montreal</option><option value="moscow">Moscow</option><option value="mumbai">Mumbai</option><option value="munich">Munich</option><option value="nairobi">Nairobi</option><option value="nantes">Nantes</option><option value="naples">Naples</option><option value="nashville">Nashville</option><option value="new-orleans">New Orleans</option><option value="new-york">New York</option><option value="nice">Nice</option><option value="nicosia">Nicosia</option><option value="oklahoma-city">Oklahoma City</option><option value="omaha">Omaha</option><option value="orlando">Orlando</option><option value="osaka">Osaka</option><option value="oslo">Oslo</option><option value="ottawa">Ottawa</option><option value="oulu">Oulu</option><option value="oxford">Oxford</option><option value="palo-alto">Palo Alto</option><option value="panama">Panama</option><option value="paris">Paris</option><option value="perth">Perth</option><option value="philadelphia">Philadelphia</option><option value="phnom-penh">Phnom Penh</option><option value="phoenix">Phoenix</option><option value="phuket">Phuket</option><option value="pittsburgh">Pittsburgh</option><option value="portland-me">Portland, ME</option><option value="portland-or">Portland, OR</option><option value="porto">Porto</option><option value="porto-alegre">Porto Alegre</option><option value="prague">Prague</option><option value="providence">Providence</option><option value="quebec">Quebec</option><option value="quito">Quito</option><option value="raleigh">Raleigh</option><option value="reykjavik">Reykjavik</option><option value="richmond">Richmond</option><option value="riga">Riga</option><option value="rio-de-janeiro">Rio De Janeiro</option><option value="riyadh">Riyadh</option><option value="rochester">Rochester</option><option value="rome">Rome</option><option value="rotterdam">Rotterdam</option><option value="saint-petersburg">Saint Petersburg</option><option value="salt-lake-city">Salt Lake City</option><option value="san-antonio">San Antonio</option><option value="san-diego">San Diego</option><option value="san-francisco-bay-area">San Francisco Bay Area</option><option value="san-jose">San Jose</option><option value="san-juan">San Juan</option><option value="san-luis-obispo">San Luis Obispo</option><option value="san-salvador">San Salvador</option><option value="santiago">Santiago</option><option value="santo-domingo">Santo Domingo</option><option value="sao-paulo">Sao Paulo</option><option value="sarajevo">Sarajevo</option><option value="saskatoon">Saskatoon</option><option value="seattle">Seattle</option><option value="seoul">Seoul</option><option value="seville">Seville</option><option value="shanghai">Shanghai</option><option value="singapore">Singapore</option><option value="skopje">Skopje</option><option value="sofia">Sofia</option><option value="st-louis">St. Louis</option><option value="stockholm">Stockholm</option><option value="stuttgart">Stuttgart</option><option value="sydney">Sydney</option><option value="taipei">Taipei</option><option value="tallinn">Tallinn</option><option value="tampa-bay-area">Tampa Bay Area</option><option value="tampere">Tampere</option><option value="tartu">Tartu</option><option value="tashkent">Tashkent</option><option value="tbilisi">Tbilisi</option><option value="tehran">Tehran</option><option value="tel-aviv">Tel Aviv</option><option value="the-hague">The Hague</option><option value="thessaloniki">Thessaloniki</option><option value="tokyo">Tokyo</option><option value="toronto">Toronto</option><option value="toulouse">Toulouse</option><option value="tunis">Tunis</option><option value="turin">Turin</option><option value="turku">Turku</option><option value="uppsala">Uppsala</option><option value="utrecht">Utrecht</option><option value="valencia">Valencia</option><option value="valletta">Valletta</option><option value="vancouver">Vancouver</option><option value="victoria">Victoria</option><option value="vienna">Vienna</option><option value="vilnius">Vilnius</option><option value="warsaw">Warsaw</option><option value="washington-dc">Washington, D.C.</option><option value="wellington">Wellington</option><option value="winnipeg">Winnipeg</option><option value="wroclaw">Wroclaw</option><option value="yerevan">Yerevan</option><option value="zagreb">Zagreb</option><option value="zurich">Zurich</option>
</select>
 <button
            onClick={(e) => this.onEnter(e)}> SUMBIT
          </button>
          </form>

          <img className="cityImage" src={this.state.image} alt="Cityscape"/>


          <div> {cityName.toUpperCase()} </div>


         <ul>
            <li> Overall Quality of Life: {this.state.scoreTotal}</li>
            <li> {cityName} </li>
            <li> {description} </li>
          <div className="Housing">
            <li>  {this.state.housing}</li>
            <li> {this.state.housingScore}</li>
          </div>

        </ul>
      </div>
    );
  }
}


export default App;

 //<Categories categories={this.state.categories}/>
