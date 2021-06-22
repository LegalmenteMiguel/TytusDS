import React from 'react'
import VisNetwork from 'vis-network-react'

var hosts = [
    {id:1,  level: 1,label: "RAÍZ" },
    {id:2,  level: 2,label: "IZQ 1" },
    {id:3,  level: 2,label: "DER 1" },
    {id:4,  level: 3,label: "IZQ 2" },
    {id:5,  level: 3,label: "IZQ DER" },
    {id:6,  level: 3,label: "DER IZQ" },
    {id:7,  level: 3,label: "DER 2" },
    {id:8,  level: 4,label: "NIETO II" },
    {id:9,  level: 4,label: "NIETO DD" },
    {id:10, level: 4,label: "NIETO DI" },
    {id:11, level: 5,label: "NIETO DD 2" },
];

var relationships = [
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3, to: 6},
    {from: 3, to: 7},
    {from: 4, to: 8},
    {from: 7, to: 9},
    {from: 6, to: 10},
    {from: 10, to: 11}
];

const data = {
    nodes: hosts,
    edges: relationships
}


const options = {
    autoResize: false,
    edges:{
        color: "#411811",
        arrows:{
            to:{
                enabled: true
            }
        },
        shadow: true,
        
    },
    nodes:{
       widthConstraint:50,
        shape: 'box',
        shadow: true,
        color: "#B5EAD7",
        border: 2
    },
    interaction: {
        dragNodes :false
    },
    physics: {
        enabled: false
    },
    layout: {
        hierarchical: {
            levelSeparation: 100,
            nodeSpacing: 100,
            parentCentralization: true,
            direction: 'UD',        // UD, DU, LR, RL
            sortMethod: 'hubsize',  // hubsize, directed
            shakeTowards: 'roots'  // roots, leaves                        
        },
    }
};

function threeB(){
    return (
        <div style={{ height: "540px", width: "1200 px", border: "1px" }}>
            <VisNetwork data= {data} options = {options} />
        </div>
    );
}

export default threeB;