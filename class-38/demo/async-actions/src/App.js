import { getRemoteData } from './store/actions';
import { connect } from 'react-redux';
import './App.css';
function App(props) {
  const className = "card"
  return (

    <>
      <button onClick={props.getRemoteData}>Get Digimons</button>
      <section className="container">
        {
          props.digimons.map(digimon =>{
            return(
              <div className={className} key={digimon.name}>
                <h3 className="card__title">{digimon.name}</h3>
                <img className="card__img" src={digimon.img} alt=""/>
                <p className="card__description">{digimon.level}</p>
              </div>
            )
          })
        }
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    digimons: state.results,
  };
};
const mapDispatchToProps = { getRemoteData };
export default connect(mapStateToProps, mapDispatchToProps)(App);
