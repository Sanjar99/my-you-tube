import './Glavniy.scss'
import {Switch , Route} from 'react-router-dom'

//pages//
import Channel from './../Channel/Channel'
import Player from './../Player/Player'
  // components//

import Suggestions from './../../components/Suggestions/Suggestions'

function Glavniy () {
  return (
    <section className='Glavniy'>
      
            <Switch>
                    <Route path='/' component={Suggestions} exact/>
                    <Route path='/channel' component={Channel}/>
                    <Route path='/video/:id?' component={Player}/>
                </Switch>
          </section>
        )
    }
      
export default Glavniy

      