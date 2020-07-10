import React from 'react'

function dispatch(action, value) {
switch(action){
    case "populate":
      this.setState({hosts: value.hosts})
      break;
    case "add":
        this.setState((state) => {
            return { hosts: [...state.hosts, value]}
        });
        break;
    case "remove":
        this.setState((state) => {
            const hosts = state.hosts.filter((host) => {
                return value !== host.id;
            })
            return {hosts}
        })
        break;
    case "update":
        this.setState((state) => {
            const hosts = state.hosts.map((host) => {
                if(value.id === host.id){
                    return value;
                }else{
                    return host;
                }
            });
            return {hosts};
        });
        break;
    default: 
      console.log("in default")
    }
}

const HostsContext = React.createContext({
  hosts: [],
  dispatch: () => {},
  auth: false
})




export {
  dispatch,
  HostsContext
}
