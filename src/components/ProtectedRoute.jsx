import React from "react";
import { Route, Redirect } from "react-router-dom";
import { HostsContext } from '../Context/HostsContext'

class ProtectedRoute extends React.Component {
  static contextType = HostsContext;
  state = {
    // auth: false,
    loading: true,
  };

  getHosts = async () => {
    return await fetch(
      `http://localhost:3000/hosts`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  }

  checkStatusCode = (response) => {
    if (response.status >= 400) {
      throw new Error("not authorized");
    }
  }

  setTokenAndDispatch = async (response) => {
    const { jwt, hosts } = await response.json();
    localStorage.setItem("token", jwt);
    this.context.dispatch("populate", hosts);
  }

  setLoading = () => this.setState({ loading: false });

  async componentDidMount() {
    try {
      const response = await this.getHosts()
      this.checkStatusCode(response)
      await this.setTokenAndDispatch(response)
    } catch (err) {
      this.context.dispatch("logout")
    } finally {
      this.setLoading()
    }
  }
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('token')}`
      //   }
      // })
  //     if (response.status >= 400) {
  //       throw(new Error("not authorized"))
  //     } else { 
  //       const { jwt, hosts } = await response.json()
  //       localStorage.setItem('token', jwt)  
  //       this.context.dispatch("populate", hosts)   
  //       this.setState({
  //         auth: true,
  //         loading: false,
  //       });
  //     }
  //   } catch(err) {
  //     this.setState({
  //       loading: false,
  //     });
  //   }
  // }
  

  render() {
    const { loading } = this.state;
    const { auth } = this.context;
    if (!loading && !auth) {
      return <Redirect to="/login" />;
    } else {
      return (!loading && (
        <Route
          exact={this.props.exact}
          path={this.props.path}
          component={this.props.component}
        />
       )
       );
    }
   }
}

export default ProtectedRoute;
