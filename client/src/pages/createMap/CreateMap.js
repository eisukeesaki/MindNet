
import React from "react";
import router from "../../Components/CreateMap/router";
import routes from "../../Components/CreateMap/routes";
import Content from "../../Components/CreateMap/Content";
import Headers from "../../Components/Header/Headers";
import '../../pages/createMap/createMap.css'
import Footer from "../../Components/Footer/Footer";
import { Component } from "react";

class CreateMap extends Component {
    constructor(props) {
        super(props);
        router.init(routes);
        const route = router.getRoute();
        this.state = {
            component: route.component,
            breadcrumbs: route.breadcrumbs,
            isMenuVisible: false
        };
        router.subscribe(this.onRouteChange);
    }
    _isMounted = false;
    componentDidMount() {
        this._isMounted = true;
    }
    onRouteChange = () => {
        const route = router.getRoute();
        if (this._isMounted) {
            this.setState({
                component: route.component,
                breadcrumbs: route.breadcrumbs
            });
        }
    };
    toggleMenu = () => {
        const isMenuVisible = !this.state.isMenuVisible;
        this.setState({ isMenuVisible });
    };
    hideMenu = () => {
        this.setState({ isMenuVisible: false });
    };
    render() {
        return (<div>
            <Headers />
            <Content component={this.state.component} />
            <Footer />
        </div>);
    }
}

export default CreateMap;