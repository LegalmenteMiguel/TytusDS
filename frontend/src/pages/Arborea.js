import React from 'react';
import {Link} from 'react-router-dom'

import Button from '../components/Button'
import ItemArborea from '../items/ItemArborea'

import '../Global.css'

class Arborea extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="row Center ">
                    {ItemArborea.map((item, index) =>{
                        return (
                            <div className="col Center2">
                                <Link className="Link_text" to={item.path}>
                                    <Button 
                                        name={item.name}
                                        logo={item.logo}
                                        clas={item.class}
                                    />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Arborea;