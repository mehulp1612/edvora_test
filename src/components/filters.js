import logo from '../constants/Logo.png';
import {useState} from 'react';
import Cards from './cards';
export default function Filters(props){

    const [selected,setSelected]=useState(true);

    const container={
        display:'flex',
        flexDirection:'column',
        margin:'30px 47px 0 43px'
    }


    const group1={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'413px',
        font:'inter',
        fontWeight:'400 regular',
        fontSize:'18px',
        lineHeight:'21.78px',
        color:'#D0CBCB',
    }
    const unselectedButton={
        font:'inter',
        fontWeight:'400 regular',
        color:'#D0CBCB',
    }

    const selectedButton={
        color:'#FFFFFF',
        font:'inter',
        fontWeight:'700 bold',
        textDecoration:'underline solid 2px',
    }

    const buttons={
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    }

    const filter_Style={
        font:'Inter',
        fontWeight:'500px Medium',
        fontSize:'16px',
        lineHeight:'19.36px',
        color:'#F2F2F2',
        // marginTop:'31px',

    }

    const filterImg_Style={
        width:'18px',
        height:'12px',
        margin:'6px 8px 0 0',
    }

    const filter_Container={
        display:'flex',
        flexDirection:'row',
        // marginRight:'47px',

    }

    console.log(props);

    return(
        <div style={container}>
            <div style={buttons}>
                <div style={group1}>
                    <div style={selected?selectedButton:unselectedButton}>Nearest Rides</div>
                    <div>UpcomingRides (4)</div>
                    <div>Past Rides (2)</div>
                </div>
                <div style={filter_Container}>
                    <img src={logo} style={filterImg_Style}></img>
                    <div style={filter_Style}>Filters</div>
                </div>
                
            </div>
            
            <Cards stations={props.stationData}></Cards>
        </div>
    )
}