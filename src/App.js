import React, { Component, Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AppHeader from './pages/common/header';
// import { AppFooter } from './pages/common/footer';
import { Switch  } from 'react-router-dom';
import { Home  } from './pages/dashboard/home';
import { About } from './pages/dashboard/about';
import  News  from './pages/dashboard/news';
import { Contact } from './pages/dashboard/contact';
import { AppLayout } from './pages/route-config/AppLayout';
import { UserDetails } from './pages/personal-details/user-details';
import { StateComponent } from './pages/dashboard/state-details';

// const FunComponent = (
//   lazy(() => (
//     new Promise((resolve) => {
//       setTimeout(resolve, 1000);
//     }).then( () => import('./pages/dashboard/news'))
//   ))
// )

// const HOC = (WrappedCmp, passingProps) => {
//   class MyCmp extends Component {
//       constructor() {
//         super();
//         this.state= {
//           isLoading: true
//         }
//       }

//       componentDidMount() {
//         setTimeout(() => {
//           this.setState({ isLoading: false})
//         },2000)
//       }

//       render () {
//         return this.state.isLoading ? <LoadingMessag /> : <WrappedCmp {...passingProps} /> 
//       }
//   }

//   return <MyCmp />
// }

const LoadingMessag = () => <h1>Loadeing.....</h1>

export class App extends Component {
  render () {
    return <React.Fragment>
        <Suspense fallback={<LoadingMessag />}>
          <Switch>
          <AppLayout exact path='/' showNav={false} component={Home} />
          <AppLayout exact path='/home' showNav={false} component={Home} />
          <AppLayout exact path='/about-us' showNav={false} component={About} />
          <AppLayout exact path='/news'showNav={false}  component={News} />
          <AppLayout exact path='/news/:id' showNav={true} component={UserDetails} />
          <AppLayout exact path='/contact' showNav={true} component={Contact} />
          <AppLayout exact path='/state/:state' showNav={false} component={StateComponent} />
          <AppLayout exact path='/employee-details/:employeeName' showNav={false} component={UserDetails}/>
          </Switch>
        </Suspense>
    </React.Fragment>
  }
}


export default App;
