import React from "react";
// Components
import BadgesList from "../components/BadgesList";
// ages
import PageLoading from "../components/PageLoading";
// Styles
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import { Link } from "react-router-dom";
import api from '../api';


class Badges extends React.Component {
  constructor(props) {
    // El super es necesario para el constructor
    super(props);
    
    this.state = {
      data: undefined,
      error: null,
      loading: true,
    };
    console.log("1. Constructor");
  }

  // El mejor lugar para trabajar con APIS es aquí
  componentDidMount() {
    console.log("3. componentDidMount");
    this.fetchData();
  }


  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("4. componentDidUpdate");
    console.log({
      prevProps: prevProps,
      prevState: prevState,
    });
    console.log({
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("5. componentWillUnmount");
    clearTimeout(this.timeoutId);
  }

  render() {

    // Manejando por si no están los datos
    if(this.state.loading){
      return <PageLoading />
    }

    // Manejo en caso de tener un error en la API
    if(this.state.error){
      return `Error ${this.state.error.message}`;
    }

    console.log("2. Render");
    // El React.Fragment es para decirle a React que es sólo 1 elemento el que vamos a renderizar y así metemos todo el contenido dentro de éste.
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <BadgesList badges={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
