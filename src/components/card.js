


export default function Card(props){


    const container={
        background:'#171717',
        // width:'1280px',
        borderRadius:'10px 10px',
        margin:'0 0 13px 0 ',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        color:'#FFFFFF',
    }

    const img_Style={
        margin:'22px 0 28px 29px',
        borderRadius:'5px 5px',
        width:'296px',
        height:'148px',
    }



    console.log(props);
    return(
        <>
       <div style={container}>
           <img style={img_Style} src={props.station.map_url}></img>
           <div>
               <div>Ride Id: {}</div>
               <div>Origin Staion: </div>
               <div>station_path: </div>
               <div>Date: </div>
               <div>Distance: </div>
           </div>
           <div>
               <div>{props.station.city}</div>
               <div>{props.station.state}</div>
           </div>
       </div>
        </>
    )
}