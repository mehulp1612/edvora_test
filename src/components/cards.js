import Card from "./card"


export default function Cards(props){

    console.log(props.stations);


    return(
        <>
        {props?.stations?.map((data,ind)=>{
            return(
             <Card station={data} key={ind}></Card>)
         })}

        </>
    )
}